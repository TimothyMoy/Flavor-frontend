import React , { Component} from 'react';
import RecipesList from '../Components/RecipesList';
import RecipeModel from '../Models/Recipe';

class RecipesListContainer extends Component {
  state = {
    recipe: [],
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
      <RecipesList recipe={this.state.recipe} />
    )
  }
}

export default RecipesListContainer;