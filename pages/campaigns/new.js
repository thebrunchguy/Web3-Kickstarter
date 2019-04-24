import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';


class CampaignNew extends Component {
  state = {
    minimumContribution: ''
  };

  render() {
    return (
      <Layout>
        <h3> Createa  Campaign! </h3>

        <Form>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({minimumContribution: event.target.value})}
              />
          </Form.Field>

          <Button primary>Creat!</Button>
        </Form>
      </Layout>
    )
  }
}

export default CampaignNew;
