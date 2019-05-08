import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return{
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

renderCards(){
  const{
    balance,
    manager,
    minimumContribution,
    requestCount,
    approversCount
  } = this.props;

  const items = [
    {
      header: manager,
      meta:'Address of manager',
      description:
        'The manager created this campaign and can create requests to withdraw money',
      style: { overflowWrap: 'break-word'}
    },
    {
      header: minimumContribution,
      meta: 'Minimum Contribution (wei)',
      description: 'you must contribute at least this much wei to be a contributor',
    },
    {
      //not sure if request or requests..
      header: requestCount,
      meta: 'Number of requets',
      description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
    },
    {
      header: approversCount,
      meta: 'numbers of approvers',
      description: 'Number of people who have already donated'
    },
    {
      header: web3.utils.fromWei(balance, 'ether'),
      meta: 'Campaign Balance (ether)',
      description: 'How much money this campaign has to spend'
    }

  ];

  return <Card.Group items={items} />;
}

  render() {
    return (
      <Layout>
        <h3>Campaign Show </h3>
        <Grid>
          <Grid.Column width={10}>
            {this.renderCards()}
          </Grid.Column>
          <Grid.Column width = {6}>
            <ContributeForm address={this.props.address}/>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
