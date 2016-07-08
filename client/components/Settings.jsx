import React, { Component } from 'react';
import Requests from '../containers/Requests.js';
import UserAdministration from '../components/UserAdministration.jsx';


class Settings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { requests, admins, users } = this.props;
    return (
      <div>
        <Requests />
        <UserAdministration />
      </div>
    )
  }
}

export default Settings;
