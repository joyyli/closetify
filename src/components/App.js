// import statements
import { useState } from 'react'
import MyclosetPage from './MyclosetPage';
import AdditemPage from './AdditemPage';
import ProfilePage from './ProfilePage';

export default function App(props) {

    return (
        <MyclosetPage clothesList={props.clothesList} />
        // <AdditemPage />
        //<ProfilePage />
    )
}