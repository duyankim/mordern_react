import React, { useEffect, useRef } from "react";

const useHover = (onClick) => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventLister("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

export default useHover;
