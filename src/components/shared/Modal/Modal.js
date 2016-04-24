import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';

import {modalActions} from '../../../actions';
import ModalTitle from './ModalTitle';

class Modal extends React.Component {
  static propTypes = {
    modal: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  @autobind
  handleKeyDown(e) {
    if (e.keyCode === 8 &&
    this.props.modal.visible &&
    document.activeElement.nodeName !== 'INPUT') { // Backspace
      e.preventDefault();
    } else if (e.keyCode === 27) { // Esc
      this.props.actions.hideModal();
    }
  }

  @autobind
  hideModal(e) {
    if (e.target.className.trim() === 'modal__container') {
      this.props.actions.hideModal();
    }
  }

  render() {
    const {
      modal,
      actions,
      ...otherProps
    } = this.props;

    return (
      <div className={!modal.visible ? 'hide' : 'show'}>
        <div className='modal__page-background'>
        </div>
        <div className='modal__container ' onClick={this.hideModal}>
          <div className='modal'>
            {modal.title && <ModalTitle hideModal={actions.hideModal} text={modal.title} />}
            <div className='modal__error'>
             {modal.error}
            </div>
            {modal.body}
          </div>
        </div>
      </div>
    );
  }
}

export default storeConnect(['modal'], modalActions)(Modal);
