import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LOAD_USER } from '../../redux/types';
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [msgError, setmsgError] = useState("");

    const history = useNavigate();
   


    const handlerInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const goLogin = async () => {
        if ((credentials.email === "1") && (credentials.password === "1")) {
            props.dispatch({ type: LOAD_USER, payload: "logged_in" });
            history("/posts");
        }
        else {
            setmsgError("Usuario o contraseña incorrectos")
        }
    }


    return (
        <div className='login-container'>
            <div className='login-container-info'>
                <input className="login-form-input" type='email' name='email' title='email' onChange={handlerInputs} lenght='30' placeholder="Email" />
                <input className="login-form-input" type='password' name='password' title='password' onChange={handlerInputs} lenght='30' placeholder="Contraseña" />
                <br />
                <div className="error">{msgError}</div>

                <div className="login-sendButton" onClick={() => goLogin()}>Login</div>
            </div>
        </div>

    )
}

export default connect((state) => ({
    allPosts: state.allPosts,
    user: state.user
}))(Login);