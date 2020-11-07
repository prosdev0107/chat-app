import React from 'react';

import Dropdown from '.';

export default {
  component: Dropdown,
  title: 'Dropdown',
};

const items = [
  { label: 'item1', value: 'value1' },
  { label: 'item2', value: 'value2' },
];

export const Dropdowns = () => (
  <>
    <Dropdown items={items} defaultItem={items[0]} />
  </>
);
