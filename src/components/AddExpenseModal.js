import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddExpenseModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      description: '',
      cost: 0,
      quantity: 0,
    }

    this.addExpense = this.addExpense.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.resetState = this.resetState.bind(this);
    this.validSubmit = this.validSubmit.bind(this);
  }

  addExpense() {
    if (!this.validSubmit()) {
      return false;
    }

    var joinedList = this.props.list.concat([{
      'id': this.props.list.length + 1,
      'description': this.state.description,
      'cost': this.state.cost,
      'quantity': this.state.quantity
    }]);

    this.props.actionUpdate(joinedList);
    this.resetState();
    this.props.toggleModal();
  }

  validSubmit() {
    return (this.state.description.trim() !== '' && this.state.cost !== 0 && this.state.quantity !== 0);
  }

  updateInputValue(e) {
    var updateState = {};;
    updateState[e.target.name] = e.target.value;
    this.setState(updateState);
  }

  resetState() {
    this.setState({
      description: '',
      cost: 0,
      quantity: 0
    })
  }

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} >
        <ModalHeader toggle={this.props.toggleModal}>Add Expense</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="text" name="description" id="description" placeholder="Add some description" value={this.state.description} onChange={this.updateInputValue}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="cost">Cost</Label>
              <Input type="number" step="0.01" name="cost" id="cost" placeholder="Add cost" value={this.state.cost} onChange={this.updateInputValue}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <Input type="number" step="1" name="quantity" id="quantity" placeholder="Add quantity" value={this.state.quantity} onChange={this.updateInputValue}></Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addExpense}>Submit</Button>
          <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default AddExpenseModal;