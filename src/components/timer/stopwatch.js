import { useState, useEffect } from "react";
import "../style.css";
import Timer from "./timer";
import ControlButtons from "./controlButtons";

function StopWatch() {
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;
		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 30);
			}, 30);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
	};
	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};
	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};
	return (
		<div className="stop-watch">
			<Timer time={time} />
			<ControlButtons active={isActive}isPaused={isPaused} handleStart={handleStart} handlePauseResume={handlePauseResume} handleReset={handleReset} />
		</div>
	);
}

export default StopWatch;