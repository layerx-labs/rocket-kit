import { useEffect } from 'react';

interface Props {
  querySelector: string;
}

export const useMouseMoveEffect = (props: Props) => {
  const { querySelector = '' } = props;

  useEffect(() => {
    if (!document) return;
    const element: HTMLElement | null = document.querySelector(querySelector);

    if (!element) return;
    element.addEventListener('mousemove', event => {
      const target: HTMLElement | null = event.target as HTMLElement;
      const x = event.pageX - target?.offsetLeft ?? 0;
      const y = event.pageY - target?.offsetTop ?? 0;

      element.style.setProperty('--x', `${x}px`);
      element.style.setProperty('--y', `${y}px`);
    });
  }, [querySelector]);
};
