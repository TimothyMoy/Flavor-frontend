import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, Col, Button, Row, Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Recipe from './Recipe';
import RecipeModel from '../Models/Recipe';

class RecipesList extends Component {
  state = {
    recipes: []
  }
  componentDidMount() {
    RecipeModel.getAllRecipes()
      .then((result) => {
        this.setState({ recipes: result})
    })
    .catch((err) => console.log(err))
  }

  render(){
    return(
      <Container>
        <div>
          <h3>New Recipes</h3>
          <ListGroup>
            <TransitionGroup className="recipes-list">
              <Row>
              {/* {recipes.map(({_id,name, picture, subtitle}) => ( */}
                <Recipe></Recipe>
              {/* ))} */}
              </Row>
            </TransitionGroup>
          </ListGroup>
        </div>
      </Container>
    )
  }
}

export default RecipesList;