import MainGame from '../components/mainGame';
import GameOptions from '../components/gameOptions';
import { motion } from 'framer-motion';
import '../components/style.css';

const Game = (props) => {

    return (
        <div className="mainGame">
            <motion.div
            className="container text-center  bg-black"
            initial={{ 
                y: -100,
                scale: 0.2
                     }}
            animate={{
                y: 0,
                scale: 1
            }}
            exit={{ scale: 0 }}
            transition={{ duration: 2 }}
            >
                <div className="background">
                <h1 className="gameTitle">CYBER PET</h1>
                {
                    !props.gameCookie
                ?
                    <GameOptions user={props.user} gameDetails={props.gameDetails} setGameDetails={props.setGameDetails} setPetName={props.setPetName} setDifficulty={props.setDifficulty} setPet={props.setPet} setGameCookie={props.setGameCookie} />
                :
                    <MainGame gameDetails={props.gameDetails} user={props.User} setUser={props.setUser} setGameDetails={props.setGameDetails} gameCookie={props.gameCookie} setGameCookie={props.setGameCookie} difficulty={props.difficulty} setDifficulty={props.setDifficulty} pet={props.pet} setPet={props.setPet} petName={props.petName} setPetName={props.setPetName} setHunger={props.setHunger} hunger={props.hunger} thirst={props.thirst} setThirst={props.setThirst} happiness={props.happiness} setHappiness={props.setHappiness} energy={props.energy} setEnergy={props.setEnergy} level={props.level} setLevel={props.setLevel} />
                }
                </div>
            </motion.div>
        </div>
    )
};

export default Game;