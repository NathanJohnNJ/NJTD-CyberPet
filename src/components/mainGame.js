import './style.css';
import Stats from './game/stats';
import Menu from './game/menu';
import Pet from './game/pet';

const MainGame = (props) => {



    return (
        <div className="mainGameComp">
            
            <div className="background">
                <Menu gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} user={props.user} gameCookie={props.gameCookie} setGameCookie={props.setGameCookie}/>
                <h1 className="gameTitle">CYBER PET</h1>
                <Pet gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} />
                <Stats gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} />
            </div>
        </div>
    )
};

export default MainGame;