import "../style.css";

function minutes(){
    return " minutes and "
}
function seconds(){
    return " seconds"
}

export default function PauseTimer(props) {
	return (
		<div className="pauseTimer">
			<span className="pauseDigits">
				{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}<span className="pauseTimeText">{minutes()}</span>
			</span>
			<span className="pauseDigits">
				{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}<span className="pauseTimeText">{seconds()}</span>
			</span>
		</div>
	);
}
