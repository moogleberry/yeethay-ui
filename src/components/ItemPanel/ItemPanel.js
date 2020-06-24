import './ItemPanel.css';
import React from 'react';

const ItemPanel = (props) => (
  <div>
  	
  	<div>
    	<img src={props.item.pictureUrl} className='item-image' alt={'Picture of ' + props.item.name} />
    </div>

    <div className='item-name'>
    	{props.item.name}
    </div>
    
  </div>
);

export default ItemPanel;