import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const location = useLocation();

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

  return (
    <header
      className={`w-full bg-slate-900 ${
        isScrollUp ? "sticky top-0 z-50 bg-opacity-95" : "static"
      } transition-all duration-500`}
    >
      <div className={`max-w-7xl mx-auto flex items-center gap-2 px-12 py-5x`}>
        <div className="logo flex-1">
          <a
            href="/"
            className="text-3xl text-amber-400 hover:text-amber-500 font-medium"
          >
            anf<span className="text-amber-700 hover:text-amber-800">.</span>
          </a>
        </div>
        <nav className="flex flex-row gap-6 items-center justify-items-center text-2xl">
          <Link
            to="/"
            className={`hover:text-amber-400 active:text-amber-400 ${
              location.pathname === "/" ? "text-amber-400" : "text-slate-50"
            }`}
          >
            Home
          </Link>
          <Link
            to="/project"
            className={`hover:text-amber-400 active:text-amber-400 ${
              location.pathname === "/project"
                ? "text-amber-400"
                : "text-slate-50"
            }`}
          >
            Project
          </Link>
          <Link
            to="/blog"
            className={`hover:text-amber-400 active:text-amber-400 ${
              location.pathname === "/blog" ? "text-amber-400" : "text-slate-50"
            }`}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className={`hover:text-amber-400 active:text-amber-400 ${
              location.pathname === "/about"
                ? "text-amber-400"
                : "text-slate-50"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
