import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Image, Group, Transformer } from 'react-konva';
import useImage from 'use-image';

const URLImage = ({ shapeProps, isSelected, onSelect, onChange }) => {
    const [image] = useImage(shapeProps.src);
    const imageRef = useRef();
    const trRef = useRef();

    useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([imageRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <>
            <Image
                x={shapeProps.x}
                y={shapeProps.y}
                image={image}
                onClick={onSelect}
                onTap={onSelect}
                ref={imageRef}
                draggable
                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
            />
            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </>
    );
};

function Canvas(props) {
    const [selectedId, selectImage] = useState(null);
    const [images, setImages] = useState([
        { src: 'img/black t-shirt.png', x: 10, y: 10, id: '1' },
        { src: 'img/button-up.png', x: 10, y: 10, id: '2' },
        { src: 'img/button-up.png', x: 10, y: 10, id: '3' }
    ]);


    const [stageSize, setStageSize] = useState({ width: 500, height: 500 });
    const stageRef = useRef(null);

    const updateStageSize = () => {
        const container = stageRef.current?.parentNode;
        if (container) {
            const rect = container.getBoundingClientRect();
            setStageSize({ width: rect.width, height: rect.height });
        }
    };

    useEffect(() => {
        updateStageSize();
        window.addEventListener('resize', updateStageSize);
        return () => {
            window.removeEventListener('resize', updateStageSize);
        };
    }, []);


    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectImage(null);
        }
    };


    return (
        <div className="card-img">
            <Stage
                width={stageSize.width}
                height={stageSize.height}
                onMouseDown={checkDeselect}
                onTouchStart={checkDeselect} >
                <Layer>
                    {images.map((img, i) => {
                        return (
                            <URLImage
                                key={img.id}
                                shapeProps={img}
                                isSelected={img.id === selectedId}
                                onSelect={() => {
                                    selectImage(img.id);
                                }}
                                onChange={(newAttrs) => {
                                    const updatedImages = images.map(image =>
                                        image.id === img.id ? { ...image, ...newAttrs } : image
                                    );
                                    setImages(updatedImages);
                                }}
                            />
                        );
                    })}
                </Layer>
            </Stage>
        </div>
    );
}

function SaveButton(props) {
    // TODO: handle button interaction
    const handleClick = (event) => {
        // save canvas state/take screenshot
        console.log("Clicked save button.")
    }

    // TODO: change routing so that database is updated with new image
    return (
        <a className="cta-button" href="index_after.html" role="button">
            Save
        </a>
    );
}

function OutfitDate(props) {
    // TODO: function to change data
    // prop passed in from parent??
    const date = "Tuesday, April 16";
    return <h1>{date}</h1>;
}

function OutfitName(props) {
    // TODO: allow user to change name of outfit
    const name = "Untitled";
    return <p>{name}</p>;
}

export function CanvasFrame(props) {
    return (
            <div className="col1">
                <div className="card">
                    <div className="card-header">
                        <OutfitDate />
                        <SaveButton />
                    </div>
                    <div className="card-content glass">
                        <OutfitName />
                        <Canvas />
                    </div>
                </div>
            </div>
    );

}