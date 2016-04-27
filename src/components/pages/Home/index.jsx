import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';

class Home extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    const {user} = this.props.application;

    return (
      <div>
       {`Welcome ${user.firstName} ${user.lastName}`}
       
      </div>
    );
  }
}

export default storeConnect(['application'])(Home);

/*
  <iframe src='https://www.optimizelyedit.com/http%3A%2F%2Fwww.google.com?optimizely_disable=true&optimizely_editor=true&optimizely_log=false&optimizely_include_innie=true&optimizely_cache_buster=1461566070001&optimizely_proxy_rewriter=true' style={{width: '100%', height: '700px'}}/>
*/