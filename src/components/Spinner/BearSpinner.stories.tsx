import { StoryFn, Meta } from '@storybook/react';

import BearSpinner, { BearSpinnerProps } from './BearSpinner';

export default {
  title: 'Spinner/BearSpinner',
  component: BearSpinner,
} as Meta;

export const Default: StoryFn<BearSpinnerProps> = args => (
  <BearSpinner {...args} />
);

export const Small: StoryFn<BearSpinnerProps> = () => <BearSpinner size="sm" />;
export const Medium: StoryFn<BearSpinnerProps> = () => (
  <BearSpinner size="md" />
);
export const Large: StoryFn<BearSpinnerProps> = () => <BearSpinner size="lg" />;
