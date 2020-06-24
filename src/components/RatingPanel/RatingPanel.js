import React from 'react';
import RatingButton from '../RatingButton/RatingButton.js'

const RatingPanel = () => (
  <div>
    <div>
    	<RatingButton value='-3' />
    	<RatingButton value='-2' />
    	<RatingButton value='-1' />

    	<RatingButton value='0' />

    	<RatingButton value='1' />
    	<RatingButton value='2' />
    	<RatingButton value='3' />
	</div>

	<div>
		Hover Description
	</div>
  </div>
);

export default RatingPanel;