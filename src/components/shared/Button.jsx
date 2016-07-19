import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    bStyle: React.PropTypes.oneOf(['solid', 'transparent']),
    bColor: React.PropTypes.oneOf(['blue', 'teal', 'red', 'yellow']),
    onClick: React.PropTypes.func,
    // disabled: React.PropTypes.boolean  TO DO
  };

  static defaultProps = {
    color: 'blue',
    bStyle: 'solid'
  }

  render() {
    const {
      text,
      children,
      className,
      bStyle,
      bColor,
      ...otherProps
    } = this.props;

    return (
      <div
        className={classNames('button', `button__${bStyle}`, `background-color-${bColor}`, className)}
        {...otherProps}
      >
        {children || text.toUpperCase()}
      </div>
    );
  }
}

export default Button;
