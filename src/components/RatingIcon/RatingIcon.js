import './RatingIcon.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

class RatingIcon extends React.Component {
	isHighlighted(selectedValue, iconValue) {
		if(selectedValue === null) {
			if(iconValue === 0 || iconValue === '0') {
				return false;
			} else {
				return true;
			}
		} else if(selectedValue < 0) {
			if(selectedValue <= iconValue && iconValue < 0) {
				return true;
			} else {
				return false;
			}
		} else if(selectedValue === 0 || selectedValue === '0') {
			if(iconValue === 0 || iconValue === '0') {
				return true;
			} else {
				return false;
			}
		} else if(selectedValue > 0) {
			if(selectedValue >= iconValue && iconValue > 0) {
				return true;
			} else {
				return false;
			}
		}  else {
			return false;
		}
	}

	render() {
		if(this.props.buttonValue < 0) {
			return (
				<FontAwesomeIcon 
					className={'rating-icon fa-fw ' + (this.isHighlighted(this.props.userRating.value, this.props.buttonValue) ? 'cooling' : 'not-highlighted')} 
					icon={ faSnowflake } 
					size='3x' />
			);
		} else if(this.props.buttonValue === 0 || this.props.buttonValue === '0') {
			return (
				<FontAwesomeIcon 
					className={'rating-icon fa-fw ' + (this.isHighlighted(this.props.userRating.value, this.props.buttonValue) ? 'neutral' : 'not-highlighted')} 
					icon={ faCircle } 
					size='3x' />
			);
		} else if(this.props.buttonValue > 0 ) {
			return (
				<FontAwesomeIcon 
					className={'rating-icon fa-fw ' + (this.isHighlighted(this.props.userRating.value, this.props.buttonValue) ? 'warming' : 'not-highlighted')} 
					icon={ faFire } 
					size='3x' />
			);
		} else {
			// this clause does nothing, but i want to keep logic in cooling > neutral > warming order, and react wants a completed if if-else else group.
			return (<div></div>);
		}
	}
}

export default RatingIcon;