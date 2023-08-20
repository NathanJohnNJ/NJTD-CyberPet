import Modal from 'react-modal';
import { useState } from 'react';

const GameOver = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    function openModal(){
        setModalIsOpen(true);
    }
    function closeModal(){
        setModalIsOpen(false);
    }

    return(
        <div className="gameOverDiv">
            <Modal
            isOpen={true}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='gameOver'
            >
                <div className="gameOverModal">
                    <button className="closeBtn" onClick={closeModal}>X</button>
                    <h1 className="gameOver">! !  GAME OVER  ! !</h1>
                    <h2 className="gameOverReason">{props.reason}</h2>
                </div>
            </Modal>
        </div>
    )
};

export default GameOver;