import '../style.css';
import { useEffect } from 'react';
import ProgressBar from './progressBar';
import GameOver from './gameover';

const Stats = (props) => {

    let depletionRate;
    if(props.difficulty==="hard"){
         depletionRate = 2;
    } else if(props.difficulty==="medium"){
         depletionRate = 1;
    } else {
         depletionRate = 0.5;
    }

    useEffect(() => {
		let interval = null;
		if (props.isActive && props.isPaused === false) {
            interval = setInterval(() => {
                props.setEnergy(props.energy > 100 ? 100 : props.energy < 0 ? 0 : props.energy - depletionRate);
            }, 1000);
        } else {
            props.setEnergy(props.energy)
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    // eslint-disable-next-line
    }, [props.isActive, props.isPaused, props.energy]);


    useEffect(() => {
        let interval = null;
        if (props.isActive && props.isPaused === false) {
            interval = setInterval(() => {
                props.setHappiness(props.happiness > 100 ? 100 : props.happiness < 0 ? 0 : props.happiness - depletionRate);
            }, 1000);
        } else {
            props.setHappiness(props.happiness)
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    // eslint-disable-next-line
    }, [props.isActive, props.isPaused, props.happiness]);

    useEffect(() => {
        let interval = null;
        if (props.isActive && props.isPaused === false) {
            interval = setInterval(() => {
                props.setHunger(props.hunger > 100 ? 100 : props.hunger < 0 ? 0 : props.hunger - depletionRate);
            }, 1000);
        } else {
            props.setHunger(props.hunger)
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    // eslint-disable-next-line
    }, [props.isActive, props.isPaused, props.hunger]);

    useEffect(() => {
        let interval = null;
        if (props.isActive && props.isPaused === false) {
            interval = setInterval(() => {
                props.setThirst(props.thirst > 100 ? 100 : props.thirst < 0 ? 0 : props.thirst - depletionRate);
            }, 1000);
        } else {
            props.setThirst(props.thirst)
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    // eslint-disable-next-line
    }, [props.isActive, props.isPaused, props.thirst]);
 
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
        </div>
    )
}

export default Stats;