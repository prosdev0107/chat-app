/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ReactComponent as StarIcon } from '../../../assets/star.svg';
import { ReactComponent as StarIconWhite } from '../../../assets/star_white.svg';
import './conversation.scss';

export default function Conversation(props) {
  const { onClick, name, avatar, lastMessage, lastSeen, flag, selected, onStarClick, id } = props;
  const conversationClassNames = classnames('conversation-main', { selected });

  const handleFlagClick = (e) => {
    e.stopPropagation();
    onStarClick(id, !flag);
  };

  const handleClick = () => {
    onClick(id, !selected);
  };

  return (
    <div className={conversationClassNames} onClick={handleClick}>
      <div className="avatar">{avatar && <img url={avatar} alt={avatar} />}</div>
      <div className="content">
        <h4 className="name">{name}</h4>
        <p className="last-message">{lastMessage}</p>
      </div>
      <div className="trailer">
        <p className="last-seen">{lastSeen}</p>
        <div className="flag-icon" onClick={handleFlagClick}>
          {flag ? <StarIcon /> : <StarIconWhite />}
        </div>
      </div>
    </div>
  );
}

Conversation.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  avatar: PropTypes.string,
  lastMessage: PropTypes.string,
  lastSeen: PropTypes.string,
  flag: PropTypes.bool,
  selected: PropTypes.bool,
};

Conversation.defaultProps = {
  onClick: undefined,
  name: '',
  avatar: '',
  lastMessage: '',
  lastSeen: '',
  flag: false,
  selected: false,
};
