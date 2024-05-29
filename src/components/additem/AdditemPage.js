// import statements
import { useState } from 'react'

import ItemForm from './additemForm'

import { getDatabase, ref, push as FirebasePush } from 'firebase/database';



export default function Additem(props) {

    const addItem = (field, url) => {
        const { userId, userName, userImg } = props.currentUser;
        const newItemObj = {
            ...field,
            "userId": userId,
            "userName": userName,
            "userImg": userImg,
            "timestamp": Date.now(),
            "img": url,
        }

        const db = getDatabase();
        const closetRef = ref(db, "closet");

        FirebasePush(closetRef, newItemObj);

    }



    return (
        <div className="add-item-container">
            <h1>Add New Item to Your Closet</h1>
            <div className="add-item-form">
                <ItemForm addItemCallback={addItem} />
            </div>
        </div>
    );
}