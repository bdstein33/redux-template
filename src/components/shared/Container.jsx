import React from 'react';
import TopNav from './TopNav';
import Modal from './Modal';

class Container extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div>
        <TopNav />
        <div>
          {this.props.children}
        </div>
        <Modal/>
      </div>
    );
  }
}

export default Container;
