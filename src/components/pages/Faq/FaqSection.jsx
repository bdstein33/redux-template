import React from 'react';
import * as C from '../../shared';

class FaqQuestion extends React.Component {
  static propTypes = {
    question: React.PropTypes.object,
    onClick: React.PropTypes.func
  }

  render() {
    const {question} = this.props;
    return (
        <div className='faq-question clickable'>
          <C.Text className='question-name'>{question.name}</C.Text>
        </div>
    );
  }
}

class FaqSection extends React.Component {
  static propTypes = {
    section: React.PropTypes.object
  }

  render() {
    const {section} = this.props;
    return (
      <C.Container
        isFullWidth={true}
        className='faq-section'
      >
        <C.Text
          fontSize={4}
          className='section-name add-padding-side'
        >
          {section.name}
        </C.Text>
        <C.Container
          isFullWidth={true}
          className='question-container'
        >
          {section.faqQuestions.map((question, i) => {
            return (
              <FaqQuestion
                question={question}
                key={`faqQuestion-${i}`}
              />
            );
          })}
        </C.Container>
      </C.Container>
    );
  }
}

export default FaqSection;
