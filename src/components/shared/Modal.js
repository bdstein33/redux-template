import React from 'react';
import {autobind} from 'core-decorators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../../actions';

class Modal extends React.Component {
  static propTypes = {
    modal: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  }

  @autobind
  hideModal(e) {
    if (e.target.className === 'modal-container') {
      this.props.actions.hideModal();
    }
  }

  render() {
    const {
      modal,
      ...otherProps
    } = this.props;

    return (
      <div className={!modal.visible ? 'hide' : ''}>
        <div className='modal-page-background'>
        </div>
        <div className='modal-container' onClick={this.hideModal}>
          {modal.body}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
