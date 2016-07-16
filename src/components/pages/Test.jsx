import React from 'react';
import {autobind} from 'core-decorators';
import {chain} from 'lodash';

import storeConnect from '../addons/storeConnect';
import * as C from '../shared';


class Test extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    return (
      <div>
        A sample text editor
      </div>
    );
  }
}

export default storeConnect(['application'])(Test);
