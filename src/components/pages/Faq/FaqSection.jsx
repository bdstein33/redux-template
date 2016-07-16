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
        <C.Container className='faq-question' isFullWidth={true}>
          <C.Row columns={12} style={{height: '40px'}}>
            <C.Column columns={9}>
              <C.Text className='question-name'>{question.name}</C.Text>
            </C.Column>
            <C.Column columns={3}>
               <C.Text className='right clickable'>DELETE</C.Text>
               <C.Text className='right clickable' style={{marginRight: 16}}>EDIT</C.Text>
            </C.Column>
          </C.Row>
        </C.Container>
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
