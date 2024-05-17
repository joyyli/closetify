import React from 'react';

export default function NavBar() {

    return (
        <header role="banner">
        <div class="menu-bar">
            <div class="logo">
                <a href="OutfitFeed.js"><img src="icon/logo 2.svg" alt="closetify" /></a>
            </div>
            <div class="icon-group">
                <nav class="icon-feed">
                    <a href="OutfitFeed.js">
                        <img class="icon-svg" src="icon/feed_on.svg" alt="feed"/>
                    </a>
                </nav>
                <nav class="icon-menu" role="navigation">
                    <a href="#mobileNavDropdown">
                        <img class="icon-svg" src="icon/hamburger.svg" alt="menu"/>
                    </a>
                </nav>
            </div>
            <nav class="menu-list-desktop" role="navigation">
                <div class="nav-item nav-current">
                    <img src="icon/pin.svg" alt="pin"/>
                    <a href="OutfitFeed.js">Home</a>
                </div>
                <div class="nav-item">
                    <a href="MyClosetPage.js">My Closet</a>
                </div>
                <div class="nav-item">
                    <a href="ProfilePage.js">Profile</a>
                </div>
            </nav>
        </div>
        <div id="mobileNavDropdown" class="dropdown-content">
            <div class="menu-list-mobile">
                <div class="menu-list-mobile-pin">
                    <img src="icon/pin.svg" alt="pin"/>
                </div>
                <a href="OutfitFeed.js">
                    <h1>Home</h1>
                </a>
            </div>
            <div class="menu-list-mobile">
                <div class="menu-list-mobile-pin">
                </div>
                <a href="MyclosetPage.js">
                    <h1>My Closet</h1>
                </a>

            </div>

            <div class="menu-list-mobile">
                <div class="menu-list-mobile-pin">
                </div>
                <a href="ProfilePage.js">
                    <h1>Profile</h1>
                </a>

            </div>
        </div>
    </header>

    );
}