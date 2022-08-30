import React from 'react';
import VideoPlayer, { VideoPlayerProps } from '..';

export default {
  title: 'Components/Atoms/Video Player',
  component: VideoPlayer,
  argTypes: {
    onEnded: { action: 'video ended' },
  },
};

export const VideoPlayerComponent = (args: VideoPlayerProps) => {
  return <VideoPlayer {...args} />;
};

VideoPlayerComponent.storyName = 'Video Player';

VideoPlayerComponent.args = {
  video: 'https://www.youtube.com/watch?v=E71ffwc13y4',
  playing: false,
  loop: false,
  controls: true,
  width: '100%',
  height: '100%',
};
