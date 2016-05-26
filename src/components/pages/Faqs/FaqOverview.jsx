import React from 'react';

class FaqSection extends React.Component {
  static propTypes = {
    faq: React.PropTypes.object
  }

  render() {
    const {faq} = this.props;

    return (
      <div className='faq-overview'>
       <p className='name'>{faq.name}</p>
      </div>
    );
  }
}

export default FaqSection;
