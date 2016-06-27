import React from 'react';
// import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';

import {faqActions} from '../../actions';
import FaqOverview from './Faqs/FaqOverview';
import * as C from '../shared';


class Faqs extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object,
    userFaqs: React.PropTypes.array
  }

  render() {
    return (
      <div>
        <C.Hero title='FAQs'/>
        <div>
        <C.Right><C.Button>NEW</C.Button></C.Right>
        </div>
        {
          this.props.userFaqs.map((faq, i) => {
            return <FaqOverview faq={faq} key={`${i}`}/>;
          })
        }
      </div>
    );
  }
}

export default storeConnect([{userFaqs: 'faq.userFaqs'}], faqActions)(Faqs);
