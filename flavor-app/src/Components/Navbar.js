import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state ={
    isOpen:false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render(){
    return(
      <div>
        <Navbar>
          <Container>
            <NavbarBrand href="/"><img className="logo" src="https://lh3.google.com/u/0/d/1mpil7xzTYG52LrtVgvuGn7bwrfrlTgXu=w1440-h821-iv1"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar;