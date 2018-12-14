import React, { Component } from 'react';
import EatDealDetail from '../containers/EatDealDetail';

export default class EatDealDetailPage extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    const pk = parseInt(match.params.restaurant);
    return (
      <>
        <EatDealDetail pk={pk} />
      </>
    );
  }
}
