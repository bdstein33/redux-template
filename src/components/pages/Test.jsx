import React from 'react';

import storeConnect from '../addons/storeConnect';
import * as C from '../shared';

class Test extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    return (
      <div>
      Layout Testing
       <C.Container isFullWidth={true} centerContent={true} style={{height: '50px', backgroundColor: 'red'}}>
        <C.Row columns={5} style={{height: '40px', width: '500px', backgroundColor: 'yellow'}}>
          <C.Column columns={1} style={{height: '40px', backgroundColor: 'blue'}}>
          </C.Column>

          <C.Column columns={1} style={{height: '40px', backgroundColor: 'green'}}>
          </C.Column>
        </C.Row>
       </C.Container>
      </div>
    );
  }
}

export default storeConnect(['application'])(Test);
