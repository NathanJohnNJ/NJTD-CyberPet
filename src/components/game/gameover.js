const GameOver = (props) => {

    return(
        <div className="gameOverDiv">
            <h1 className="gameOver">! !  GAME OVER  ! !</h1>
            <h2 className="gameOverReason">{props.reason}</h2>
            <h3 className="restart">Restart?</h3>
            <button className="gaveOverRestart">RESTART</button>
        </div>
    )
};

export default GameOver;