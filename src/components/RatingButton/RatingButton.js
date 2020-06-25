import './RatingButton.css';
import React from 'react';
import RatingIcon from '../RatingIcon/RatingIcon.js'

const RatingButton = (props) => (
	<button 
		className="rating-button" 
		value={props.buttonValue} 
		onMouseEnter={ () => props.hoverHandler(props.buttonValue) } 
		onMouseLeave={ () => props.hoverHandler(null) }>

		<RatingIcon 
			buttonValue={props.buttonValue} 
			userRating={props.userRating} />
	</button>
); 

export default RatingButton;