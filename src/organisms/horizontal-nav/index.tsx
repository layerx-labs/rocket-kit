import React, { useState, useRef, useEffect } from 'react';
import * as Styles from './styles';
import useVisible from '../../utils/hooks/use-visible';
import { Button } from '../..';

interface HorizontalNavInterface {
  items: any;
  startsOpen?: boolean;
}

const HorizontalNav = (props: HorizontalNavInterface) => {
  const [showMore, setShowMore] = useState(false);
  const moreMenu = useRef(null);
  const visibleMenuRef = useRef<HTMLUListElement>(null);

  const { items, startsOpen = false } = props;

  const { ref, isVisible, setIsVisible } = useVisible<HTMLDivElement>(
    startsOpen
  );

  useEffect(() => {
    if (!ref || !ref.current) return;

    const visible = document!
      .querySelector('ul.menu')!
      .getElementsByTagName('li');

    const more = document.querySelector('.more')!.getElementsByTagName('li');
    const moreVisibility = () =>
      more.length > 0 ? setShowMore(true) : setShowMore(false);

    const removeItem = () => {
      if (visible.length === 1) return;
      let last = visible[visible.length - 1];
      document.querySelector('ul.more')!.prepend(last);
    };

    const addItem = () => {
      if (more.length === 0) return;
      let first = more[0];
      document.querySelector('ul.menu')!.append(first);
    };

    const checkOverflow = () => {
      moreVisibility();
      for (let i = 0; i < visible.length + 20; i++) {
        visibleMenuRef.current!.scrollWidth + 50 > ref.current!.offsetWidth
          ? removeItem()
          : addItem();
      }
    };

    checkOverflow();

    if (typeof window !== 'undefined') {
      moreVisibility();
      window.addEventListener('resize', checkOverflow);
      return () => window.removeEventListener('resize', checkOverflow);
    }

    return;
  }, [ref]);

  return (
    <Styles.Wrapper ref={ref}>
      <ul className="menu" ref={visibleMenuRef}>
        {items}
      </ul>

      <Styles.More className={showMore ? 'hide' : ''} ref={moreMenu}>
        <Button
          variant="text"
          color="dark"
          icon="menuVert"
          action={() => {
            setIsVisible(!isVisible);
          }}
        />
        <ul className={isVisible ? 'more is-open' : 'more'}></ul>
      </Styles.More>
    </Styles.Wrapper>
  );
};

export default HorizontalNav;
