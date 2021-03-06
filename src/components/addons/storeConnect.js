import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {isArray, merge} from 'lodash';
/*
  Takes in an array of prop keys and an object of actions that are connected to the provided component.
*/
export default (propKeys, ...actions) => {
  function mapStateToProps(state) {
    if (isArray(propKeys)) {
      return propKeys.reduce((storage, key) => {
        storage[key] = state[key];
        return storage;
      }, {});
    }

    return {};
  }

  function mapDispatchToProps(dispatch) {
    const allActions = merge(...actions);

    return {
      actions: bindActionCreators(allActions, dispatch)
    };
  }

  return Component => {
    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(Component);
  };
};
