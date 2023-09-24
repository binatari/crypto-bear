import React, { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState([0, 0]);
  
  useEffect(() => {
    const handleScroll = () => {
      // => scroll position
      const currentScrollPosition = [window.scrollX, window.scrollY]; 
      setScrollPosition(currentScrollPosition)
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};