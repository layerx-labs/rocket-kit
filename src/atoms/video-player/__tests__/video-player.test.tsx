import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { VideoPlayer } from '../../..';

describe('VideoPlayer', () => {
  it('renders', () => {
    const { asFragment } = render(
      <VideoPlayer video="https://www.youtube.com/watch?v=E71ffwc13y4" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
