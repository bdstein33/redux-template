import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';

import {faqActions} from '../../actions';
import Hero from '../shared/Hero';


class Faq extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <Hero title='FAQ Profile'/>
        FAQ PAGE
      </div>
    );
  }
}

export default storeConnect(['faq'], faqActions)(Faq);
