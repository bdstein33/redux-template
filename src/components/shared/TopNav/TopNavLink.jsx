import React from 'react';
import classNames from 'classnames';

import Link from '../Link';

class TopNavLink extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    href: React.PropTypes.string,
    float: React.PropTypes.string
  }

  static defaultProps = {
    float: 'left'
  }

  render() {
    return (
      <Link href={this.props.href}>
        <div className={classNames('topnav-link', this.props.float)}>
        {this.props.label}
        </div>
      </Link>
    );
  }
}

export default TopNavLink;
