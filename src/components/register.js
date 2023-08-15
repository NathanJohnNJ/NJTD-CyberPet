import Modal from 'react-modal';
import { useState } from 'react';
import { registerUser } from '../utils/index.js';
import { NavLink } from 'react-router-dom';


const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [email, setEmail] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // const PasswordChecker = () => {
    //     if(checkPassword === password){
    //         registerHandler()
    //         }else{
    //             console.log("no match")
    //             return(
    //         <p className="noMatch">Passords do not match. Please try again.</p>
    //        ) }
    // }
    
    const registerHandler = async () => {
        const registered = await registerUser(firstName, lastName, username, email, password)
        console.log(registered)
        }
    
    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }
    // async function registerHandler(){
    //     if(checkPassword === password){
    //     const registered = await registerUser(firstName, lastName, username, email, password)
    //     console.log(registered)
    //     }else{
    //         setishidden(false)
    //     }
    // }

    

    return(
        <div className="register">
            <button className="registerBtn" onClick={openModal}>REGISTER</button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='Register'
            >
                <div className="registerModal">
                    <button className="closeBtn" onClick={closeModal}>X</button>
                    <form onSubmit={registerHandler}>
                        <div className="name">
                            <label className="registerLabel">FIRST NAME:
                                <input className="registerInput" onChange={(e) => setFirstName(e.target.value)}></input>
                            </label>
                            <label className="registerLabel">LAST NAME:
                                <input className="registerInput" onChange={(e) => setLastName(e.target.value)}></input>
                            </label>
                        </div>
                        <div className="emailUser">
                            <label className="registerLabel">EMAIL:
                                <input className="registerInput" onChange={(e) => setEmail(e.target.value)}></input>
                            </label>
                            <label className="registerLabel">USERNAME:
                                <input className="registerInput" onChange={(e) => setUsername(e.target.value)}></input>
                            </label>
                        </div>
                        <div className="passwords">
                            <label className="registerLabel">PASSWORD:
                                <input type="password" className="registerInput" onChange={(e) => setPassword(e.target.value)}></input>
                            </label>
                            <label className="registerLabel">REPEAT PASSWORD:
                                <input type="password" className="registerInput" onChange={(e) => setCheckPassword(e.target.value)}></input>
                            </label>
                        </div>
                        <div className="terms">
                            <label className="tsandcs">
                            <p> <input type="checkbox" id="checkbox" name="tsandcs" value="Agree"></input>
                            <span className="text">I have read and agree to the <NavLink className="tandc" target="_blank" to="/terms">terms & conditions</NavLink> of CyberPet by NJ Codes - a branch of NJTD.</span></p>
                            </label>
                        </div>
                        <div>
                            <p className="please">Please press the button below and then login from the home page.</p>
                            <NavLink to="/" className="modalRegisterBtn" type="submit">REGISTER</NavLink>
                            </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default Register;