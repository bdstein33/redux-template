import React from 'react';
import {autobind} from 'core-decorators';
import storeConnect from '../addons/storeConnect';
import {modalActions, authActions} from '../../actions';

import Form from '../shared/Form/Form';
import TextInput from '../shared/Form/TextInput';
import Submit from '../shared/Form/Submit';
import LogIn from './LogIn';

class SignUp extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object
  };

  @autobind
  submitSignup(data) {
    this.props.actions.signUp(data);
  }

  @autobind
  showLogIn() {
    this.props.actions.showModal(<LogIn />, 'Log In');
  }

  render() {
    return (
      <div className='content-container modal-signup'>
        <Form onSubmit={this.submitSignup}>
          <TextInput name='firstName' placeholder='First Name' autoFocus={true}/>
          <TextInput name='lastName' placeholder='Last Name'/>
          <TextInput name='email' placeholder='Email'/>
          <TextInput name='password' type='password' placeholder='Password'/>
          <Submit value='Sign Up'/>
        </Form>

        <div className='bottom'>
          <p>
            Already have an account? <span onClick={this.showLogIn} className='text-link'>Log In</span>
          </p>
        </div>

      </div>
    );
  }
}

export default storeConnect(null, modalActions, authActions)(SignUp);
