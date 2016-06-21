import React from 'react';
import TopNav from './shared/TopNav';
import Modal from './shared/Modal';

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className='app-container'>
        <TopNav />
        <div style={{margin: '0'}}>
          {this.props.children}
        </div>
        <Modal/>
      </div>
    );
  }
}

export default App;
