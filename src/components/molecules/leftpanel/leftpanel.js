import React, { useState } from 'react';
import './leftpanel.scss';
import SearchInput from '../../atoms/searchinput';
import Button from '../../atoms/button';
import ChatButton from '../../atoms/chatbutton';
import Dropdown from '../../atoms/dropdown';
import Conversation from '../conversation';
import MockData from '../../../utils/MOCK_DATA.json';

const filteredData = MockData.map((elem) => ({
  ...elem,
  messages: [],
  conversation: false,
  selected: false,
}));

const items = [
  { label: 'All conversations', value: 'all' },
  { label: 'Favorites', value: 'flagged' },
];

export default function LeftPanel() {
  const [users, setUsers] = useState(filteredData);
  const [searchName, setSearchName] = useState('');
  const [type, setType] = useState('all');
  const conversations = users.filter((elem) => {
    if (type === 'all') {
      return (
        elem.conversation ||
        (searchName && (elem.firstName.includes(searchName) || elem.lastName.includes(searchName)))
      );
    }
    if (type === 'flagged' && elem.isFavorite) {
      return (
        elem.conversation ||
        (searchName && (elem.firstName.includes(searchName) || elem.lastName.includes(searchName)))
      );
    }
    return false;
  });

  const handleSearchInputChanged = (event) => {
    setSearchName(event.target.value);
  };

  const handleStarClick = (id, flag) => {
    const newConvers = users.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          isFavorite: flag,
        };
      }
      return elem;
    });
    setUsers(newConvers);
  };

  const handleItemChange = (item) => {
    setType(item.value);
  };

  const handleConversationClick = (id, selected) => {
    const newConvers = users.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          selected,
        };
      }
      return {
        ...elem,
        selected: false,
      };
    });
    setUsers(newConvers);
  };

  const handleFollowClick = () => {
    const newConvers = users.map((elem) => {
      if (elem.selected) {
        return {
          ...elem,
          isFavorite: true,
        };
      }
      return elem;
    });
    setUsers(newConvers);
  };

  const handleChatPlus = () => {
    const newConvers = users.map((elem) => {
      if (elem.selected) {
        return {
          ...elem,
          conversation: true,
        };
      }
      return elem;
    });
    setUsers(newConvers);
  };

  return (
    <div className="leftpanel-main">
      <div className="first-part">
        <div className="input">
          <SearchInput
            placeholder="Search or new chat... "
            onChange={handleSearchInputChanged}
            value={searchName}
          />
        </div>
        <div className="chat-plus">
          <ChatButton onClick={handleChatPlus} />
        </div>
      </div>
      <div className="second-part">
        <div className="dropdown">
          <Dropdown items={items} defaultItem={items[0]} onItemChange={handleItemChange} />
        </div>
        <div className="btn-followup">
          <Button onClick={handleFollowClick}>Follow up</Button>
        </div>
      </div>
      <div className="conversation-group">
        {conversations.map((elem) => {
          return (
            <Conversation
              name={`${elem.firstName} ${elem.lastName}`}
              lastMessage={elem.messages[elem.messages.length - 1]}
              lastSeen="1h"
              key={elem.id}
              flag={elem.isFavorite}
              id={elem.id}
              selected={elem.selected}
              onStarClick={handleStarClick}
              onClick={handleConversationClick}
            />
          );
        })}
      </div>
    </div>
  );
}

LeftPanel.propTypes = {};

LeftPanel.defaultProps = {};
