import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddOutfitButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/styleoutfit');
    };

    return (
        <button onClick={handleClick} className="add-outfit-button">
            Add New Outfit
        </button>
    );
}

export default AddOutfitButton;