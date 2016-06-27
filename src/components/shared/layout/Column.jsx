import React from 'react';
import classNames from 'classnames';

export default class Column extends React.Component {
  static propTypes = {
    columns: React.PropTypes.number.isRequired,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  static defaultProps = {
    columns: 1
  };

  render() {
    return (
      <div
        {...this.props}
        className={classNames(
          'column',
          `column-${this.props.columns}`,
          this.props.className
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
