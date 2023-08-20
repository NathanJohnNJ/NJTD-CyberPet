import '../style.css';
import { useEffect } from 'react';
import ProgressBar from './progressBar';
import GameOver from './gameover';

const Stats = (props) => {

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
        if(props.energy > 100){
            props.setEnergy(100)
        }else if(props.energy > 0){
            setTimeout(() => props.setEnergy(props.energy - depletionRate), 1000);
            console.log(props.energy)
        }else if(props.energy<=0){
            return(
                <GameOver reason="You ran out of energy!" />
            )
        }
    }, [props.energy])
    useEffect(() => {
        if(props.happiness > 100){
            props.setHappiness(100)
        }else if(props.happiness > 0){
            setTimeout(() => props.setHappiness(props.happiness - depletionRate), 1000);
            console.log(props.happiness)
        }else if(props.happiness<=0){
            return(
                <GameOver reason="You ran out of happiness!" />
            )
        }
    }, [props.happiness])
    useEffect(() => {
        if(props.hunger > 100){
            props.setHunger(100)
        }else if(props.hunger > 0){
            setTimeout(() => props.setHunger(props.hunger - depletionRate), 1000);
            console.log(props.hunger)
        }else if(props.hunger<=0){
            return(
                <GameOver reason="You got too hungry!" />
            )
        }
    }, [props.hunger])
    useEffect(() => {
        if(props.thirst > 100){
            props.setThirst(100)
        }else if(props.thirst > 0){
            setTimeout(() => props.setThirst(props.thirst - depletionRate), 1000);
            console.log(props.thirst)
        }else if(props.thirst<=0){
            return(
                <GameOver reason="You got too thirsty!" />
            )
        }
    }, [props.thirst])

    function food(){
            props.setHunger(props.hunger += 5*increaseFactor)
            props.setThirst(props.thirst -= 2*decreaseFactor)
            props.setHappiness(props.happiness += 3*increaseFactor)
            props.etEnergy(props.energy += 5*decreaseFactor)
    }
    function drink(){
            props.setThirst(props.thirst += 5*increaseFactor)
            props.setHunger(props.hunger += 2*increaseFactor)
            props.setHappiness(props.happiness += 3*increaseFactor)
            props.setEnergy(props.energy += 2*increaseFactor)
    }
    function sleep(){
            props.setEnergy(props.energy += 5*increaseFactor)
            props.setHunger(props.hunger -= 3*decreaseFactor)
            props.setThirst(props.thirst -= 3*decreaseFactor)
            props.setHappiness(props.happiness += 2*increaseFactor)
    }
    function activity(){
            props.setEnergy(props.energy -= 2*decreaseFactor)
            props.setHunger(props.hunger -= 3*decreaseFactor)
            props.setThirst(props.thirst -= 3*decreaseFactor)
            props.setHappiness(props.happiness += 5*increaseFactor)  
    }
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
                                <ProgressBar className="progress" id="hunger" completed={props.hunger} />
                            </label>
                            <div className="hover">
                                <h1>HUNGER</h1>
                                <p className="hoverText">Press the food button to feed your {props.pet}. This will also give your {props.pet} more energy and make them happy! But beware, they will get more and more thirsy, the more they eat!</p>
                            </div>
                        </div>
                        <div className="thirstDiv">
                            <label className="label" htmlFor="thirst">Thirst
                                <ProgressBar className="progress" id="thirst" completed={props.thirst} />
                            </label>
                        </div>
                    </div>
                    <div className="energyHappinessDiv">
                        <div className="energyDiv">
                            <label className="label" htmlFor="energy">Energy
                                <ProgressBar className="progress" id="energy" completed={props.energy} />
                            </label>
                        </div>
                        <div className="happinessDiv">
                            <label className="label" htmlFor="happiness">Happiness
                                <ProgressBar className="progress" id="happiness" completed={props.happiness} />
                            </label>
                        </div>
                    </div>
                </fieldset>
           </div>
           <div className="buttonsDiv">
                <button className="statBtn" onClick={food}>FOOD</button>
                <button className="statBtn" onClick={drink}>DRINK</button>
                <button className="statBtn" onClick={sleep}>SLEEP</button>
                <button className="statBtn" onClick={activity}>{props.activity}</button>
           </div>
        </div>
    )
}

export default Stats;