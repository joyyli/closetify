import React, { useState } from 'react';

export default function AdditemPage({ addNewOutfit, onNavigate }) {
    const [itemPhoto, setItemPhoto] = useState(null);
    const [fields, setFields] = useState({
        category: '',
        weather: '',
        occasion: '',
        aesthetics: '',
    });

    const handleInputChange = (field) => (event) => {
        setFields({
            ...fields,
            [field]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newOutfit = {
            id: Date.now(),
            image: URL.createObjectURL(itemPhoto),
            name: fields.category,
            description: `${fields.weather} - ${fields.occasion} - ${fields.aesthetics}`
        };
        addNewOutfit(newOutfit);
        onNavigate('home');
    };

    return (
        <div className="add-item-container">
            <h1>Add New Outfit</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="item-photo">Upload a photo of the outfit:</label>
                <input type="file" id="item-photo" name="item-photo" accept="image/*" required onChange={e => setItemPhoto(e.target.files[0])} />
                {/* Repeat the SelectField for each filter */}
                <button type="submit">Add Outfit</button>
            </form>
        </div>
    );
}