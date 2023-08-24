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

    function food(){
            setHunger(hunger += 5*increaseFactor)
            setThirst(thirst -= 2*decreaseFactor)
            setHappiness(happiness += 3*increaseFactor)
            setEnergy(energy += 5*decreaseFactor)
    }
    function drink(){
            setThirst(thirst += 5*increaseFactor)
            setHunger(hunger += 2*increaseFactor)
            setHappiness(happiness += 3*increaseFactor)
            setEnergy(energy += 2*increaseFactor)
    }
    function sleep(){
            setEnergy(energy += 5*increaseFactor)
            setHunger(hunger -= 3*decreaseFactor)
            setThirst(thirst -= 3*decreaseFactor)
            setHappiness(happiness += 2*increaseFactor)
    }
    function activityHandle(){
            setEnergy(energy -= 2*decreaseFactor)
            setHunger(hunger -= 3*decreaseFactor)
            setThirst(thirst -= 3*decreaseFactor)
            setHappiness(happiness += 5*increaseFactor)  
    }
 
    return(
        <div className="buttonsDiv">
            <button className="foodBtn gameBtn" onClick={food}>FOOD</button>
            <button className="drinkBtn gameBtn" onClick={drink}>DRINK</button>
            <button className="sleeptn gameBtn" onClick={sleep}>SLEEP</button>
            <button className="activityBtn gameBtn" onClick={activityHandle}>{activity}</button>
        </div>
    )
}

export default Buttons;