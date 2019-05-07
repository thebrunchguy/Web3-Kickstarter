import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';

class ContributeForm extends Component {
  state ={
    value: ''
  };

//called with an event object
//neeed to call prevent default to prevent form from submitting itself
onSubmit = (event) => {
  event.preventDefault();

  const campaign = Campaign(this.props.address);
}

  render() {
    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Amount to contribute</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value})}
              label="ether"
              labelPosition="right" />
        </Form.Field>
        <Button primary>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
