import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Image, Group, Transformer } from 'react-konva';
import useImage from 'use-image';
// temporary
const tempImages = [{ src: 'img/black t-shirt.png', x: 10, y: 10, id: '1' },
        { src: 'img/button-up.png', x: 10, y: 10, id: '2' },
        { src: 'img/sweater.png', x: 10, y: 10, id: '3' }];


// canvas with information, button, etc.
export function CanvasFrame(props) {

    // TODO: export canvas to image
    const saveCanvas = () => {
        console.log("save canvas");
    }

    // Measures size of an outer div so Canvas knows how big to be
    const divRef = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (divRef.current) {
                setWidth(divRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
            <div className="col1">
                <div className="card">
                    <div className="card-header">
                        <OutfitDate />
                        <SaveButton onClick={saveCanvas}/>
                    </div>
                    <div className="card-content glass" ref={divRef}>
                        <OutfitName/>
                        {/* -32 because of padding size */}
                        <Canvas size={width - 32}/>
                    </div>
                </div>
            </div>
    );
}

// code modified from https://konvajs.org/docs/react/Transformer.html
function Canvas(props) {
    const [selectedId, selectImage] = useState(null);
    const [images, setImages] = useState(tempImages);

    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectImage(null);
        }
    };

    const imagesArray = images.map((img, i) => {
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
    });

    return (
        <div className="card-img">
            <Stage
                width={props.size}
                height={props.size}
                onMouseDown={checkDeselect}
                onTouchStart={checkDeselect} >
                <Layer>
                    {imagesArray}
                </Layer>
            </Stage>
        </div>
    );
}

// constructs an image that can be transformed in the canvas
// code modified from https://konvajs.org/docs/react/Images.html
const URLImage = ({ shapeProps, isSelected, onSelect, onChange }) => {
    // loads image using useImage hook
    const [image] = useImage(shapeProps.src);

    const imageRef = useRef();
    const trRef = useRef();

    // bind transformer to image if it's selected
    useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([imageRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    // constrains size of image if too large
    useEffect(() => {
        if (image) {
            const img = imageRef.current;
            const maxDim = 250;
            const scale = Math.min(maxDim / image.width, maxDim / image.height);

            img.width(image.width * scale);
            img.height(image.height * scale);
        }
    }, [image]);

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

function SaveButton(props) {

    // TODO: change routing so that database is updated with new image
    return (
        <div className="cta-button" role="button">
            Save
        </div>
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