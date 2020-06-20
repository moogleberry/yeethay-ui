import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className='nav'>
    <ul className='nav'>
      <li className='nav-item'>
      	<NavLink className='nav-link' to='/'>Home</NavLink>
      </li>
      <li className='nav-item'>
      	<NavLink className='nav-link' to='/rate'>Rate</NavLink>
      </li>
      <li className='nav-item'>
      	<NavLink className='nav-link' to='/about'>About</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;