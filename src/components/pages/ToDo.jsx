import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {autobind} from 'core-decorators';
import serialize from 'form-serialize';
import * as actions from '../../actions';

class Task extends React.Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    task: React.PropTypes.string.isRequired,
    removeTask: React.PropTypes.func
  }

  @autobind
  removeTask() {
    this.props.removeTask(this.props.index);
  }

  render() {
    return (
      <p key={this.props.index}>
        {this.props.task}
        <span style={{marginLeft: '20px', cursor: 'pointer'}} onClick={this.removeTask}>COMPLETE</span>
      </p>
    );
  }
}
class ToDo extends React.Component {
  static propTypes = {
    tasks: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  }

  @autobind
  addTask(e) {
    e.preventDefault();
    const formData = serialize(e.target, {hash: true});
    this.props.actions.addTask(formData.task);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <label className='test-font'>Task Name:</label>
          <input type='text' name='task'/>
          <input type='submit'/>
        </form>
        {this.props.tasks.map((task, index) => {
          return <Task key={index} index={index} task={task} removeTask={this.props.actions.removeTask}/>;
        })}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     tasks: state.tasks
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ToDo);
