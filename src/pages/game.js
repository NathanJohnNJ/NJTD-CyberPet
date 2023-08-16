import MainGame from '../components/mainGame';
import GameOptions from '../components/gameOptions';

const Game = (props) => {

    return (
        <div className="mainGame">
            {!props.gameCookie
            ?
        <GameOptions gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} />
        :
        <MainGame gameDetails={props.gameDetails} setGameDetails={props.setGameDetails}/>
        }
                </div>
    )
};

export default Game;