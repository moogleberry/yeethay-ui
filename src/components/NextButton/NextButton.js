import "./NextButton.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

class NextButton extends React.Component {
	nextButtonClick() {
		console.log("TY NEXT");
	}

	render() {
		return (
			<div className="next-button-panel text-right">
				<button
					type="submit"
					className="btn btn-info"
					onClick={() => this.nextButtonClick()}
				>
          IDK man, go next
					<FontAwesomeIcon
						className="fa-fw"
						icon={faAngleDoubleRight}
						size="lg"
					/>
				</button>
			</div>
		);
	}
}

export default NextButton;
