import React, { useState} from 'react';
import { connect } from 'react-redux';
import { LOAD_USER } from '../../redux/types';
import { useNavigate } from 'react-router-dom';

interface ILoginProps {
    dispatch: ( dispatch: { type: string, payload: string } ) => void;
}

const Login = ( props: ILoginProps ) => {

    const user: string = "cleverpy";
    const password: string = "12345";
 
    const [ credentials, setCredentials ] = useState({ email: '', password: '' });
    const [ msgError, setMsgError ] = useState("");

    const history = useNavigate();

    const handlerInputs = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const goLogin = () => {

        if ( credentials.email === user && credentials.password === password ) {
            props.dispatch({ type: LOAD_USER, payload: "logged_in" });
            history("/posts");
        } else {
            setMsgError("Usuario o contraseña incorrectos")
        }

    }

    return (
        <div className='login-container'>
            <div className='login-container-info'>
                <input className="login-form-input" type='email' name='email' title='email' onChange={handlerInputs} placeholder="Email" />
                <input className="login-form-input" type='password' name='password' title='password' onChange={handlerInputs} placeholder="Contraseña" />
                <div className="error">{msgError}</div>
                <div className="login-sendButton" onClick={() => goLogin()}>Login</div>
            </div>
        </div>
    )
}

interface StateConnect {
    allPosts: object[];
    user: string;
}

export default connect( ( state: StateConnect ) => ({
    allPosts: state.allPosts,
    user: state.user
})) (Login );