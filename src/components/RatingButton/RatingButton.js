import './RatingButton.css';
import React from 'react';
import RatingIcon from '../RatingIcon/RatingIcon.js'

const RatingButton = (props) => (
	<button className="rating-button" value={props.value} onMouseEnter={ () => props.onMouseEnter(props.value) } onMouseLeave={ () => props.onMouseEnter(null) }>
		<RatingIcon value={props.value} />
	</button>
); 

export default RatingButton;