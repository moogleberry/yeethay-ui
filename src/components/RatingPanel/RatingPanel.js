import React from 'react';
import RatingButton from '../RatingButton/RatingButton.js'

const RatingPanel = (props) => (
  <div>
    <div>
    	<RatingButton value='-3' rating={props.rating} onMouseEnter={ props.onMouseEnter } />
    	<RatingButton value='-2' rating={props.rating} onMouseEnter={ props.onMouseEnter } />
    	<RatingButton value='-1' rating={props.rating} onMouseEnter={ props.onMouseEnter } />

    	<RatingButton value='0' rating={props.rating} onMouseEnter={ props.onMouseEnter } />

    	<RatingButton value='1' rating={props.rating} onMouseEnter={ props.onMouseEnter } />
    	<RatingButton value='2' rating={props.rating} onMouseEnter={ props.onMouseEnter } />
    	<RatingButton value='3' rating={props.rating} onMouseEnter={ props.onMouseEnter } />
	</div>

	<div>
		{props.rating.description}
	</div>
  </div>
);

export default RatingPanel;