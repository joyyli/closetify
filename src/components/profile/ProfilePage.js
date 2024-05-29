import { auth } from '../../firebase';

export default function ProfilePage(props) {

    const signOut = () => {
        auth.signOut();
    };


    return (
        <div className="profile-section">
            <div className="profile-info">
                <img src={props.currentUser.photoURL} alt="Profile Photo" className="profile-photo" />
                <h1 className="profile-name">{props.currentUser.displayName}</h1>
                <p className="profile-username">{props.currentUser.email}</p>
            </div>
            <div className="profile-actions">
                <button className="edit-button">Edit</button>
                <button className="logout-button" onClick={signOut}>Log Out</button>
            </div>
        </div>
    );
}