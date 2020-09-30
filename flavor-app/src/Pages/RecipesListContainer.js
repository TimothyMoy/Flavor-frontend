import React from 'react';
import RecipesList from '../Components/RecipesList';
import RecipeModel from '../Models/Recipe';

class RecipesListContainer extends React.Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    RecipeModel.getAllRecipes()
      .then((result) => {
        this.setState({recipes: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <RecipesList></RecipesList>
    )
  }
}

export default RecipesListContainer;