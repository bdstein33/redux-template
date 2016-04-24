import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';

import TopNavLink from './TopNavLink';
import LogIn from '../../modal/LogIn';
import {modalActions, authActions} from '../../../actions';

class TopNav extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    application: React.PropTypes.object
  };

  @autobind
  showLogin() {
    this.props.actions.showModal(<LogIn />, 'Log In');
  }

  @autobind
  logOut() {
    this.props.actions.logOut();
  }

  render() {
    return (
      <div className='topnav'>
        {
          !this.props.application.user ?
            <div>
              <TopNavLink href='/' label='Home' />
              <TopNavLink href='/foo' label='Foo' />
              <TopNavLink href='/bar' label='Bar' />
              <TopNavLink label='Log In' float='right' onClick={this.showLogin}/>
            </div>
          :
            <div>
              <TopNavLink label='Log Out' float='right' onClick={this.logOut}/>
            </div>
        }
      </div>
    );
  }
}

export default storeConnect(['application'], modalActions, authActions)(TopNav);
