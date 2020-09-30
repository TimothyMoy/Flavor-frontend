import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, Col, Button, Row, Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Recipe (props) {
  return(
    <CSSTransition timeout={500} classNames="fade">
      <Col>
        <Card>
          <CardTitle>Famous Blueberry Pancakes</CardTitle>
          <CardImg top width="10%" src="https://images.unsplash.com/photo-1587650282240-2c99248c1f3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"alt="Food image cap" />
          <CardBody>
            <CardText>
              The most fabulous pancakes! Serve them with butter and brown sugar.
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