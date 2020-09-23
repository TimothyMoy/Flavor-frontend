import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import RecipesList from '../Components/RecipesList';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/recipes' component={ RecipesList } />
  </Switch>
)