import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home.js';
import Rate from './pages/Rate/Rate.js';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/rate' component={Rate}></Route>
    </Switch>
  );
}

export default Main;