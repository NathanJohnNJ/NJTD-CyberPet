import React, { useState } from "react";
import Modal from 'react-modal';
import "../style.css";
import play from './images/play.png';
import pause from './images/pause.png';
import reset from './images/reset.png';
import PauseTimer from '../timer/pauseTimer'


const ControlButtons = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const handleStart = () => {
		props.setIsActive(true);
		props.setIsPaused(false);
	};
	const handlePauseResume = () => {
		props.setIsPaused(!props.isPaused);
		setModalIsOpen(!modalIsOpen)
	};
	const handleReset = () => {
		props.setIsActive(false);
		props.setTime(0);
		props.setHunger(100);
		props.setThirst(100);
		props.setEnergy(100);
		props.setHappiness(100);
		
	};
	function closeModal(){
		setModalIsOpen(false)
	}

	const StartButton = (
		<div className="timerBtn btn-one btn-start"
			onClick={handleStart}>
            <img className="playBtn" src={play} alt="play"></img>
		</div>
	);
	const ActiveButtons = (
		<div className="btn-grp">
			<div className="timerBtn btn-two game-btns"
				onClick={handleReset}>
				<img className="resetBtn" src={reset} alt="reset"></img>
			</div>
			<div className="timerBtn btn-one game-btns"
				onClick={handlePauseResume}>
				{props.isPaused ? 
				<div >
					<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					ariaHideApp={false}
					contentLabel='Pause'
					className="pauseModal"
					>
					<div className="pauseDiv">
						<h1 className="pauseTitle">CYBER PET</h1>
						<h2 className="paused">GAME PAUSED</h2>
						<h3 className="pausePlaying">You have been playing for <PauseTimer time={props.time} /></h3>
						<div className="stats">
							<fieldset className="pauseStatsField">
								<legend className="pauseStatsLegend">STATS</legend>
								<div className="pauseStats">
									<label className="pauseLabel" htmlFor="hunger">Hunger
										<h1 className="hungerFig" id="hunger">{props.hunger}</h1>
									</label>
									<label className="pauseLabel" htmlFor="thirst">Thirst
										<h1 className="thirstFig" id="thirst">{props.thirst}</h1>
									</label>
									<label className="pauseLabel" htmlFor="energy">Energy
										<h1 className="energyFig" id="energy">{props.energy}</h1>
									</label>
									<label className="pauseLabel" htmlFor="happiness">Happiness
										<h1 className="happinessFig" id="happiness">{props.happiness}</h1>
									</label>
								</div>
							</fieldset>
						</div>
						<div className ="timerBtn btn-one modal-btns">
							<img className="resetBtn" src={reset} alt="reset" onClick={handleReset}></img>
							<img className="playBtn" src={play} alt="resume"></img>
						</div>
					</div>
					</Modal>
				</div>
                 : 
                 <img className="pauseBtn" src={pause} alt="pause"></img>
                }
			</div>
		</div>
	);

	return (
		<div className="Control-Buttons">
			<div>{props.isActive ? ActiveButtons : StartButton}</div>
		</div>
	);
}

export default ControlButtons;