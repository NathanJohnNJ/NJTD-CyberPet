import '../style.css';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import ProgressBar from './progressBar';
import GameOver from './gameover';

const Stats = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [info, setInfo] = useState({});

    let energy = props.energy
    let happiness = props.happiness
    let hunger = props.hunger
    let thirst = props.thirst
    const setEnergy = props.setEnergy
    const setHappiness = props.setHappiness
    const setHunger = props.setHunger
    const setThirst = props.setThirst
    let depletionRate, increaseFactor, decreaseFactor;
    if(props.difficulty==="hard"){
         depletionRate = 2;
         increaseFactor = 1;
         decreaseFactor = 3;
    } else if(props.difficulty==="medium"){
         depletionRate = 1;
         increaseFactor = 2;
         decreaseFactor = 2;
    } else {
         depletionRate = 0.5;
         increaseFactor = 3;
         decreaseFactor = 1;
    }
    
    useEffect(() => {
        if(energy > 100){
            setEnergy(100)
        }else if(energy > 0){
            setTimeout(() => setEnergy(energy - depletionRate), 1000);
        }else if(energy<=0){
            return(
                <GameOver reason="You ran out of energy!" />
            )
        }
    }, [energy])
    useEffect(() => {
        if(happiness > 100){
            setHappiness(100)
        }else if(happiness > 0){
            setTimeout(() => setHappiness(happiness - depletionRate), 1000);
        }else if(happiness<=0){
            return(
                <GameOver reason="You ran out of happiness!" />
            )
        }
    }, [happiness])
    useEffect(() => {
        if(hunger < 0){
            setHunger(0)
        }else if(hunger < 100){
            setTimeout(() => setHunger(hunger + depletionRate), 1000);
        }else if(hunger>=100){
            return(
                <GameOver reason="You got too hungry!" />
            )
        }
    }, [hunger])
    useEffect(() => {
        if(thirst < 0){
            setThirst(0)
        }else if(thirst < 100){
            setTimeout(() => setThirst(thirst + depletionRate), 1000);
        }else if(thirst>=100){
            return(
                <GameOver reason="You got too thirsty!" />
            )
        }
    }, [thirst])

   

    const food = () => {
        setHunger(hunger -= 10*increaseFactor)
		setThirst(thirst += 5*decreaseFactor)
		setHappiness(happiness += 5*increaseFactor)
		setEnergy(energy -= 5*decreaseFactor)
    }
    const drink = () => {
        setThirst(thirst -= 10*increaseFactor)
		setHunger(hunger -= 5*increaseFactor)
		setHappiness(happiness += 5*increaseFactor)
		setEnergy(energy += 5*increaseFactor)
    }
    const sleep = () => {
        setEnergy(energy += 30*increaseFactor)
		setHunger(hunger += 5*decreaseFactor)
		setThirst(thirst += 5*decreaseFactor)
		setHappiness(happiness += 5*increaseFactor)
    }
    const smile = () => {
        setHappiness(happiness += 10*increaseFactor)
    }
    const buttons = [food, drink, sleep, smile]; 
    const btnNames = ["FOOD", "DRINK", "SLEEP", "SMILE"]; 

    // function explain(){
    //     `You have chosen ${props.difficulty} difficulty. This means your stats will automatically increase/decrease at a rate of ${depletionRate}/second. `
    // }
 
    
    
    return(
        <div className="statsDiv">
           <div className="stats">
                <fieldset className="statsField">
                    <legend className="statsLegend">STATS</legend>
                    <div className="hungerThirstDiv">
                        <div className="hungerDiv">
                            <label className="label" htmlFor="hunger">Hunger
                                <ProgressBar className="progress" id="hunger" completed={hunger} />
                            </label>
                        </div>
                        <div className="thirstDiv">
                            <label className="label" htmlFor="thirst">Thirst
                                <ProgressBar className="progress" id="thirst" completed={thirst} />
                            </label>
                        </div>
                    </div>
                    <div className="energyHappinessDiv">
                        <div className="energyDiv">
                            <label className="label" htmlFor="energy">Energy
                                <ProgressBar className="progress" id="energy" completed={energy} />
                            </label>
                        </div>
                        <div className="happinessDiv">
                            <label className="label" htmlFor="happiness">Happiness
                                <ProgressBar className="progress" id="happiness" completed={happiness} />
                            </label>
                        </div>
                    </div>
                </fieldset>
                    
           </div>
           <div className="buttonsDiv">
                {buttons.map((button, i) => {
                    return(
                        <div key={i} className="btn">
                            <button className="statBtn" onClick={button}>{btnNames[i]}</button>
                        </div>
                    )
                })}
           </div>
        </div>
    )
}

export default Stats;