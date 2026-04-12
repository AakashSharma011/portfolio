import { useRef, useEffect } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('revealed');
    }
  }, []);

  return ref;
}

export function useStaggerReveal(count) {
  const refs = useRef([]);

  return (index) => (el) => {
    if (el) {
      el.classList.add('revealed');
      refs.current[index] = el;
    }
  };
}
