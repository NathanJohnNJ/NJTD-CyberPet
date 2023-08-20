import './style.css';
import logo from '../images/logo512.gif';
import Game from '../pages/game';

const Intro = (props) => {


    return(
        <div className="intro">
            {props.cookie?
            <div className="game">
                <Game gameCookie={props.gameCookie} setGameCookie={props.setGameCookie} cookie={props.cookie} setCookie={props.setCookie} user={props.user} setUser={props.setUser} gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} difficulty={props.difficulty} setDifficulty={props.setDifficulty} pet={props.pet} setPet={props.setPet} petName={props.petName} setPetName={props.setPetName} setHunger={props.setHunger} hunger={props.hunger} thirst={props.thirst} setThirst={props.setThirst} happiness={props.happiness} setHappiness={props.setHappiness} energy={props.energy} setEnergy={props.setEnergy} level={props.level} setLevel={props.setLevel} />
            </div>
            :
            <div className="logoAnimation">
                <img src={logo} alt="Logo" className="logoImg"></img>
                <div className="introText">
                    <h1 className="brought">BROUGHT TO YOU BY</h1>
                    <h1 className="njcodes">NJ CODES</h1>
                </div>
            </div>}
        </div>
    )
}

export default Intro;