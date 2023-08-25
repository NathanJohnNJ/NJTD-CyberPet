import '../style.css';

const Buttons = (props) => {

    let increaseFactor, decreaseFactor;
    if(props.difficulty==="hard"){
         increaseFactor = 1;
         decreaseFactor = 3;
    } else if(props.difficulty==="medium"){
         increaseFactor = 2;
         decreaseFactor = 2;
    } else {
         increaseFactor = 3;
         decreaseFactor = 1;
    }
    let hunger = props.hunger
    let setHunger = props.setHunger
    let thirst = props.thirst
    let setThirst = props.setThirst
    let energy = props.energy
    let setEnergy = props.setEnergy
    let happiness = props.happiness
    let setHappiness = props.setHappiness
    let activity = props.activity

    function food(e){
        e.preventDefault()
        props.setHunger(props.hunger + 3*increaseFactor)
        setThirst(thirst - 2*decreaseFactor)
        setHappiness(happiness + 3*increaseFactor)
        setEnergy(energy + 5*decreaseFactor)
    }
    function drink(e){
        e.preventDefault()
        props.setThirst(props.thirst + 3*increaseFactor)
        setHunger(hunger + increaseFactor)
        setHappiness(happiness + 2*increaseFactor)
        setEnergy(energy + increaseFactor)
    }
    function sleep(e){
        e.preventDefault()
        setEnergy(energy + 3*increaseFactor)
        setHunger(hunger - 2*decreaseFactor)
        setThirst(thirst - 2*decreaseFactor)
        setHappiness(happiness + 2*increaseFactor)
    }
    function activityHandle(e){
        e.preventDefault()
        setEnergy(energy - 2*decreaseFactor)
        setHunger(hunger - 3*decreaseFactor)
        setThirst(thirst - 3*decreaseFactor)
        setHappiness(happiness + 4*increaseFactor)  
    }
 
    return(
        <div className="buttonsDiv">
            <div className="btnDiv" onClick={food}>
                <button className="gameBtn" onClick={food}>FOOD</button>
            </div>
            <div className="btnDiv" onClick={drink}>
                <button className="gameBtn" onClick={drink}>DRINK</button>
            </div>
            <div className="btnDiv" onClick={sleep}>
                <button className="gameBtn" onClick={sleep}>SLEEP</button>
            </div>
            <div className="btnDiv" onClick={activityHandle}>
                <button className="gameBtn" onClick={activityHandle}>{props.activity}</button>
            </div>
            
            </div>
    )
}

export default Buttons;