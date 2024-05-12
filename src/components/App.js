// import statements
import { useState } from 'react'
import { ClothesList } from '../components/closet/ClothesList'

export default function App(props) {

    //ClothesList and Filtering logic, pls do not delete it, comments it
    //Will move later after figure out the Nav

    //Starts here

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

    const displayedData = props.clothesList.filter(item =>
        (category === '' || item.category === category) &&
        (weather === '' || item.weather === weather) &&
        (occasion === '' || item.occasion === occasion) &&
        (aesthetic === '' || item.Aesthetic === aesthetic)  // Ensure the property name is correct
    );

    return (
        <ClothesList
            data={displayedData}
            applyFilterCallback={applyFilter}
        />
    );

    //Ends here
}