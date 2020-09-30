import React from 'react';
import { Container, ListGroup, Row} from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import Recipe from './Recipe';


function RecipesList(props) {
  console.log(props)
  const recipesList = props.recipe.map((recipeObj) => {
    console.log(recipeObj)
    return (
      <Recipe recipe={recipeObj} list={true} />
    )
  })
    return(
      <Container>
        <div>
          <h3>New Recipes</h3>
          <ListGroup>
            <TransitionGroup className="recipes-list">
              <Row>
                {recipesList}
              </Row>
            </TransitionGroup>
          </ListGroup>
        </div>
      </Container>
    )
  }

export default RecipesList;