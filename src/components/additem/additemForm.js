import React, { useState } from 'react';
import selectOptions from '../../data/options.json';
import { useNavigate } from 'react-router-dom';

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


function SelectField({ id, label, value, onChange, options }) {

    const optionList = options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
    ))

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} value={value} onChange={onChange} {...(id === "category" ? { required: true } : {})}>
                <option value="">Select {label}</option>
                {optionList}
            </select>
        </div>
    );
}

export default function ItemForm({ addItemCallback }) {

    //States are setted for future, currently not working
    const [itemPhoto, setItemPhoto] = useState(null);
    const [altText, setAltText] = useState('');
    const [fields, setFields] = useState({
        category: '',
        weather: '',
        occasion: '',
    });

    //EvenListenrs and Callbacks are setted for future, currently not working
    const handleInputChange = (field) => (event) => {
        setFields({
            ...fields,
            [field]: event.target.value
        });
    };

    const navigateTo = useNavigate(); //navigation hook


    const handleSubmit = async (event) => {
        event.preventDefault();

        const locationRef = ref(getStorage(), `clothesImg/${Date.now()}/${itemPhoto.name}`);

        const result = await uploadBytes(locationRef, itemPhoto) //get the reference of the result
        const url = await getDownloadURL(result.ref); //use the reference to get the physical url

        addItemCallback({ ...fields, altText }, url);

        navigateTo('/closet');
    };




    const filterArray = selectOptions.filterOptions.map(field => (
        <SelectField
            key={field.id}
            id={field.id}
            label={field.label}
            value={fields[field.id]}
            onChange={handleInputChange(field.id)}
            options={field.options}
        />
    ))

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label htmlFor="item-photo">Upload a photo of the item here:</label>
            <input type="file" id="item-photo" name="item-photo" accept="image/*" required onChange={e => setItemPhoto(e.target.files[0])} />
            <label htmlFor="alt-text">Photo description (alt text):</label>
            <input type="text" id="alt-text" name="alt-text" value={altText} onChange={e => setAltText(e.target.value)} required />
            {filterArray}
            <button type="submit">Add Item</button>
        </form>
    );
}