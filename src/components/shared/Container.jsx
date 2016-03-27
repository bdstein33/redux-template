import React from 'react';
import TopNav from './TopNav';

class Container extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Container;
