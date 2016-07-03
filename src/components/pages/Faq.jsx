import React from 'react';
// import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';

import {faqActions} from '../../actions';
import Hero from '../shared/Hero';

import FaqSection from './Faq/FaqSection';
import * as C from '../shared';


class Faq extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object
  }

  render() {
    const {faq} = this.props;
    return (
      <div>
        <Hero title={faq.name}/>
        <C.Row align='right' className='add-margin'>
          <C.Button bType='transparent' className='add-margin-left'>NEW SECTION</C.Button>
          <C.Button bType='transparent' className='add-margin-left'>NEW QUESTION</C.Button>
        </C.Row>
        {faq.sections.map((faqSection, i) => {
          return <FaqSection section={faqSection} key={`FaqSection-${i}`}/>;
        })}
      </div>
    );
  }
}

export default storeConnect([{faq: 'faq.faq'}], faqActions)(Faq);
