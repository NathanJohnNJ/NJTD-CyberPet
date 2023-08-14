import Login from './login.js';
import Register from './register.js';
import Logout from './logout.js';
import { useState } from 'react';

const LoginOrOut = (props) => {
    const [username, setUsername] = useState('');
    
    return(
        <div className="loginOrLogout">
        {!props.cookie?
        <div className="loginReg">
            <div className="login">
                <Login username={username} setUsername={setUsername} setUser={props.setUser} token={props.token} gameDetails={props.gameDetails} />
            </div>
            <div className="register">
                <Register />
            </div>
        </div>
    :
        <div className="logout">
            <Logout username={username} setUser={props.setUser} token={props.token} gameDetails={props.gameDetails} />
        </div>
        }
        </div>
    )
}

export default LoginOrOut;