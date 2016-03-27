import React from 'react';

import TopNavLink from './TopNavLink';

class TopNav extends React.Component {
  render() {
    return (
      <div className='topnav'>
        <TopNavLink href='/' label='Home' />
        <TopNavLink href='/foo' label='Foo' />

        <TopNavLink label='Log In' float='right'/>
      </div>
    );
  }
}

export default TopNav;
