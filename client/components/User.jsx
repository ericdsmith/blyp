import React from 'react';
import MakeAdmin from '../containers/MakeAdmin.js';
import Delete from '../containers/DeleteUser.js';

import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

/**
* represents a single user on the permissions page
* contained within Users component
*/
const User = ({ username }) => (
  <li className={c(m.collectionItem, m.avatar)}>
    <img className={m.circle} src={`/api/avatar/${username}`} alt={username} />
    <div className={m.row} >
      <div className={c(m.col, m.s8)}>
        <span className={m.title}>{username}</span>
        <p>Cashier</p>
      </div>
      <div className={c(m.col, m.s4)}>
        <Delete username={username} />
        <MakeAdmin username={username} />
      </div>
    </div>
  </li>
);

export default User;
