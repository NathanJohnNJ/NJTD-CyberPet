import MainGame from '../components/mainGame';

const Game = (props) => {

    return (
        <div className="mainGame">
                <MainGame gameDetails={props.gameDetails} setGameDetails={props.setGameDetails}/>
        </div>
    )
};

export default Game;