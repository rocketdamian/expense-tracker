import React from 'react';
import { Table } from 'reactstrap';

class ExpenseTasble extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Desctiption</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map(item => 
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.cost}</td>
                <td>{item.quantity}</td>
                <td>{item.cost * item.quantity}</td>
              </tr>
          )}
        </tbody>
      </Table>
    );
  }
}

export default ExpenseTasble;