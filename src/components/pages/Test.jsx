import React from 'react';

import storeConnect from '../addons/storeConnect';
// import * as C from '../shared';

class Test extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default storeConnect(['application'])(Test);
