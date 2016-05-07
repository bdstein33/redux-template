import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';

import {faqActions} from '../../actions';
import FaqOverview from './Faqs/FaqOverview';

class Faqs extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object
  }

  @autobind
  download() {
    this.props.actions.getUserFaqs({id: 1});
  }

  @autobind
  output() {
    console.log(this.props);
  }

  render() {
    const {userFaqs} = this.props.faq;

    return (
      <div>
        {
          userFaqs.map((faq, i) => {
            return <FaqOverview faq={faq} key={`${i}`}/>;
          })
        }
        <div onClick={this.download}>
          Click me to download FAQs
        </div>
        <div onClick={this.output}>
          Click me to output
        </div>
      </div>
    );
  }
}

//

export default storeConnect(['faq'], faqActions)(Faqs);
