import React from 'react';
import classNames from 'classnames';

class TextInput extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string,
    className: React.PropTypes.string,
    type: React.PropTypes.string
  };

  static defaultProps = {
    type: 'text'
  }

  render() {
    const {
      name,
      defaultValue,
      placeholder,
      label,
      className,
      type,
      ...otherProps
    } = this.props;

    return (
      <div>
        {label && <p>{label}</p>}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={defaultValue}
          autoComplete='off'
          className={classNames('text-input', className)}
          {...otherProps}
        />
      </div>
    );
  }
}

export default TextInput;
