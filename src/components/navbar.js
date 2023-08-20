import './style.css';
import { Outlet, NavLink } from 'react-router-dom';

const NavBar = () => {

    return(
        <>
        <div className="navbarMain">
            <div className="navbarLeft">
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/">HOME</NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/game">GAME</NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/njcodes">NJCODES</NavLink>
            </div>
            <div className="mainContent">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default NavBar;
