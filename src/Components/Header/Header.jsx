import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/Logotipo.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const history = useNavigate();

    const goToContainer = (url) => {
        history(url);
    }

    return (
        <header>

            <div className='header-section'>
                <div onClick={() => goToContainer("/")}>
                    <img className="logo" src={logo} />
                </div>
                <div className='header-menu'>
                
                    <div className="header-menu-each-div" onClick={() => goToContainer("/")}>Posts</div>
                </div>
            </div>
        </header>
    )
};

export default Header;