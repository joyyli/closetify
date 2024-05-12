import React, { useState } from 'react';
export { ClothesList };

function ClothesList(props) {

    const [category, setCategory] = useState('');
    const [weather, setWeather] = useState('');
    const [occasion, setOccasion] = useState('');
    const [aesthetic, setAesthetic] = useState('');

    const handleFilterChange = (newCategory, newWeather, newOccasion, newAesthetic) => {
        setCategory(newCategory);
        setWeather(newWeather);
        setOccasion(newOccasion);
        setAesthetic(newAesthetic);
        props.applyFilterCallback(newCategory, newWeather, newOccasion, newAesthetic);
    };

    const clothesArray = props.data.map(obj => (
        <div className="clothing-item" key={obj.id}>
            <img src={obj.img} alt={obj.alt} />
        </div>
    ));


    const weatherOptions = [
        { value: 'Sunny', label: 'Sunny' },
        { value: 'Windy', label: 'Windy' },
        { value: 'Rainy', label: 'Rainy' },
        { value: 'Cold', label: 'Cold' }
    ];

    const occasionOptions = [
        { value: 'Casual', label: 'Casual' },
        { value: 'Formal', label: 'Formal' },
        { value: 'Work', label: 'Work' },
        { value: 'Exercise', label: 'Exercise' }
    ];

    const aestheticOptions = [
        { value: 'y2k', label: 'Y2K' },
        { value: 'Preppy', label: 'Preppy' },
        { value: 'Balletcore', label: 'Balletcore' },
        { value: 'Simple', label: 'Simple' }
    ];


    let newClothesData = [...props.data];





    return (<div className="closet-intro">
        <div className="scrollmenu">
            {['Tops', 'Bottoms', 'Dresses and Skirts', 'Outerwear', 'Shoes', 'Accessories'].map(name => (
                <SortCategory
                    key={name}
                    active={category === name}
                    name={name}
                    onClick={() => handleFilterChange(name, weather, occasion, aesthetic)}
                />
            ))}
        </div>

        <div className="scrollmenu">
            <FilterPill
                id="weather"
                name="Weather"
                value={weather}
                onChange={e => handleFilterChange(category, e.target.value, occasion, aesthetic)}
                options={weatherOptions}
            />
            <FilterPill
                id="occasion"
                name="Occasion"
                value={occasion}
                onChange={e => handleFilterChange(category, weather, e.target.value, aesthetic)}
                options={occasionOptions}
            />
            <FilterPill
                id="aesthetic"
                name="Aesthetic"
                value={aesthetic}
                onChange={e => handleFilterChange(category, weather, occasion, e.target.value)}
                options={aestheticOptions}
            />
        </div>

        <div className='closet'>
            {clothesArray}
        </div>
    </div>
    )
}

function SortCategory(props) {
    let iconclassName = "";
    if (props.active) { iconclassName += 'selected-item' }

    return (
        <div className={"item" + iconclassName}>
            {props.active && <img src="icon/pin.svg" alt="pin" />}
            <a href="#" onClick={() => props.onClick(props.value)}>{props.name}</a>
        </div>
    )
}

function FilterPill({ id, name, value, onChange, options }) {
    return (
        <div className="filter-pill">
            <select id={id} name={name} value={value} onChange={onChange}>
                <option value="">{name}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default FilterPill;

