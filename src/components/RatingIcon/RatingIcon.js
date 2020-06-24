import './RatingIcon.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

class RatingIcon extends React.Component {
	render() {
		if(this.props.value > 0 ) {
			return (
				<FontAwesomeIcon className='rating-icon warming fa-fw' icon={ faFire } size='3x' />
			);
		} else if(this.props.value < 0) {
			return (
				<FontAwesomeIcon className='rating-icon cooling fa-fw' icon={ faSnowflake } size='3x' />
			);
		} else {
			return (
				<FontAwesomeIcon className='rating-icon neutral fa-fw' icon={ faCircle } size='3x' />
			);
		}
	}
}

export default RatingIcon;