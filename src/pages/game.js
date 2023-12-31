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
                {
                    !props.gameCookie
                ?
                    <GameOptions setPetName={props.setPetName} setDifficulty={props.setDifficulty} setPet={props.setPet} setGameCookie={props.setGameCookie} activity={props.activity} setActivity={props.setActivity}/>
                :
                    <MainGame gameCookie={props.gameCookie} time={props.time} setTime={props.setTime} isActive={props.isActive} setIsActive={props.setIsActive} isPaused={props.isPaused} setIsPaused={props.setIsPaused} setGameCookie={props.setGameCookie} difficulty={props.difficulty} pet={props.pet} petName={props.petName} setHunger={props.setHunger} hunger={props.hunger} thirst={props.thirst} setThirst={props.setThirst} happiness={props.happiness} setHappiness={props.setHappiness} energy={props.energy} setEnergy={props.setEnergy} activity={props.activity} setActivity={props.setActivity}/>
                }
                </div>
            </motion.div>
        </div>
    )
};

export default Game;