
export default function ProfilePage(props) {


    return (
        <div className="profile-section">
            <div className="profile-info">
                <img src="img/pfp.jpg" alt="Profile Photo" className="profile-photo" />
                <h1 className="profile-name">Your Name</h1>
                <p className="profile-username">@username</p>
            </div>
            <div className="profile-actions">
                <button className="edit-button">Edit</button>
                <button className="logout-button">Log Out</button>
            </div>
        </div>
    );
}