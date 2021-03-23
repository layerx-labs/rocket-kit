import React from 'react';
import TruncateLine, { TruncateLineProps } from '..';

export default {
  title: 'Design System/Atoms/Truncate Line',
  component: TruncateLine,
};

export const TruncateLineComponent = (args: TruncateLineProps) => (
  <TruncateLine {...args} />
);

TruncateLineComponent.storyName = 'Truncate Line';

TruncateLineComponent.args = {
  value:
    'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero De Finibus Bonorum et Malorum for use in a type specimen book.',
};
