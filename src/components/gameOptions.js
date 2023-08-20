import './style.css';
import { writeGameCookie } from '../common'

const GameOptions = (props) => {

    const submitHandler = async(event) => {
        props.setGameDetails({
            pet: props.pet,
            petName: props.petName,
            level: props.level,
            stats: {
                hunger: props.hunger,
                thirst: props.thirst,
                energy: props.energy,
                happiness: props.happiness,
                difficulty: props.difficulty
                }
            })
        const cookie = await writeGameCookie(props.user, props.gameDetails)
        props.setGameCookie(cookie)
        console.log(cookie)
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
                    <button type="submit" className="submit">PLAY NOW</button>
                </form>
            </div>
        </div>
    )
};

export default GameOptions;