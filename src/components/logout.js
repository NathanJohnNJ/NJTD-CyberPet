import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import { saveGame } from '../utils/index.js';

const Logout = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }
    async function saveGameFunc(){
        const savedGame = await saveGame(props.username, props.setUser, props.token, props.gameDetails)
        console.log(savedGame)
    }

    return(
        <nav className="logout">
            <button className="logoutBtn" onClick={openModal}>LOGOUT</button>
            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='Logout'
            >
                <div className="logoutModal">
                    <button className="closeBtn" onClick={closeModal}>X</button>
                    <div className="saveQ">
                        <p className="logoutLabel">Would you like to save your game?</p>
                        <div className="saveBtns">
                            <NavLink className="yes" to="/" onClick={saveGameFunc}>YES</NavLink>
                            <NavLink className="no" to="/" onClick={closeModal}>NO</NavLink>
                        </div>
                    </div>
                </div>
            </Modal>
        </nav>
    )
}

export default Logout;