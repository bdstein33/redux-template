import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';

import TopNavLink from './TopNavLink';
import LogIn from '../../modal/LogIn';
import {modalActions} from '../../../actions';

class TopNav extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    application: React.PropTypes.object
  };

  @autobind
  showLogin() {
    this.props.actions.showModal(<LogIn />, 'Log In');
  }

  render() {
    return (
      <div className='topnav'>
        <TopNavLink href='/' label='Home' />
        <TopNavLink href='/foo' label='Foo' />
        <TopNavLink href='/bar' label='Bar (Auth required)' />
        {
          !this.props.application.user ?
            <TopNavLink label='Log In' float='right' onClick={this.showLogin}/> :
            <TopNavLink label='Log Out' float='right' onClick={this.logOut}/>
        }
      </div>
    );
  }
}

export default storeConnect(['application'], modalActions)(TopNav);
