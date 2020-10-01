import React, { Component } from 'react';
import RecipeModel from '../Models/Recipe';
import ReactModel from '../Models/Recipe';

class NewRecipeContainer extends Component {
  state= {
    name: "",
    subtitle: "",
    picture: "",
  }

  handleChange = (event) => {
    if(event.target.value === 'on') {
      event.target.value = true;
    }

    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    RecipeModel.createRecipe(this.state)
      .then((result) => {
        console.log(result);
      });
    this.props.history.push('/recipes');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add A New Recipe</h2>
          <div>
            <label htmlFor="">Title</label>
            <input onInput={this.handleChange} type="text" name="title" />
            <label htmlFor="">Subtitle</label>
            <input onInput={this.handleChange} type="text" name="subtitle" />
            <label htmlFor="">Picture</label>
            <input onInput={this.handleChange} type="text" name="picture" />
          </div>
          <button type="submit">Add Recipe</button>
        </form>
      </div>
    )
  }
}

export default NewRecipeContainer;