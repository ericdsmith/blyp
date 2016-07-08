import React from 'react';
import Admins from '../containers/Admins.js';
import Users from '../containers/Users.js';

/**
* permissions page, holds two sections, Users, and Admins.  Each is it's own component
*/
const UserAdministration = () => (
  <div>
    <Admins />
    <Users />
  </div>
);

export default UserAdministration;
