import React, {Component} from 'react';
import{

} from 'reactstrap';


class LoginModal extends Component {
  state= {
    modal: false,
    email:'',
    password: '',
    msg: null
  };

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return(
      <div>
        <NavLink onClick={this.toggle} href="#">
          Login
        </NavLink>
      </div>
    )
  }
}