import React, { useState } from 'react';
import MyclosetPage from './MyclosetPage';
import AddOutfitButton from './components/AddOutfitButton';
import CalendarComponent from './components/Calendar';
import FeedToggle from './components/FeedToggle';
import OutfitFeed from './components/OutfitFeed';

const events = [
    { id: 1, title: 'Casual Outfit', start: new Date(), end: new Date() }
];

const outfits = [
    { id: 1, image: 'path/to/image1.jpg', name: 'Outfit 1', description: 'A nice casual outfit' },
    { id: 2, image: 'path/to/image2.jpg', name: 'Outfit 2', description: 'A formal outfit' }
];

export default function App(props) {
    const [view, setView] = useState('mycloset'); // Default view is 'mycloset'

    const handleToggle = (newView) => {
        setView(newView);
    };

    return (
        <div className="app">
            <AddOutfitButton />
            <FeedToggle onToggle={handleToggle} />

            {view === 'mycloset' && <MyclosetPage clothesList={props.clothesList} />}
            {view === 'outfitFeed' && <OutfitFeed outfits={outfits} />}
            {view === 'calendar' && <CalendarComponent events={events} />}
        </div>
    );
}