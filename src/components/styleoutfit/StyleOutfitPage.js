import React, {useState} from 'react';
import { CanvasFrame } from './Canvas';
import Mycloset from '../closet/MyclosetPage';

export default function StyleOutfit(props) {
    const [selectedClothes, setSelectedClothes] = useState([]);

    return (
        <div className="style-content">
            <CanvasFrame selectedClothes={selectedClothes}/>
            <div className="col2">
                <Mycloset curentuser={props.currentUser} 
                selectedClothes={selectedClothes}
                setSelectedClothes={setSelectedClothes}
                showButton={false}/>
            </div>
        </div>
    );
}