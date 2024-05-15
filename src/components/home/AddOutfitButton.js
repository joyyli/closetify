import React from 'react';
import { useHistory } from 'react-router-dom';

function AddOutfitButton() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/styleoutfit');
    };

    return (
        <button onClick={handleClick} className="add-outfit-button">
            Add New Outfit
        </button>
    );
}

export default AddOutfitButton;