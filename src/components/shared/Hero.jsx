import React from 'react';
import classNames from 'classnames';

class Link extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  render() {
    const {
      title,
      children,
      className,
      ...otherProps
    } = this.props;

   return (
     <div className={classNames('hero', className)}>
       <h1 className='title'>{title}</h1> 
       {children}
     </div>
   );

  }
}

export default Link;
