import React, { Component } from 'react';
import { Link } from 'react-router';
import userPNG from '../assets/images/user.png';
import lockPNG from '../assets/images/lock.png';
import index from '../assets/styles/index.css';
import logo from '../assets/images/blyplogo.png';

/**
*signup component
* @param {string} name - Name of User
* @param {string} email - Email of user
* @param {string} password  - password of user
* @param {string} username - username of user
* @param {.jpg} profilePicture - picture of user
*/
export default class Signup extends Component {
  constructor(props) {
    super(props);
  }

render() {
    const { fields: { name, username, email, password, profilePicture }, handleSubmit, signup } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(signup)}>
          <div className={index.login+" "+index.signupHeight}>
            <div className={index.login_title}>
              <div className={index.blyplogoposition}>
                <img src={logo}/>
              </div>
            </div>
            <div className={index.login_fields}>
              <div className={index.login_fields__user}>

                <div className={index.icon}>
                  <img src={userPNG} />
                </div>

                <input placeholder='Name' type='text' {...name} />
                <input placeholder='Username' type='text' {...username} />
                <input placeholder='Email' type='text' {...email} />
                <div className={index.login_fields__password}>
                  <div className={index.icon}>
                    <img src={lockPNG} />
                  </div>
                  <input placeholder='Password' type='password' {...password} />
                </div>
                {/*<div className={index.fileselect}>
                  <label htmlFor="files"> <span className={index.login_fields__submit}><input type="submit" value="Select Image"/></span></label>
                  <input {...profilePicture} value={undefined} style={{visibility: 'hidden', position: 'absolute'}} className='form-control' id="files" type="file" name="files" />
                </div>*/}

                <label htmlFor="files"> <span className={index.login_fields__submit}> <span>UPLOAD IMAGE</span></span>
                  <div className={index.fileselect}>
                    <input {...profilePicture} value={undefined} style={{visibility: 'hidden', position: 'absolute'}} className='form-control' id="files" type="file" name="files" />
                  </div>
                </label>
                <div className={index.login_fields__submit}>
                  <input type='submit' value='Sign Up' />
                </div>
              </div>
              <div className={index.disclaimer}>
                <p>BLYP 2016 ALL RIGHTS RESERVED</p>
              </div>
            </div>
          </div>
        </form>
      <div>
        <div className={index.signupcontainer}>
        <div className={index.accountRight}>
          <span><p>Already have an account? </p></span><span className={index.plink}><Link className={index.glink} to='/'>Log in</Link></span>
        </div>
        </div>
      </div>
    </div>
    );
  }
}
