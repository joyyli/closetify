// import statements
import { useState, useEffect } from 'react'
import { ClothesList } from './ClothesList'

import React from 'react';
import { NavLink } from 'react-router-dom';

import { getDatabase, ref, onValue } from 'firebase/database';


export default function Mycloset(props) {

    const [closet, setCloset] = useState([]);

    const [category, setCategory] = useState('');
    const [weather, setWeather] = useState('');
    const [occasion, setOccasion] = useState('');

    const applyFilter = (newCategory, newWeather, newOccasion) => {
        setCategory(newCategory);
        setWeather(newWeather);
        setOccasion(newOccasion);
    };

    const currentUser = props.currentUser;

    const db = getDatabase();
    const closetRef = ref(db, "closet");

    useEffect(() => {

        const offFunction = onValue(closetRef, function (snapshot) {
            const closetObj = snapshot.val();
            const objKeys = Object.keys(closetObj);


            const objArray = objKeys.map((keyString) => {
                closetObj[keyString].key = keyString;
                return closetObj[keyString];
            }).filter(item => item.userId == 'default' || item.userId == currentUser.userId);

            setCloset(objArray); //update state and re-render

            function cleanup() {
                offFunction();
            }
            return cleanup;
        })
    }, []);



    const displayedData = closet.filter(item =>
        (category === '' || item.category === category) &&
        (weather === '' || item.weather === weather) &&
        (occasion === '' || item.occasion === occasion)
    );

    return (
        <div className="closet-intro">
            {props.showButton &&
                <NavLink className="cta-button .buttons-desktop" to="/additem" role="button">
                    <img src="icon/camera.svg" alt="camera and plus sign" />
                    Add Item
                </NavLink>
            }

            <ClothesList
                data={displayedData}
                applyFilterCallback={applyFilter}
                selectedClothes={props.selectedClothes}
                setSelectedClothes={props.setSelectedClothes}
            />
            <div className="layer-icon">
                <NavLink to="/additem"><img src="icon/Property 1=picture.svg" alt="Add item icon" /></NavLink>
            </div>
        </div>
    );
}