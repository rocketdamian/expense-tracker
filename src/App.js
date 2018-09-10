import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

import AddExpenseButton from './components/AddExpenseButton';
import ExpenseTable from './components/ExpenseTable';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Expense Tracker</h1>
        </header>
        <Container>
          <Row className="mt-3">
            <Col>
              <AddExpenseButton list={this.state.list}></AddExpenseButton>
            </Col>
            </Row>
          <Row className="mt-3" >
            <Col>
              <ExpenseTable list={this.state.list}></ExpenseTable>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
