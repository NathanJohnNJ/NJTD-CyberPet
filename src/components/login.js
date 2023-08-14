import Modal from 'react-modal';
import { useState } from 'react';
import { loginUser } from '../utils/index.js';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
    const [password, setPassword] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }
    async function loginHandler(){
        const loggedIn = await loginUser(props.username, password, props.setUser, props.setCookie, props.setToken)
        console.log(loggedIn)
    }

    return(
        <div className="login">
            <button className="loginBtn" onClick={openModal}>LOGIN</button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='Login'
            >
                <div className="loginModal">
                    <button className="closeBtn" onClick={closeModal}>X</button>
                    <form onSubmit={loginHandler}>
                        <label className="registerLabel">USERNAME:
                            <input className="registerInput" onChange={(e) => props.setUsername(e.target.value)}></input>
                        </label>
                        <label className="registerLabel">PASSWORD:
                            <input type="password" className="registerInput" onChange={(e) => setPassword(e.target.value)}></input>
                        </label>
                        <NavLink to="/" className="loginBtn" type="submit">LOGIN</NavLink>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default Login;