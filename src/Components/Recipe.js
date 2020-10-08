import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';

function Recipe (props) {
  const { recipe, list } = props;
  return(
    <CSSTransition timeout={500} classNames="fade">
      <Col>
        <Card>
          <CardTitle>{recipe.name}</CardTitle>
          <CardImg top width="10%" src={recipe.picture} alt="Food image cap" />
          <CardBody>
            <CardText>
              {recipe.subtitle}
            </CardText>
            <Button className="btn-primary">
              <Link to="/recipe">View Recipe</Link>
            </Button>
          </CardBody>
        </Card>
      </Col>
  </CSSTransition>
  )
}

export default Recipe;