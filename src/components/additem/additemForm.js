import React, { useState } from 'react';
import selectOptions from '../../data/options.json';

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

export default function ItemForm() {

    //States are setted for future, currently not working
    const [itemPhoto, setItemPhoto] = useState(null);
    const [fields, setFields] = useState({
        category: '',
        weather: '',
        occasion: '',
        aesthetics: '',
    });

    //EvenListenrs and Callbacks are setted for future, currently not working
    const handleInputChange = (field) => (event) => {
        setFields({
            ...fields,
            [field]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        console.log(fields);
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
            {filterArray}
            <button type="submit">Add Item</button>
        </form>
    );
}