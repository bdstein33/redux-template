import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    type: React.PropTypes.oneOf(['solid', 'transparent']),
    onClick: React.PropTypes.func
  };

  static defaultProps = {
    color: 'blue',
    type: 'solid'
  }

  render() {
    const {
      text,
      children,
      className,
      type,
      ...otherProps
    } = this.props;

    return (
      <div
        className={classNames('button', `button__${type}`, className)}
        {...otherProps}
      >
        {children || text.toUpperCase()}
      </div>
    );
  }
}

export default Button;
