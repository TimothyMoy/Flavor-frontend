import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class Profile extends Component {
  render(){
    return(
      <Container>
        <Row>
          <Col xs="2">
            <img src="https://picsum.photos/100" alt="profile"></img>
          </Col>
          <Col xs="10">
            <h2>Username</h2>
            <Button className="btn-primary">
              <a href="/editprofile">
                Edit Profile
              </a>
            </Button>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs="4">
            <h2>About</h2>
            <p>Let the community know a bit more about you and your recipes!</p>
          </Col>
          <Col xs="8">
            <Row className="rlist">
              <h2>Your Recipes</h2>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Profile;