// import statements
import { useState, useEffect } from 'react'
import { ClothesList } from './ClothesList'
import Additem from '../additem/AdditemPage'

import React from 'react';
import { NavLink } from 'react-router-dom';

import { getDatabase, ref, onValue } from 'firebase/database';


export default function Mycloset(props) {

    const [closet, setCloset] = useState([]);

    const [category, setCategory] = useState('');
    const [weather, setWeather] = useState('');
    const [occasion, setOccasion] = useState('');
    const [aesthetic, setAesthetic] = useState('');

    const applyFilter = (newCategory, newWeather, newOccasion, newAesthetic) => {
        setCategory(newCategory);
        setWeather(newWeather);
        setOccasion(newOccasion);
        setAesthetic(newAesthetic);
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
            })

            setCloset(objArray); //update state and re-render

            function cleanup() {
                console.log("Component is being removed")
                offFunction();
            }
            return cleanup;
        })
    }, []);



    const displayedData = closet.filter(item =>
        (category === '' || item.category === category) &&
        (weather === '' || item.weather === weather) &&
        (occasion === '' || item.occasion === occasion) &&
        (aesthetic === '' || item.Aesthetic === aesthetic)
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