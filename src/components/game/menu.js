import '../style.css';
import menu from '../../images/menu.png'
import Modal from 'react-modal';
import { useState } from 'react';

const Menu = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        props.setGameDetails(props.gameDetails)
        setModalIsOpen(false)
    }
    const restartHandler = () => {
        props.setGameCookie('');
    } 
    return(
        <div className="menuDiv">
            <img src={menu} className="menuBtn" alt="Menu button" onClick={openModal}></img>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='Menu'
            >
                <div className="menuModal">
                    <button className="closeBtn" onClick={closeModal}>X</button>
                    <button className="restartBtn" onClick={restartHandler}>RESTART</button>
                </div>
            </Modal>
        </div>
    )
}

export default Menu;