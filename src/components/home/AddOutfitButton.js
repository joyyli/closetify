import React from 'react';

export default function AddOutfitButton({ onClick }) {
    return (
        <button className="add-outfit-button" onClick={onClick}>
            Add Outfit
        </button>
    );
}