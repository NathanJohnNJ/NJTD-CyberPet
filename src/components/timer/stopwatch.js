import { useEffect } from "react";
import "../style.css";
import ControlButtons from "./controlButtons";

function StopWatch(props) {
	const isActive = props.isActive
	const isPaused = props.isPaused
	const time = props.time
	const setTime = props.setTime
	const setIsPaused = props.setIsPaused
	const setIsActive = props.setIsActive

	useEffect(() => {
		let interval = null;
		if (props.isActive && props.isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 30);
			}, 30);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
		// eslint-disable-next-line
	}, [isActive, isPaused]);

	
	return (
		<div className="stop-watch">
			<ControlButtons isActive={props.isActive} isPaused={props.isPaused} setIsActive={setIsActive} setIsPaused={setIsPaused} setTime={setTime} time={time} setHunger={props.setHunger} hunger={props.hunger} thirst={props.thirst} setThirst={props.setThirst} happiness={props.happiness} setHappiness={props.setHappiness} energy={props.energy} setEnergy={props.setEnergy} />
		</div>
	);
}

export default StopWatch;
