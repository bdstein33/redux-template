import React from 'react';
import Link from '../../shared/Link';

class FaqSection extends React.Component {
  static propTypes = {
    faq: React.PropTypes.object
  }

  render() {
    const {faq} = this.props;
    return (
      <Link href={`/faqs/${this.props.faq.id}`}>
        <div className='faq-overview'>
         <p className='name'>{faq.name}</p>
        </div>
      </Link>
    );
  }
}

export default FaqSection;
