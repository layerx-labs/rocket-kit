import React, { useState, useRef, useEffect } from 'react';
import * as Styles from './styles';
import useVisible from '../../utils/hooks/use-visible';
import { Button } from '../..';

interface HorizontalNavInterface {
  querySelector: string;
  items: any;
}

const HorizontalNav = (props: HorizontalNavInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const wrapperRef = useRef(null);
  const visibleMenuRef = useRef(null);
  const moreMenu = useRef(null);
  const toggling = () => setIsOpen(!isOpen);

  const { items, startsOpen = false } = props;

  const { ref, isVisible, setIsVisible } = useVisible<HTMLDivElement>(
    startsOpen
  );

  useEffect(() => {
    const visible = document
      .querySelector('ul.menu')
      .getElementsByTagName('li');

    const more = document.querySelector('.more').getElementsByTagName('li');
    const moreVisibility = () =>
      more.length > 0 ? setShowMore(true) : setShowMore(false);

    const removeItem = () => {
      if (visible.length === 1) return;
      var last = visible[visible.length - 1];
      document.querySelector('ul.more').prepend(last);
    };

    const addItem = () => {
      if (more.length === 0) return;
      var first = more[0];
      document.querySelector('ul.menu').append(first);
    };

    const checkOverflow = () => {
      moreVisibility();
      for (var i = 0; i < visible.length + 20; i++) {
        visibleMenuRef.current.scrollWidth + 50 > wrapperRef.current.offsetWidth
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
  }, [visibleMenuRef.current]);

  return (
    <Styles.Wrapper ref={wrapperRef}>
      <ul className="menu" ref={visibleMenuRef}>
        {items}
      </ul>

      <Styles.More className={showMore ? 'hide' : ''} ref={moreMenu}>
        <Button variant="text" color="dark" icon="menuVert" action={toggling} />
        <ul className={isOpen ? 'more is-open' : 'more'}></ul>
      </Styles.More>
    </Styles.Wrapper>
  );
};

export default HorizontalNav;
