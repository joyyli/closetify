// import statements
import { useState } from 'react'
import ItemForm from './additem/additemForm'


export default function Additem(props) {

    //setted for callBack later
    const [img, setImg] = useState(null);
    const [category, setCategory] = useState('');
    const [weather, setWeather] = useState('');
    const [occasion, setOccasion] = useState('');
    const [Aesthetic, setAesthetic] = useState('');



    return (
        <div className="add-item-container">
            <h1>Add New Item to Your Closet</h1>
            <div className="add-item-form">
                <ItemForm />
            </div>
        </div>
    );
}