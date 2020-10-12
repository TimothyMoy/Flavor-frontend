import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
} from 'reactstrap';

class NewRecipes extends Component {
  render(){
    return(
      <div>
        <Button className="btn-primary">
          add Recipes
        </Button>
        <Modal>
          <ModalHeader>
            Add Recipes
          </ModalHeader>
          <ModalBody>
            <Form>
              <Label>Title</Label>
              <Input />
              <Button>
                Add Recipes
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default NewRecipes;