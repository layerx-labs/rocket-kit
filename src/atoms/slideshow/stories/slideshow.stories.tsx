import React from 'react';
import Slideshow, { SlideshowProps } from '..';

export default {
  title: 'Design System/Atoms/Slideshow',
  component: Slideshow,
};

export const SlideshowComponent = (args: SlideshowProps) => {
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

  return (
    <Slideshow {...args}>
      {slides.map((slide, index) => (
        <img key={index} src={slide.img} alt="img" />
      ))}
    </Slideshow>
  );
};

SlideshowComponent.story = {
  name: 'Slideshow',
};

SlideshowComponent.args = {
  showArrows: true,
  slidesNumber: 3,
  autoPlay: true,
  stopOnHover: true,
  interval: 5000,
  dynamicHeight: true,
  slideSelected: 0,
};
