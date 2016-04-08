import React from 'react';
import classNames from 'classnames';

class TextInput extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    value: React.PropTypes.string
  };

  static defaultProps = {
    value: 'Submit'
  }

  render() {
    const {
      className,
      value
    } = this.props;

    return (
      <div>
        <input
          type='submit'
          value={value}
          className={classNames('submit-input clickable text-white', className)}
        />
      </div>
    );
  }
}

export default TextInput;
