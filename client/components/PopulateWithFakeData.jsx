import React, { Component } from 'react';

class PopulateWithFakeData extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.populateWithFakeData();
  }
  render() {
    return (<div></div>);
  }
}

export default PopulateWithFakeData;
