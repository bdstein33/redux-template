import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';

import TopNavLink from './TopNavLink';
import LogIn from '../../modal/LogIn';
import * as actions from '../../../actions';

class TopNav extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired
  };

  @autobind
  showLogin() {
    this.props.actions.showModal(<LogIn />, 'Log In');
  }

  render() {
    return (
      <div className='topnav'>
        <TopNavLink href='/' label='Home' />
        <TopNavLink href='/todo' label='To Do' />
        <TopNavLink href='/foo' label='Foo' />
        <TopNavLink label='Log In' float='right' onClick={this.showLogin}/>
      </div>
    );
  }
}

export default storeConnect(null, actions)(TopNav);
