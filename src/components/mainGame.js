import './style.css';
import Stats from './game/stats';
import Menu from './game/menu';
import Pet from './game/pet';

const MainGame = (props) => {

//setup or game display deciding componenet

    return (
        <div className="mainGameComp">
            
            <div className="background">
                <Menu gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} user={props.user} gameCookie={props.gameCookie} setGameCookie={props.setGameCookie}/>
                <h1 className="gameTitle">CYBER PET</h1>
                <Pet gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} pet={props.pet} petName={props.petName} setPetName={props.setPetName} />
                <Stats gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} difficulty={props.difficulty} chosenAnimal={props.pet} characterName={props.petName} />
            </div>
        </div>
    )
};

export default MainGame;