import './style.css';
import { writeGameCookie } from '../common';
import { NavLink } from 'react-router-dom';

const GameOptions = (props) => {

    const submitHandler = (event) => {
        if(props.pet==="fairy"){
            props.setActivity("Sprinkling Fairy Dust")
        } else if(props.pet==="dragon"){
            props.setActivity("Guarding Treasure")
        }
        const cookie = writeGameCookie(props.pet, props.petName, props.difficulty)
        props.setGameCookie(cookie)
        event.preventDefault()
    }

    return (
        <div className="mainGameComp">
            <div className="gameOptions">
                <form target="self" onSubmit={submitHandler}>
                    <div className="firstField">
                        <fieldset className="fieldSet">
                            <legend className="legend">Select Your Pet:</legend>
                            <div className="checkBoxDiv">
                                <input type="radio" id="fairy" name="pet" value="fairy" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="label" htmlFor="fairy">FAIRY</label>
                            </div>
                            <div className="checkBoxDiv">
                                <input type="radio" id="dragon" name="pet" value="dragon" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="label" htmlFor="dragon">DRAGON</label>
                            </div>
                            <div className="checkBoxDiv">
                                <input type="radio" id="goblin" name="pet" value="goblin" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="label" htmlFor="goblin">GOBLIN</label>
                            </div>
                            <div className="checkBoxDiv">
                                <input type="radio" id="unicorn" name="pet" value="unicorn" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="label" htmlFor="unicorn">UNICORN</label>
                            </div>
                        </fieldset>
                    </div>
                    <label className="label">Choose A Name For Your Pet:
                        <input className="petName" onChange={(e) => props.setPetName(e.target.value)}></input>
                    </label>
                    <div className="secondField">
                        <fieldset className="fieldSet">
                            <legend className="legend">Select Difficulty:</legend>
                            <div className="checkBoxDiv">
                                <input type="radio" id="easy" name="diff" value="easy" onChange={(e) => props.setDifficulty(e.target.value)} />
                                <label className="label" htmlFor="easy">EASY</label>
                            </div>
                            <div className="checkBoxDiv">
                                <input type="radio" id="medium" name="diff" value="medium" onChange={(e) => props.setDifficulty(e.target.value)} />
                                <label className="label" htmlFor="medium">MEDIUM</label>
                            </div>
                            <div className="checkBoxDiv">
                                <input type="radio" id="hard" name="diff" value="hard" onChange={(e) => props.setDifficulty(e.target.value)} />
                                <label className="label" htmlFor="hard">HARD</label>
                            </div>
                        </fieldset>
                    </div>
                    <NavLink onClick={submitHandler} to="/game" className="submit">PLAY NOW</NavLink>
                </form>
            </div>
        </div>
    )
};

export default GameOptions;