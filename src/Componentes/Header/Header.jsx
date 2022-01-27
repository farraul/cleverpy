import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/Logotipo.png';

const Header = () => {

    return (
        <header>

            <div className='header-section'>
                <div>
                    <img className="logo" src={logo}/>
                </div>
                <p>Header</p>
            </div>
        </header>
    )
};

export default Header;