import React from 'react';

import storeConnect from '../addons/storeConnect';

class FaqList extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    console.log('AAA');
    return (
      <div>
       FAQ LIST
      </div>
    );
  }
}

export default storeConnect(['application'])(FaqList);
