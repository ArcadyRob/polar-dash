import { StoryFn, Meta } from '@storybook/react';

import BearSpinner, { BearSpinnerProps } from './BearSpinner';

export default {
  title: 'Spinners/BearSpinner',
  component: BearSpinner,
  argTypes: {
    size: {
      description: 'The size of the spinner.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A spinner with a polar bear head.',
      },
    },
    layout: 'centered',
  },
} as Meta;

export const Default: StoryFn<BearSpinnerProps> = args => (
  <BearSpinner {...args} />
);

export const Small: StoryFn<BearSpinnerProps> = args => (
  <BearSpinner {...args} size="sm" />
);
export const Medium: StoryFn<BearSpinnerProps> = args => (
  <BearSpinner {...args} size="md" />
);
export const Large: StoryFn<BearSpinnerProps> = args => (
  <BearSpinner {...args} size="lg" />
);
