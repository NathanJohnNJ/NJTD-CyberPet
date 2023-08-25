import './GOstyle.css';
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
        <div className="GOmainGameComp">
            <div className="GOgameOptions">
                <h1 className="GOgameTitle">CYBER PET</h1>
                <form target="self" onSubmit={submitHandler}>
                    <div className="GOfirstField">
                        <fieldset className="GOfieldSet">
                            <legend className="GOlegend">Select Your Pet:</legend>
                            <div className="GOcheckBoxDiv">
                                <input type="radio" id="bear" name="pet" value="bear" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="GOlabel" htmlFor="bear">BEAR</label>
                            </div>
                            <div className="GOcheckBoxDiv">
                                <input type="radio" id="otter" name="pet" value="otter" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="GOlabel" htmlFor="otter">OTTER</label>
                            </div>
                            <div className="GOcheckBoxDiv">
                                <input type="radio" id="pig" name="pet" value="pig" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="GOlabel" htmlFor="pig">PIG</label>
                            </div>
                            <div className="GOcheckBoxDiv">
                                <input type="radio" id="pup" name="pet" value="pup" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="GOlabel" htmlFor="pup">PUP</label>
                            </div>
                            <div className="GOcheckBoxDiv">
                                <input type="radio" id="fox" name="pet" value="fox" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="GOlabel" htmlFor="fox">SILVER FOX</label>
                            </div>
                        </fieldset>
                    </div>
                    <label className="GONameLabel">Choose A Name For Your Pet:</label>
                        <input className="GOpetName" onChange={(e) => props.setPetName(e.target.value)}></input>
                    <div className="GOsecondField">
                        <fieldset className="GOfieldSet">
                            <legend className="GOlegend">Select Difficulty:</legend>
                            <div className="GOcheckBoxDiv">
                                <input type="radio" id="easy" name="diff" value="easy" onChange={(e) => props.setDifficulty(e.target.value)} />
                                <label className="GOlabel" htmlFor="easy">EASY</label>
                            </div>
                            <div className="GOcheckBoxDiv">
                                <input type="radio" id="medium" name="diff" value="medium" onChange={(e) => props.setDifficulty(e.target.value)} />
                                <label className="GOlabel" htmlFor="medium">MEDIUM</label>
                            </div>
                            <div className="GOcheckBoxDiv">
                                <input type="radio" id="hard" name="diff" value="hard" onChange={(e) => props.setDifficulty(e.target.value)} />
                                <label className="GOlabel" htmlFor="hard">HARD</label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="GOSubmitDiv">
                    <NavLink onClick={submitHandler} to="/game" className="GOsubmit">PLAY NOW</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default GameOptions;