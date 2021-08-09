import { useState, useEffect } from 'react';

// for NAVBAR
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // if (!ref.current || ref.current.contains(event.target))
      if (!ref.current || ref.current.contains(event.target) && event.target.tagName.toLowerCase() !== 'a') {
        console.log(ref.current)
        console.log(event.target)
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}