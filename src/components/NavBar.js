import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase';

const navItems = [
    { linkTo: "/home", text: "Home" },
    { linkTo: "/closet", text: "My Closet" },
    { linkTo: "/profile", text: "Profile" }
];

export default function NavBar({ user }) {
    const [showMobileMenu, toggleMobile] = useState(false);

    const toggleMobileMenu = function (event) {
        event.preventDefault();
        toggleMobile(!showMobileMenu);
    }

    const signOut = () => {
        auth.signOut();
    };

    return (
        <header role="banner">
            <div className="menu-bar">
                <div className="logo">
                    <NavLink to="/home"><img src="icon/logo 2.svg" alt="closetify" /></NavLink>
                </div>
                <MobileNav toggleMobileMenu={toggleMobileMenu} />
                <DesktopNav user={user} signOut={signOut} />
            </div>
            {showMobileMenu && <MobileDropdownMenu user={user} signOut={signOut} />}
        </header>
    );
}

// DESKTOP NAV

// TODO: change <a> to <link> after routing
function DesktopNavItem({ linkTo, text }) {
    return (
        <NavLink
            to={linkTo}
            className={({ isActive }) => (isActive ? "nav-item nav-current" : "nav-item")}
        >
            {({ isActive }) => (
                <>
                    {isActive && <img src="icon/pin.svg" alt="pin" />}
                    {text}
                </>
            )}
        </NavLink>
    );
}

function DesktopNav({ user, signOut }) {
    const navArray = navItems.map((item) => (
        <DesktopNavItem key={item.text} linkTo={item.linkTo} text={item.text} />
    ));

    return (
        <nav className="menu-list-desktop" role="navigation">
            {navArray}
            {user ? (
                <button onClick={signOut} className="nav-item">Sign out</button>
            ) : (
                <NavLink to="/signin" className="nav-item">Sign In</NavLink>
            )}
        </nav>
    );
}

// MOBILE NAV

// TODO: fix dropdown behavior: why does it scroll down to hide the top bar? 
// better to show top bar so it can be closed easily.
function MobileNav({ toggleMobileMenu }) {
    return (
        <div className="icon-group" onClick={toggleMobileMenu}>
            <nav className="icon-menu" role="navigation">
                <a href="#mobileNavDropdown">
                    <img className="icon-svg" src="icon/hamburger.svg" alt="menu" />
                </a>
            </nav>
        </div>
    );
}

function MobileNavItem({ linkTo, text }) {
    return (
        <NavLink
            to={linkTo}
            className={({ isActive }) => (isActive ? "menu-list-mobile nav-current" : "menu-list-mobile")}
        >
            {({ isActive }) => (
                <>
                    {isActive && <img src="icon/pin.svg" alt="pin" />}
                    <h1>{text}</h1>
                </>
            )}
        </NavLink>
    );
}

function MobileDropdownMenu({ user, signOut }) {
    const navArray = navItems.map((item) => (
        <MobileNavItem key={item.text} linkTo={item.linkTo} text={item.text} />
    ));
    return (
        <div id="mobileNavDropdown" className="dropdown-content">
            {navArray}
            {user ? (
                <button onClick={signOut} className="menu-list-mobile">Sign out</button>
            ) : (
                <NavLink to="/signin" className="menu-list-mobile">Sign In</NavLink>
            )}
        </div>
    );
}