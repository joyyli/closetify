// import statements
import ItemForm from './additemForm'
import { useState } from 'react';
import { getDatabase, ref, push as FirebasePush } from 'firebase/database';

export default function Additem(props) {
    const [alertMessage, setAlertMessage] = useState(null);

    const addItem = (field, url) => {
        const { userId, userName } = props.currentUser;
        const newItemObj = {
            ...field,
            "userId": userId,
            "userName": userName,
            "timestamp": Date.now(),
            "img": url,
        }

        const db = getDatabase();
        const closetRef = ref(db, "closet");

        FirebasePush(closetRef, newItemObj)
            .catch((error) => {
                setAlertMessage("Error : " + error.message);
            });

    }

    return (
        <div className="add-item-container">
            <h1>Add New Item to Your Closet</h1>
            {alertMessage &&
                <div className="alert">
                    <span className="closebtn" onClick={() => setAlertMessage(null)}>&times;</span>
                    {alertMessage}
                </div>
            }
            <div className="add-item-form">
                <ItemForm addItemCallback={addItem} />
            </div>
        </div>
    );
}