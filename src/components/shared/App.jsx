import React from 'react';
import TopNav from './TopNav';
import Modal from './Modal/Modal';

class App extends React.Component {
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

export default App;
