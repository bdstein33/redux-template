import React from 'react';

import storeConnect from '../addons/storeConnect';

class Test extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    const {user} = this.props.application;

    return (
      <div>
       TEST PAGE
      </div>
    );
  }
}

export default storeConnect(['application'])(Test);
