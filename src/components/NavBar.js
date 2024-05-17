import React from 'react';

export default function NavBar(props) {
    return (
        <header role="banner">
            <div className="menu-bar">
                <div className="logo">
                    <a href="index.html"><img src="icon/logo 2.svg" alt="closetify" /></a>
                </div>
                <div className="icon-group">
                    <nav className="icon-menu" role="navigation">
                        <a href="#mobileNavDropdown">
                            <img className="icon-svg" src="icon/hamburger.svg" alt="menu" />
                        </a>
                    </nav>
                </div>
                <nav className="menu-list-desktop" role="navigation">
                    <div className="nav-item nav-current">
                        <img src="icon/pin.svg" alt="pin" />
                            <a href="index.html">Home</a>
                    </div>
                    <div className="nav-item">
                        <a href="mycloset.html">My Closet</a>
                    </div>
                    <div className="nav-item">
                        <a href="profile.html">Profile</a>
                    </div>
                </nav>
            </div>
            <div id="mobileNavDropdown" className="dropdown-content">
                <div className="menu-list-mobile">
                    <div className="menu-list-mobile-pin">
                        <img src="icon/pin.svg" alt="pin" />
                    </div>
                    <a href="index.html">
                        <h1>Home</h1>
                    </a>
                </div>
                <div className="menu-list-mobile">
                    <div className="menu-list-mobile-pin">
                    </div>
                    <a href="mycloset.html">
                        <h1>My Closet</h1>
                    </a>

                </div>

                <div className="menu-list-mobile">
                    <div className="menu-list-mobile-pin">
                    </div>
                    <a href="profile.html">
                        <h1>Profile</h1>
                    </a>

                </div>
            </div>

        </header>
    );
}
