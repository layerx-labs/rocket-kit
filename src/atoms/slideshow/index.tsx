import React from 'react';
import clsx from 'clsx';
import { Carousel } from 'react-responsive-carousel';
import Button from '../button';
import styles from './styles.module.css';

export interface SlideshowProps {
  showArrows?: boolean;
  slidesNumber: number;
  autoPlay?: boolean;
  stopOnHover?: boolean;
  interval?: number;
  dynamicHeight?: boolean;
  slideSelected?: number;
  children: any;
}

const Slideshow = (props: SlideshowProps) => {
  const {
    showArrows = true,
    slidesNumber = 1,
    autoPlay = true,
    stopOnHover = true,
    interval = 5000,
    dynamicHeight = true,
    slideSelected = 0,
    children,
  } = props;

  return (
    <div
      className={clsx(styles.wrapper, slidesNumber <= 1 && styles.hideDots)}
    >
      <Carousel
        showArrows={showArrows}
        showStatus={false}
        showThumbs={false}
        autoPlay={autoPlay}
        stopOnHover={stopOnHover}
        interval={interval}
        transitionTime={1000}
        infiniteLoop={true}
        useKeyboardArrows={true}
        swipeable={false}
        swipeScrollTolerance={5}
        emulateTouch={false}
        dynamicHeight={dynamicHeight}
        selectedItem={slideSelected}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <Button
              className="previous"
              variant="text"
              ariaLabel="Previous"
              action={onClickHandler}
              icon="arrowBack"
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <Button
              className="next"
              variant="text"
              ariaLabel="Next"
              action={onClickHandler}
              icon="arrowForward"
            />
          )
        }
        renderIndicator={(onClickHandler, isSelected, index) => {
          if (isSelected) {
            return (
              <li
                className="selected"
                aria-label={`Slide ${index + 1} selected`}
                title={`Slide ${index + 1} selected`}
              />
            );
          }
          return (
            <li>
              <button
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                tabIndex={0}
                title={`Slide ${index + 1}`}
                aria-label={`Slide ${index + 1}`}
              />
            </li>
          );
        }}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default Slideshow;
