import React from "react";
import "../style.css";
import play from './images/play.png';
import pause from './images/pause.png';
import reset from './images/reset.png';


export default function ControlButtons(props) {
	const StartButton = (
		<div className="timerBtn btn-one btn-start"
			onClick={props.handleStart}>
            <img className="playBtn" src={play} alt="play"></img>
		</div>
	);
	const ActiveButtons = (
		<div className="btn-grp">
			<div className="timerBtn btn-two"
				onClick={props.handleReset}>
				<img className="resetBtn" src={reset} alt="reset"></img>
			</div>
			<div className="timerBtn btn-one"
				onClick={props.handlePauseResume}>
				{props.isPaused ? 
				<img className="playBtn" src={play} alt="resume"></img>
                 : 
                 <img className="pauseBtn" src={pause} alt="pause"></img>
                }
			</div>
		</div>
	);

	return (
		<div className="Control-Buttons">
			<div>{props.active ? ActiveButtons : StartButton}</div>
		</div>
	);
}
