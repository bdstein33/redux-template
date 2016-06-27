import React from 'react';

class FaqQuestion extends React.Component {
  static propTypes = {
    question: React.PropTypes.object
  }

  render() {
    const {question} = this.props;
    return (
        <div className='faq-question'>
          <p className='question-name'>{question.name}</p>
          <p className='question-content'>{question.content}</p>
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
        <div className='faq-section'>
          <div className='section-name'>
            {section.name}
          </div>
          {section.faqQuestions.map((question, i) => {
            return (
              <FaqQuestion
                question={question}
                key={`faqQuestion-${i}`}
              />
            );
          })}
        </div>
    );
  }
}

export default FaqSection;
