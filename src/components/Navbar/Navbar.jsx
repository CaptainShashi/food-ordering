import React, { useState } from "react";
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <Link to='/' ></Link>
            <Link to='/' ><img src={assets.logo} alt="Logo" className="logo" /></Link>
            <ul className="navbar-menu">
                <li>
                    <Link
                        to="/"
                        onClick={() => setMenu('home')}
                        className={menu === 'home' ? 'active' : ''}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <a
                        href="#explore-menu"
                        onClick={() => setMenu('Menu')}
                        className={menu === 'Menu' ? 'active' : ''}
                    >
                        Menu
                    </a>
                </li>
                <li>
                    <a
                        href="#app-download"
                        onClick={() => setMenu('mobile-app')}
                        className={menu === 'mobile-app' ? 'active' : ''}
                    >
                        Mobile App
                    </a>
                </li>
                <li>
                    <a
                        href="#footer"
                        onClick={() => setMenu('contact-us')}
                        className={menu === 'contact-us' ? 'active' : ''}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar-search-icon">
                    <Link to='/cart' > <img src={assets.basket_icon} alt="Basket Icon" /> </Link>
                    <div className="dot"></div>
                </div>
            </div>
            <div>
                <button onClick={() => setShowLogin(true)}>Sign-Up</button>
            </div>
        </div>
    );
};

export default Navbar;