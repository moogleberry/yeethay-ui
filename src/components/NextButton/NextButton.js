import "./NextButton.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const NextButton = ({onClick}) => {
	return (
		<div className="next-button-panel text-right">
			<button
				type="submit"
				className="btn btn-info"
				onClick={() => onClick()}>
				IDK man, go next
				<FontAwesomeIcon
					className="fa-fw"
					icon={faAngleDoubleRight}
					size="lg"/>
			</button>
		</div>
	);
}

export default NextButton;
