import React, { Component } from 'react'
import userPNG from '../../assets/images/user.png'
import lockPNG from '../../assets/images/lock.png'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fields: {username, password}, handleSubmit, attemptLogin} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(attemptLogin)}>
          <div className='login'>
            <div className='login_title'>
            </div>
            <div className='login_fields'>
              <div className='login_fields__user'>
                <div className='icon'>
                  <img src={userPNG} />
                </div>
                <input placeholder='Username' type='text' {...username} />
                <div className='login_fields__password'>
                  <div className='icon'>
                    <img src={lockPNG} /></div>
                    <input placeholder='Password' type='password' {...password} />
                </div>
                <div className='login_fields__submit'>
                  <input type='submit' value='Log In' />
                </div>
              </div>
              <div className='disclaimer'>
                <p>BLYP 2016 ALL RIGHTS RESERVED</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
