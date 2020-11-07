/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';
import Button from '../button';

export default function Dropdown(props) {
  const { defaultItem, items, onItemChange, ...restProps } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem);

  const handleToggleButton = () => {
    setShowMenu(!showMenu);
  };

  const handleItemChange = (index, item) => {
    setShowMenu(!showMenu);
    setSelectedItem(item);
    onItemChange({ index, ...item });
  };

  return (
    <div className="dropdown-wrapper" {...restProps}>
      <Button className="btn-toggle" onClick={handleToggleButton}>
        <div className="toggle-content">{selectedItem && selectedItem.label}</div>
      </Button>
      {showMenu && (
        <div className="menu-wrapper">
          <ul className="menu">
            {items.map((item, index) => {
              return (
                <li
                  className="menu-item"
                  onClick={() => handleItemChange(index, item)}
                  key={`${item.value}`}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  onItemChange: PropTypes.func,
  defaultItem: PropTypes.object,
  items: PropTypes.array,
};

Dropdown.defaultProps = {
  onItemChange: () => {},
  defaultItem: null,
  items: [],
};
