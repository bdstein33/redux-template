import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';
import {modalActions} from '../../actions';

import Form from '../shared/Form/Form';
import TextInput from '../shared/Form/TextInput';
import Submit from '../shared/Form/Submit';
import SignUp from './SignUp';

class LogIn extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired
  };

  @autobind
  submitLogIn(data) {
    console.log(data);
  }

  @autobind
  showSignUp() {
    this.props.actions.showModal(<SignUp />, 'Sign Up');
  }

  render() {
    return (
      <div className='content-container modal-login'>
        <Form onSubmit={this.submitLogIn}>
          <TextInput name='email' placeholder='Email' autoComplete='off'/>
          <TextInput name='password' type='password' placeholder='Password'/>
          <Submit value='Log In'/>
        </Form>

        <div className='bottom'>
          <p>
            Don't have an account? <span onClick={this.showSignUp} className='text-link'>Sign up</span>
          </p>
        </div>

      </div>
    );
  }
}

export default storeConnect(null, modalActions)(LogIn);
