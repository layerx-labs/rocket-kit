import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Button, Icon } from '../..';
import { HorizontalNavInterface, ItemInterface } from './types';
import styles from './styles.module.css';

function scroll(
  container: HTMLElement | null,
  direction: string,
  speed: number | undefined,
  distance: number,
  step: number
) {
  let scrollAmount = 0;
  const slideTimer = setInterval(function () {
    if (container && direction === 'left') {
      container.scrollLeft -= step;
    } else {
      container ? (container.scrollLeft += step) : null;
    }

    scrollAmount += step;

    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

export default function HorizontalNav(props: HorizontalNavInterface) {
  const { id = 'horizontal-nav', items } = props;
  const [showBackButton, setShowBackButton] = useState(false);
  const [showForwardButton, setShowForwardButton] = useState(true);

  const forward = () => {
    const container = document.getElementById(id);
    scroll(container, 'right', 10, 200, 10);
  };

  const back = () => {
    const container = document.getElementById(id);
    scroll(container, 'left', 10, 200, 10);
  };

  return (
    <div className={styles.wrapper}>
      {showBackButton && (
        <Button
          className={styles.back}
          variant="solid"
          color="white"
          txtColor="black"
          icon="caret-left"
          action={back}
        />
      )}
      <div id={id}>
        <ul className="menu">
          {items.map((item: ItemInterface, index: number) => (
            // @ts-ignore
            <InView
              key={index}
              as="li"
              className={item.active ? styles.active : undefined}
              threshold={1}
              onChange={inView => {
                if (index === 0 && inView) setShowBackButton(false);
                if (index === 0 && !inView) setShowBackButton(true);
                if (index === items.length - 1 && inView)
                  setShowForwardButton(false);
                if (index === items.length - 1 && !inView)
                  setShowForwardButton(true);
              }}
            >
              <a href={item.url}>
                {item.icon && <Icon icon={item.icon} />}
                {item.label}
              </a>
            </InView>
          ))}
        </ul>
      </div>
      {showForwardButton && (
        <Button
          className={styles.forward}
          variant="solid"
          color="white"
          txtColor="black"
          icon="caret-right"
          action={forward}
        />
      )}
    </div>
  );
}
