import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './searchinput.scss';

export default function SearchInput(props) {
  const { className, ...restProps } = props;
  const inputClassNames = classnames('input-main', className);

  return <input type="input" className={inputClassNames} {...restProps} />;
}

SearchInput.propTypes = {
  className: PropTypes.string,
};

SearchInput.defaultProps = {
  className: '',
};
