import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import RecipeContainer from '../Pages/RecipesContainer';
import RecipesListContainer from '../Pages/RecipesListContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/recipes' component={ RecipesListContainer } />
    <Route exact path='/recipes/:id' component={ RecipeContainer } />
  </Switch>
)