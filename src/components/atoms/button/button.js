import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button.scss';

export default function Button(props) {
  const { children, onClick, className, ...restProps } = props;
  const buttonClassNames = classnames('btn-main', className);

  return (
    <button className={buttonClassNames} type="button" onClick={onClick} {...restProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: '',
  onClick: undefined,
};
