import React , { Component} from 'react';
import RecipesList from '../Components/RecipesList';
import RecipeModel from '../Models/Recipe';

class RecipesListContainer extends Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    RecipeModel.getAllRecipes()
      .then((result) => {
        console.log(result)
        this.setState({recipes: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <RecipesList recipes={this.state.recipes} />
    )
  }
}

export default RecipesListContainer;