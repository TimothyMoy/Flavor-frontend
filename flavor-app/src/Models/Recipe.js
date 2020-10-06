const url = `http://localhost:4000/api/v1/recipes`

class RecipeModel {
  static getAllRecipes = () => {
    return fetch(url)
      .then((response) => response.json())
  }
  
  static getRecipeById = (recipeID) => {
    return fetch(`${url}/${recipeID}`)
      .then((response) => response.json())
  }

  static createRecipe = (recipe) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify(recipe)
    })
      .then((response) => response.json())
  }
}

export default RecipeModel;