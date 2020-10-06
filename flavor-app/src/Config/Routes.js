import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import NewRecipeContainer from '../Pages/NewRecipeContainer';
import RecipeContainer from '../Pages/RecipesContainer';
import RecipesListContainer from '../Pages/RecipesListContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/recipes' component={ RecipesListContainer } />
    <Route exact path='/recipes/:id' component={ RecipeContainer } />
    <Route path='/recipes/new' component={ NewRecipeContainer } />
  </Switch>
)