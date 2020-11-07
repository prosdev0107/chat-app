import React from 'react';
import { action } from '@storybook/addon-actions';

import Conversation from '.';

export default {
  component: Conversation,
  title: 'Conversation',
};

export const Conversations = () => (
  <>
    <Conversation
      name="Name"
      lastMessage="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod...  "
      lastSeen="1h"
      flag
    />
    <Conversation
      name="Name"
      lastMessage="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod...  "
      lastSeen="1h"
    />
    <Conversation
      name="Name"
      lastMessage="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod...  "
      lastSeen="1h"
      selected
      onClick={action('clicked')}
    />
  </>
);
