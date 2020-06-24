import React from 'react';
import RatingButton from '../RatingButton/RatingButton.js'

const RatingPanel = (props) => (
  <div>
    <div>
    	<RatingButton value='-3' rating={props.rating} hoverHandler={ props.hoverHandler } />
    	<RatingButton value='-2' rating={props.rating} hoverHandler={ props.hoverHandler } />
    	<RatingButton value='-1' rating={props.rating} hoverHandler={ props.hoverHandler } />

    	<RatingButton value='0' rating={props.rating} hoverHandler={ props.hoverHandler } />

    	<RatingButton value='1' rating={props.rating} hoverHandler={ props.hoverHandler } />
    	<RatingButton value='2' rating={props.rating} hoverHandler={ props.hoverHandler } />
    	<RatingButton value='3' rating={props.rating} hoverHandler={ props.hoverHandler } />
	</div>

	<div>
		{props.rating.description}
	</div>
  </div>
);

export default RatingPanel;