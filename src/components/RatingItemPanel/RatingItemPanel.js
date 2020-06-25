import './RatingItemPanel.css';
import React from 'react';

const RatingItemPanel = (props) => (
  <div>
  	
  	<div>
    	<img src={props.ratingItem.pictureUrl} className='item-image' alt={'Picture of ' + props.ratingItem.name} />
    </div>

    <div className='item-name'>
    	{props.ratingItem.name}
    </div>
    
  </div>
);

export default RatingItemPanel;