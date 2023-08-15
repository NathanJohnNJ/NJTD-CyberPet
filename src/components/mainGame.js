import './style.css';
import Stats from './game/stats';
import Menu from './game/menu';
import Pet from './game/pet';
import { useState } from 'react';

const MainGame = (props) => {
    const [difficulty, setDifficulty] = useState("");
    const [ characterName, setCharacterName] = useState("");
    const [ chosenAnimal, setChosenAnimal] = useState({});
//setup or game display deciding componenet

    return (
        <div className="mainGameComp">
            
            <div className="background">
                <Menu gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} user={props.user} gameCookie={props.gameCookie} setGameCookie={props.setGameCookie}/>
                <h1 className="gameTitle">CYBER PET</h1>
                <Pet gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} />
                <Stats gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} difficulty={difficulty} chosenAnimal={chosenAnimal} characterName={characterName} />
            </div>
        </div>
    )
};

export default MainGame;