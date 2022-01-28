import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/Logotipo.png';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {LOGOUT_USER} from '../../redux/types';




const Header = (props) => {

    const history = useNavigate();

    const goToContainer = (url) => {
        history(url);
    }
    console.log("props user:", props.user)

    const logOut = () => {
        props.dispatch({ type: LOGOUT_USER });
        history("/");
    }

    return (
        <header>

            <div className='header-section'>
                <img className="logo" src={logo} />
                <div className='header-menu'>
                    {props.user != "logged_in" && <div className="header-menu-each-div" onClick={() => goToContainer("/")}>Login</div>}
                    { props.user==="logged_in" && <div className="header-menu-each-div" onClick={() => goToContainer("/posts")}>Posts</div>}
                    { props.user==="logged_in" && <div className="header-menu-each-div" onClick={() => goToContainer("/posts-deletes")}>Posts deletes</div>}
                    { props.user==="logged_in" && <div className="header-menu-each-div" onClick={() => logOut()}>Desconectar</div>}
                </div>
            </div>
        </header>
    )
};


export default connect((state) => ({
    allPosts: state.allPosts,
    user: state.user
}))(Header);