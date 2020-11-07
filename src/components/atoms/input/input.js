import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './input.scss';

export default function Input(props) {
  const { className, ...restProps } = props;
  const inputClassNames = classnames('input-wrapper', className);

  return <input type="input" className={inputClassNames} {...restProps} />;
}

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};
