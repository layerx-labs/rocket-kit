import { useState, useRef, useEffect } from 'react';

export default function useVisible<T extends HTMLElement>(
  initialIsVisible: boolean
) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!ref || !ref.current) return;
    if (!ref.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}
