import './style.css';
import Stats from './game/stats';
import Menu from './game/menu';
import Pet from './game/pet';

const MainGame = (props) => {

    return (
        <div className="mainGameComp">
                <Menu gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} user={props.user} gameCookie={props.gameCookie} setGameCookie={props.setGameCookie} username={props.username} setUser={props.setUser} token={props.token}/>
                <div className="mainGamePetDiv">
                <h1 className="petInfo">{props.petName} the {props.pet}</h1>
                </div>
                <Pet gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} pet={props.pet} petName={props.petName} setPetName={props.setPetName} />
                
                <Stats gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} difficulty={props.difficulty} pet={props.pet} setPet={props.setPet} petName={props.petName} setPetName={props.setPetName} setHunger={props.setHunger} hunger={props.hunger} thirst={props.thirst} setThirst={props.setThirst} happiness={props.happiness} setHappiness={props.setHappiness} energy={props.energy} setEnergy={props.setEnergy} level={props.level} setLevel={props.setLevel}  />
        </div>
    )
};

export default MainGame;