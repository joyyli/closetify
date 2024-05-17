import React, { useState } from 'react';
// TODO: temporary, feed in props from App later after setting up routing
const navItems = [{ current: true, linkTo: "index.html", text: "Home" },
{ current: false, linkTo: "mycloset.html", text: "My Closet" },
{ current: false, linkTo: "profile.html", text: "Profile" }];

export default function NavBar(props) {
    const [showMobileMenu, toggleMobile] = useState(false);

    const toggleMobileMenu = function (event) {
        event.preventDefault();
        toggleMobile(!showMobileMenu);
    }

    return (
        <header role="banner">
            <div className="menu-bar">
                <div className="logo">
                    <a href="index.html"><img src="icon/logo 2.svg" alt="closetify" /></a>
                </div>
                <MobileNav toggleMobileMenu={toggleMobileMenu} />
                <DesktopNav />
            </div>
            {showMobileMenu && <MobileDropdownMenu />}
        </header>
    );
}

// DESKTOP NAV

// TODO: change <a> to <link> after routing
function DesktopNavItem({ current, linkTo, text }) {
    // current is a boolean
    return (
        <div className={current ? "nav-item nav-current" : "nav-item"}>
            {current && <img src="icon/pin.svg" alt="pin" />}
            <a href={linkTo}>{text}</a>
        </div>
    );
}

function DesktopNav(props) {
    // TODO: pass down navitems as state variable so that "current" is updated onClick

    const navArray = navItems.map((item) => (
        <DesktopNavItem key={item.text} current={item.current} linkTo={item.linkTo} text={item.text} />
    ));

    return (
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
    );
}

// MOBILE NAV

// TODO: fix dropdown behavior: why does it scroll down to hide the top bar? 
// better to show top bar so it can be closed easily.
function MobileNav(props) {
    return (
        <div className="icon-group" onClick={props.toggleMobileMenu}>
            <nav className="icon-menu" role="navigation">
                <a href="#mobileNavDropdown">
                    <img className="icon-svg" src="icon/hamburger.svg" alt="menu" />
                </a>
            </nav>
        </div>
    );
}

function MobileNavItem({ current, linkTo, text }) {
    // current is a boolean
    return (
        <div className="menu-list-mobile">
            <div className="menu-list-mobile-pin">
                {current && <img src="icon/pin.svg" alt="pin" />}
            </div>
            <a href={linkTo}>
                <h1>{text}</h1>
            </a>
        </div>
    );
}

function MobileDropdownMenu(props) {
    const navArray = navItems.map((item) => (
        <MobileNavItem key={item.text} current={item.current} linkTo={item.linkTo} text={item.text} />
    ));
    return (
        <div id="mobileNavDropdown" className="dropdown-content">
            {navArray}
        </div>
    );
}