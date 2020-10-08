import React, { Component } from 'react';
import Recipe from '../Components/Recipe';
import RecipeModel from '../Models/Recipe';

class RecipeContainer extends Component {
  state = {
    recipe: {},
  };

  componentDidMount() {
    RecipeModel.getRecipeById(this.props.match.params.id)
      .then((result) => {
        console.log(result)
        this.setState({recipe: result})
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log(this.props);
    return (
      <Recipe recipe={this.state.recipe}
      list={false} />
    );
  }
}

export default RecipeContainer;