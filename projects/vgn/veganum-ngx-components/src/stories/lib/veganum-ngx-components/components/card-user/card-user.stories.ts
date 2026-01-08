import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CardUser } from '../../../../../components/card-user/card-user';

const meta: Meta<CardUser> = {
  title: 'veganum-ngx-components/Components/CardUser',
  component: CardUser,
  decorators: [
    moduleMetadata({
      imports: [CardUser],
    }),
  ],
};

export default meta;

type Story = StoryObj<CardUser>;

const user = {
  name: { first: 'José', last: 'Franco Nieto' },
  picture: {
    medium: 'https://randomuser.me/api/portraits/men/75.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
};

export const BASIC: Story = {
  name: 'Basic',
  args: {
    user
  },
};

export const CHECKBOX: Story = {
  name: 'Checkbox',
  args: {
    user,
    check: true,
  },
  argTypes:{
    checked: { action: 'checked' }
  }
};


export const AVATAR: Story = {
  name: 'Avatar',
  args: {
    user,
    check: true,
    cardType: 'avatar',
  },
  argTypes: {
    checked: { action: 'checked' },
  },
};

export const DARK_MODE: Story = {
  name: 'Dark Mode',
  args: {
    user,
  },
  argTypes: {
    checked: { action: 'checked' },
  },
  globals: { theme: 'dark' },
};


