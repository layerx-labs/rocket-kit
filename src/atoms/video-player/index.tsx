import React from 'react';
import ReactPlayer from 'react-player';
import * as Styles from './styles';

export interface VideoPlayerProps {
  video: any;
  playing?: boolean;
  loop?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
  onEnded?: any;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const {
    video,
    playing = true,
    loop = false,
    controls = false,
    width = '100%',
    height = '100%',
    onEnded,
  } = props;

  return (
    <Styles.Wrapper>
      {/* @ts-ignore */}
      <ReactPlayer
        style={{ position: 'absolute', top: 0, left: 0 }}
        url={video}
        playing={playing}
        loop={loop}
        controls={controls}
        width={width}
        height={height}
        onEnded={onEnded}
      />
    </Styles.Wrapper>
  );
};

export default VideoPlayer;
