import './style.css';

const GameOptions = (props) => {

    function submitHandler(){
        
    }

    return (
        <div className="mainGameComp">
            <div className="background">
                <h1 className="gameTitle">CYBER PET</h1>
                <div className="gameOptions">
                    <form onSubmit={submitHandler}>
                        <fieldset className="fieldSet">
                            <legend className="legend">Select Your Pet:</legend>
                            <div className="checkBoxDiv">
                                <input type="radio" id="fairy" name="pet" value="fairy" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="label" for="fairy">FAIRY</label>
                            </div>
                            <div className="checkBoxDiv">
                                <input type="radio" id="goblin" name="pet" value="goblin" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="label" for="goblin">GOBLIN</label>
                            </div>
                            <div className="checkBoxDiv">
                                <input type="radio" id="unicorn" name="pet" value="unicorn" onChange={(e) => props.setPet(e.target.value)} />
                                <label className="label" for="unicorn">UNICORN</label>
                            </div>
                        </fieldset>
                        <fieldset className="fieldSet">
                            <label className="label">Choose A Name For Your Pet:
                                <input className="petName" onChange={(e) => props.setPetName(e.target.value)}></input>
                            </label>
                        </fieldset>
                        <fieldset className="fieldSet">
                            <legend className="legend">Select Difficulty:</legend>
                            <div className="checkBoxDiv">
                                <input type="radio" id="easy" name="diff" value="easy" onChange={(e) => props.setDifficulty(e.target.value)} />
                                <label className="label" for="easy">EASY</label>
                            </div>
                            <div className="checkBoxDiv">
                                <input type="radio" id="medium" name="diff" value="medium" onChange={(e) => props.setDifficulty(e.target.value)} />
                                <label className="label" for="medium">MEDIUM</label>
                            </div>
                            <div className="checkBoxDiv">
                                <input type="radio" id="hard" name="diff" value="hard" onChange={(e) => props.setDifficulty(e.target.value)} />
                                <label className="label" for="hard">HARD</label>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default GameOptions;