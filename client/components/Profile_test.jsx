import React from 'react';
import SelectBusiness from '../containers/SelectBusiness.js';
import JoinBusiness from '../containers/JoinBusiness';
import CreateBusiness from '../containers/CreateBusiness';
import ChangeProfileName from '../containers/ProfileUsernameButton.js';
import ChangePassword from '../containers/ProfilePasswordButton.js';
import ChangeName from '../containers/ProfileNameButton.js';
import ChangeEmail from '../containers/ProfileEmailButton.js';

import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

import bootstrap from '../assets/styles/bootstrap.css';
import index from '../assets/styles/index.css';
import inventory from '../assets/styles/InventoryPane.css';
import UpdateName from'../containers/UpdateNameForm';
import UpdateEmail from '../containers/UpdateEmailForm';
import UpdatePassword from '../containers/UpdatePasswordForm';
import UpdateUsername from '../containers/UpdateUsernameForm';

/**
Profile view contains all created businesses as a list, CreateBusiness and JoinBusiness components
*/
const Profile = ({ businesses, name, username, email, changeName, changeEmail, changeUsername, changePassword}) => (
  <div>
    <div className={m.container}>
      <div className={m.row}>

        {(businesses.length > 0 &&
        <div className={c(m.col, m.s12, m.m4, m.l4)}>
        <ul className={c(m.collection, m.withHeader)}>
        <li className={c(m.collectionHeader)}><h4>My Businesses</h4></li>
        {businesses.map(b => (
        <SelectBusiness key={b} business={b} />
        ))}
        </ul>
        </div>
        )}

        {((() => {
        var classes = businesses.length > 0 ? c(m.col, m.s12, m.m8, m.l7, m.pushL1) : c(m.col, m.s12, m.m8, m.pushM2, m.l6, m.pushL3);
        return (
        <div className={classes}>
          <JoinBusiness />
          <CreateBusiness />
        </div>
        )
        })())}

      </div>
    </div>
    {/*Profile info starts here which shows user info, currently not in use*/}
    {/*
    <div className={index.profilebox}>
      <div className={index.profilepic}/>
      <div className={index.container}>
        <div className={bootstrap.colmd3}>
          <div className={index.profilerow}>Name:{name}<br/></div>
          <div className={index.profilerow}>Username:{username}<br/></div>
          <div className={index.profilerow}>Email:{email}<br/></div>
          <div className={index.profilerow}>Password<br/></div>
        </div>
        <div className={bootstrap.colmd3}>
          <div className={index.profilebuttonrow}><ChangeName /></div>
          {changeName && <UpdateName/>}
          <div className={index.profilebuttonrow}><ChangeProfileName /></div>
          {changeUsername && <UpdateUsername/>}
          <div className={index.profilebuttonrow}><ChangeEmail /></div>
          {changeEmail && <UpdateEmail/>}
          <div className={index.profilebuttonrow}><ChangePassword /></div>
          {changePassword && <UpdatePassword/>}
        </div>
      </div>
    </div>
  */}
  </div>
);

export default Profile;
