import './style.css';
import Stats from './game/stats';
import Menu from './game/menu';
import Pet from './game/pet';
import StopWatch from './timer/stopwatch'

const MainGame = (props) => {

    return (
        <div className="mainGameComp">
                <Menu gameCookie={props.gameCookie} setGameCookie={props.setGameCookie} />
                <div className="mainGameTimer">
                    <StopWatch />
                </div>
                <div className="mainGamePetDiv">
                <h1 className="petInfo">{props.petName} the {props.pet}</h1>
                </div>
                <Pet pet={props.pet} petName={props.petName} setPetName={props.setPetName} />
                <Stats difficulty={props.difficulty} pet={props.pet} setPet={props.setPet} petName={props.petName} setPetName={props.setPetName} setHunger={props.setHunger} hunger={props.hunger} thirst={props.thirst} setThirst={props.setThirst} happiness={props.happiness} setHappiness={props.setHappiness} energy={props.energy} setEnergy={props.setEnergy} setActivity={props.setActivity} activity={props.activity} />
        </div>
    )
};

export default MainGame;