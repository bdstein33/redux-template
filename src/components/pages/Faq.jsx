import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';

import {faqActions} from '../../actions';
import Hero from '../shared/Hero';

import FaqSection from './Faq/FaqSection';


class Faq extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object
  }

  render() {
    console.log(this.props.faq);
    const {faq} = this.props;
    return (
      <div>
        <Hero title={faq.name}/>
        <div className='edit-bar'>
        </div>
        {faq.sections.map((faqSection, i) => {
          return <FaqSection section={faqSection} key={`FaqSection-${i}`}/>;
        })}
      </div>
    );
  }
}

export default storeConnect([{faq: 'faq.faq'}], faqActions)(Faq);
