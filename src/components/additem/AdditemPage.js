// import statements
import { useState } from 'react'

import ItemForm from './additemForm'

import { getDatabase, ref, push as FirebasePush } from 'firebase/database';



export default function Additem(props) {

    console.log(props.currentUser);


    //setted for callBack later
    const [img, setImg] = useState(null);
    const [category, setCategory] = useState('');
    const [weather, setWeather] = useState('');
    const [occasion, setOccasion] = useState('');
    const [Aesthetic, setAesthetic] = useState('');

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

        // const updateChatMessages = [...chatMessages, newMessage];
        // setChatMessages(updateChatMessages); //update state and re-render
        const db = getDatabase();
        const closetRef = ref(db, "closet");

        // firebaseSet(messageRef, newMessageObj);
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