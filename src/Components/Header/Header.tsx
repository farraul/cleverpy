import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT_USER } from '../../redux/types';
import  logo  from '../../assets/images/Logotipo.png'

interface IHeaderProps {
    dispatch: (dispatch: { type: string }) => void;
    user: string;
}

const Header = (props: IHeaderProps) => {

    const history = useNavigate();
    const logOut = () => {
        props.dispatch({ type: LOGOUT_USER });
        history("/");
    }

    return (
        <header>
            <div className='header-section'>
                { <img className="logo" src={logo} /> }
                <div className='header-menu'>
                    {props.user === "logged_in" && <div className="header-menu-each-div" onClick={() => logOut()}>Desconectar</div>}
                </div>
            </div>
        </header>
    )
};

interface StateConnect {
    allPosts: object[];
    user: string;
}

export default connect( ( state: StateConnect ) => ({
    allPosts: state.allPosts,
    user: state.user
}))( Header );