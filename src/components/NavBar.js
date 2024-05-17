import React from 'react';

export default function NavBar({ onNavigate }) {
    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => onNavigate('home')}>Home</li>
                <li onClick={() => onNavigate('mycloset')}>My Closet</li>
                <li onClick={() => onNavigate('profile')}>Profile</li>
                <li onClick={() => onNavigate('additem')}>Add Item</li>
                <li onClick={() => onNavigate('outfit1')}>Outfit 1</li>
            </ul>
        </nav>
    );
}
