import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './chatbutton.scss';
import Button from '../button';
import { ReactComponent as ChatIcon } from '../../../assets/chat.svg';

export default function ChatButton(props) {
  const { onClick, className } = props;
  const chatButtonClassNames = classnames('chatbutton-main', className);

  return (
    <Button className={chatButtonClassNames} onClick={onClick}>
      <ChatIcon />
    </Button>
  );
}

ChatButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ChatButton.defaultProps = {
  className: '',
  onClick: undefined,
};
