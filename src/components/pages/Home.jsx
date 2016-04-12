import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        This is the home page
      </div>
    );
  }
}


export default connect()(Home);
