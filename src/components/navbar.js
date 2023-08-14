import './style.css';
import LoginOrOut from './loginOrOut.js';
import { Outlet, NavLink } from 'react-router-dom';

const NavBar = (props) => {

    return(
        <>
        <div className="navbarMain">
            <div className="navbarLeft">
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/">HOME</NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/game">GAME</NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/njcodes">NJCODES</NavLink>
            </div>
            <div className="navbarRight">
                 <LoginOrOut cookie={props.cookie} setCookie={props.setCookie} user={props.user} setUser={props.setUser} token={props.token} setToken={props.setToken} gamesDetails={props.gameDetails} /> 
            </div>
            <div className="mainContent">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default NavBar;
