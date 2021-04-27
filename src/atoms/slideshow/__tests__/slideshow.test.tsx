import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Slideshow } from '../../..';

describe('Slideshow', () => {
  it('renders', () => {
    const slides = [
      {
        img:
          'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&h=426&q=80',
      },
      {
        img:
          'https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&h=426&q=80',
      },
      {
        img:
          'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&h=426&q=80',
      },
    ];

    const { asFragment } = render(
      <Slideshow slidesNumber={3}>
        {slides.map((slide, index) => (
          <img key={index} src={slide.img} alt="img" />
        ))}
      </Slideshow>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
