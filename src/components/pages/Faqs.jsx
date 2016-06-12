import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';

import {faqActions} from '../../actions';
import FaqOverview from './Faqs/FaqOverview';
import Hero from '../shared/Hero';


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
        <Hero title='FAQs'/>
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
