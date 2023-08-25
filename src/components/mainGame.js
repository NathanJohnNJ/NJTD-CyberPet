import './style.css';
import Stats from './game/stats';
import Pet from './game/pet';
import StopWatch from './timer/stopwatch'
import Timer from "./timer/timer";
import Buttons from './game/buttons'

const MainGame = (props) => {

    return (
        <div className="mainGameComp">
            <h1 className="gameTitle">CYBER PET</h1>
            <div className="mainGameTimer">
                <StopWatch isActive={props.isActive} setIsActive={props.setIsActive} time={props.time} setTime={props.setTime} isPaused={props.isPaused} setIsPaused={props.setIsPaused} setHunger={props.setHunger} hunger={props.hunger} thirst={props.thirst} setThirst={props.setThirst} happiness={props.happiness} setHappiness={props.setHappiness} energy={props.energy} setEnergy={props.setEnergy}  />
            </div>
            <div className="mainGamePetDiv">
            <h1 className="petInfo">{props.petName} the {props.pet}</h1>
            <h2 className="alive">Has been alive for <Timer time={props.time} /></h2>
            </div>
            <Pet pet={props.pet} petName={props.petName} setPetName={props.setPetName} isActive={props.isActive} />
            <div className="mainGameStatsDiv">
                <Stats difficulty={props.difficulty} pet={props.pet} setPet={props.setPet} petName={props.petName} setPetName={props.setPetName} setHunger={props.setHunger} hunger={props.hunger} thirst={props.thirst} setThirst={props.setThirst} happiness={props.happiness} setHappiness={props.setHappiness} energy={props.energy} setEnergy={props.setEnergy} setActivity={props.setActivity} activity={props.activity} isActive={props.isActive} setIsActive={props.setIsActive} time={props.time} setTime={props.setTime} isPaused={props.isPaused} setIsPaused={props.setIsPaused} />
            </div>
            <div className="petBtnDiv">
                <Buttons setHunger={props.setHunger} hunger={props.hunger} thirst={props.thirst} setThirst={props.setThirst} happiness={props.happiness} setHappiness={props.setHappiness} energy={props.energy} setEnergy={props.setEnergy} activity={props.activity} difficulty={props.difficulty}/>
            </div>
        </div>
    )
};

export default MainGame;