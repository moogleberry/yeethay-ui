import "./RatingIcon.css";
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faCircle, faSnowflake } from "@fortawesome/free-solid-svg-icons";

class RatingIcon extends React.Component {
	static get propTypes() {
		return {
			buttonValue: PropTypes.number,
			userRating: PropTypes.object
		};
	}

	isHighlighted(selectedValue, iconValue) {
		if (selectedValue === null) {
			if (iconValue === 0 || iconValue === "0") {
				return false;
			}
			return true;
		} if (selectedValue < 0) {
			if (selectedValue <= iconValue && iconValue < 0) {
				return true;
			}
			return false;
		} if (selectedValue === 0 || selectedValue === "0") {
			if (iconValue === 0 || iconValue === "0") {
				return true;
			}
			return false;
		} if (selectedValue > 0) {
			if (selectedValue >= iconValue && iconValue > 0) {
				return true;
			}
			return false;
		}
		return false;
	}

	render() {
		if (this.props.buttonValue < 0) {
			return (
				<FontAwesomeIcon
					className={`rating-icon fa-fw ${this.isHighlighted(this.props.userRating.value, this.props.buttonValue) ? "cooling" : "not-highlighted"}`}
					icon={faSnowflake}
					size="3x"
				/>
			);
		} if (this.props.buttonValue === 0 || this.props.buttonValue === "0") {
			return (
				<FontAwesomeIcon
					className={`rating-icon fa-fw ${this.isHighlighted(this.props.userRating.value, this.props.buttonValue) ? "neutral" : "not-highlighted"}`}
					icon={faCircle}
					size="3x"
				/>
			);
		} if (this.props.buttonValue > 0) {
			return (
				<FontAwesomeIcon
					className={`rating-icon fa-fw ${this.isHighlighted(this.props.userRating.value, this.props.buttonValue) ? "warming" : "not-highlighted"}`}
					icon={faFire}
					size="3x"
				/>
			);
		}
		// this clause does nothing, but i want to keep logic in cooling > neutral > warming order, and react wants a completed if if-else else group.
		return (<div />);
	}
}

export default RatingIcon;
