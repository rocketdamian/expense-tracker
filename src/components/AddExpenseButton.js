import React from 'react';
import { Button } from 'reactstrap';
import AddExpenseModal from './AddExpenseModal';

class AddExpenseButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      list: this.props.list
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggleModal}>Submit expense</Button>
        <AddExpenseModal modal={this.state.modal} toggleModal={this.toggleModal} list={this.state.list}></AddExpenseModal>
      </div>
    );
  }

}

export default AddExpenseButton;