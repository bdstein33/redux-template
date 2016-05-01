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
    const {user} = this.props.application;
    return (
      <div className='topnav'>
        {
          !user ?
            <div>
              <TopNavLink href='/' label='LOGO' />
              <TopNavLink href='/foo' label='Foo' />
              <TopNavLink label='Log In' float='right' onClick={this.showLogin}/>
            </div>
          :
            <div>
              <TopNavLink href='/' label='LOGO' />
              <TopNavLink href='/faq/list' label='FAQs' />
              <TopNavLink label={`${user.firstName} ${user.lastName}`} float='right' onClick={this.logOut} className='topnav-link-right'/>
            </div>
        }
      </div>
    );
  }
}

export default storeConnect(['application'], modalActions, authActions)(TopNav);
