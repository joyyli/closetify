// import statements
import { useState } from 'react'
import { ClothesList } from './closet/ClothesList'


export default function Mycloset(props) {

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

    const displayedData = props.ClothesList.filter(item =>
        (category === '' || item.category === category) &&
        (weather === '' || item.weather === weather) &&
        (occasion === '' || item.occasion === occasion) &&
        (aesthetic === '' || item.Aesthetic === aesthetic)
    );

    return (
        <div className="closet-intro">
            <a className="cta-button .buttons-desktop" href="additem.html" role="button">
                <img src="icon/camera.svg" alt="camera and plus sign" />
                Add Item
            </a>
            <ClothesList
                data={displayedData}
                applyFilterCallback={applyFilter}
            />
        </div>
    );
}