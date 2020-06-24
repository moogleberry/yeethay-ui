import './RatingPanel.css';
import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

const RatingPanel = () => (
  <div>
    <div>
	    <FontAwesomeIcon className='rating-icon' icon={ faSnowflake } size='3x' />
	    <FontAwesomeIcon className='rating-icon' icon={ faSnowflake } size='3x' />
	    <FontAwesomeIcon className='rating-icon' icon={ faSnowflake } size='3x' />

	    <FontAwesomeIcon className='rating-icon' icon={ faCircle } size='3x' />
	    
	    <FontAwesomeIcon className='rating-icon' icon={ faFire } size='3x' />
	    <FontAwesomeIcon className='rating-icon' icon={ faFire } size='3x' />
	    <FontAwesomeIcon className='rating-icon' icon={ faFire } size='3x' />
	</div>

	<div>
		Hover Description
	</div>
  </div>
);

export default RatingPanel;