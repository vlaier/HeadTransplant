import { useState, useEffect } from "react";

export const useOnScreen = (
  ref: React.MutableRefObject<any>,
  options?: object
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });
  return isIntersecting;
};
