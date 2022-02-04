import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT_USER } from '../../redux/types';

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
                {/* aqui irá el logotipo correcto <img className="logo" src={logo} /> */}
                Raul
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