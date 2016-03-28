import React from 'react';
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {autobind} from 'core-decorators';
import serialize from 'form-serialize';

import * as actions from '../../actions';
import Form from '../shared/Form';

class LogIn extends React.Component {

  @autobind
  submitLogIn(data) {
    console.log(data);
  }

  render() {
    return (
      <div className='modal modal-login'>
        <p className={classNames('text-center')}>Log In</p>
        <Form onSubmit={this.submitLogIn}>
          <p>Email</p>
          <input type='text'/>
          <p>Password</p>
          <input type='password'/>
          <input type='submit'/>
        </Form>
      </div>
    );
  }
}

export default LogIn;
