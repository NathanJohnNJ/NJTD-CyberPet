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
            if(props.energy > 100){
                props.setEnergy(100)
            } else if(props.energy > 0){
                interval = setInterval(() => {
                    props.setEnergy((energy) => energy - depletionRate);
                }, 1000);
            } else if(props.energy <= 0){
                <GameOver reason="You ran out of energy!" />
            }} else {
                props.setEnergy(props.energy)
                clearInterval(interval);
            }
                return () => {
                    clearInterval(interval);
            };
                // eslint-disable-next-line
        }, [props.isActive, props.isPaused]);


        useEffect(() => {
            let interval = null;
            if (props.isActive && props.isPaused === false) {
                if(props.happiness > 100){
                    props.setHappiness(100)
                } else if(props.happiness > 0){
                    interval = setInterval(() => {
                        props.setHappiness((happiness) => happiness - depletionRate);
                    }, 1000);
                } else if(props.happiness <= 0){
                    <GameOver reason="You ran out of happiness!" />
                }} else {
                    props.setHappiness(props.happiness)
                    clearInterval(interval);
                }
                    return () => {
                        clearInterval(interval);
                };
                    // eslint-disable-next-line
            }, [props.isActive, props.isPaused]);

    useEffect(() => {
		let interval = null;
		if (props.isActive && props.isPaused === false) {
            if(props.hunger > 100){
                props.setHunger(100)
            } else if(props.hunger > 0){
                interval = setInterval(() => {
                    props.setHunger((hunger) => hunger - depletionRate);
                }, 1000);
            } else if(props.hunger <= 0){
                <GameOver reason="You ran out of hunger!" />
            }} else {
                props.setHunger(props.hunger)
                clearInterval(interval);
            }
                return () => {
                    clearInterval(interval);
            };
                // eslint-disable-next-line
        }, [props.isActive, props.isPaused]);

        useEffect(() => {
            let interval = null;
            if (props.isActive && props.isPaused === false) {
                if(props.thirst > 100){
                    props.setThirst(100)
                } else if(props.thirst > 0){
                    interval = setInterval(() => {
                        props.setThirst((thirst) => thirst - depletionRate);
                    }, 1000);
                } else if(props.thirst <= 0){
                    <GameOver reason="You ran out of thirst!" />
                }} else {
                    props.setThirst(props.thirst)
                    clearInterval(interval);
                }
                    return () => {
                        clearInterval(interval);
                };
                    // eslint-disable-next-line
            }, [props.isActive, props.isPaused]);
 
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