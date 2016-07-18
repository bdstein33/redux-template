import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
import {faqActions} from '../../../actions';

import * as C from '../../shared';

class NewQuestionModal extends React.Component {
  static propTypes = {
    // From storeConnect
    actions: React.PropTypes.object,
    faq: React.PropTypes.object,
    user: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      answer: null
    };
  }

  @autobind
  createFaqQuestion(data) {
    data.answer = this.state.answer;

    return this.props.actions.createFaqQuestion(data)
      .then(() => {
        return this.props.actions.getFaq({id: this.props.faq.id, userId: this.props.user.id});
      });
  }

  @autobind
  updateAnswer(answer) {
    this.setState({
      answer
    });
  }

  render() {
    const sectionOptions = this.props.faq.sections.map(section => {
      return {
        label: section.name,
        value: section.id
      };
    });

    return (
      <div className='content-container' style={{width: 700}}>
        <C.Form onSubmit={this.createFaqQuestion}>
          <C.Row columns={6}>
            <C.Column columns={2} className='no-padding'>
              <C.SelectInput
                name='sectionId'
                label='Section'
                options={sectionOptions}
              />
            </C.Column>
          </C.Row>
            <C.TextArea
              name='name'
              label='Question'
              autoFocus={true}
              rows={2}
            />
            <C.Text style={{textAlign: 'left', paddingLeft: 8}}>Answer</C.Text>
            <C.TextEditor onChange={this.updateAnswer}/>
            <C.Row columns={6}>
              <C.Column columns={2} className='no-padding'>
                <C.Submit value='CREATE'/>
              </C.Column>
            </C.Row>
        </C.Form>
      </div>
    );
  }
}

export default storeConnect([{faq: 'faq.faq'}, {user: 'application.user'}], faqActions)(NewQuestionModal);

/*
<C.TextArea
  name='content'
  label='Answer'
  rows={6}
/>
*/