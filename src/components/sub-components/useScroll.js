import React, { useState, useEffect } from "react";

export default function HandleScroll() {
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      setIsScrollUp(currentPosition < scrollPosition);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return isScrollUp;
}
