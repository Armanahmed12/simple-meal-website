import React from 'react';
import './Header.css';
import img from '../../food-logo.png';

const Header = () => {
    return (
        <nav className='nav-container'>
            <img className='header-logo' src={img} alt="" />
             <ul className='nav-list-container'>
                <li><a href="#home">Home</a></li>
                <li><a href="#hotItems">Hot Items</a></li>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#logIn">Log in</a></li>
             </ul>
        </nav>
    );
};

export default Header;