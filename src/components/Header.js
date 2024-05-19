import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useScroll from "./sub-components/useScroll";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrollUp = useScroll();
  const location = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`w-full bg-slate-900 ${
        isScrollUp || isOpen ? "sticky top-0 z-50 bg-opacity-95" : "static"
      } transition-all duration-500 z-50`}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-4 z-50">
        <div className="logo flex-1">
          <a
            href="/"
            className="text-3xl md:text-4xl text-amber-400 hover:text-amber-500 font-medium"
          >
            anf<span className="text-amber-700 hover:text-amber-800">.</span>
          </a>
        </div>
        <nav className="text-xl md:text-2xl">
          <div className="mobile block sm:hidden">
            <button
              onClick={toggleNav}
              className="flex justify-center items-center"
            >
              <Bars3BottomRightIcon
                className={`w-10 h-10 text-amber-400 hover:text-amber-500 ${
                  !isOpen ? "visible" : "invisible"
                }`}
              ></Bars3BottomRightIcon>
            </button>
            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } w-full h-full bg-slate-900 bg-opacity-95 flex-col gap-1 justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3`}
            >
              <button onClick={toggleNav} className="absolute top-2 right-4">
                {isOpen ? (
                  <XMarkIcon className="w-10 h-10 text-amber-400 hover:text-amber-500"></XMarkIcon>
                ) : null}
              </button>

              <Link
                onClick={toggleNav}
                to="/"
                className={`w-full text-center py-4 rounded-md hover:bg-slate-800 hover:text-amber-400 active:text-amber-400 ${
                  location.pathname === "/"
                    ? "text-amber-400 font-medium"
                    : "text-slate-50"
                }`}
              >
                Home
              </Link>
              <Link
                onClick={toggleNav}
                to="/project"
                className={`w-full text-center py-4 rounded-md hover:bg-slate-800 hover:text-amber-400 active:text-amber-400 ${
                  location.pathname === "/project"
                    ? "text-amber-400 font-medium"
                    : "text-slate-50"
                }`}
              >
                Project
              </Link>
              <Link
                onClick={toggleNav}
                to="/blog"
                className={`w-full text-center py-4 rounded-md hover:bg-slate-800 hover:text-amber-400 active:text-amber-400 ${
                  location.pathname === "/blog"
                    ? "text-amber-400 font-medium"
                    : "text-slate-50"
                }`}
              >
                Blog
              </Link>
              <Link
                onClick={toggleNav}
                to="/about"
                className={`w-full text-center py-4 rounded-md hover:bg-slate-800 hover:text-amber-400 active:text-amber-400 ${
                  location.pathname === "/about"
                    ? "text-amber-400 font-medium"
                    : "text-slate-50"
                }`}
              >
                About
              </Link>
            </div>
          </div>
          <div className="tablet hidden sm:flex flex-row gap-6 items-center justify-items-center">
            <Link
              to="/"
              className={`hover:text-amber-400 active:text-amber-400 ${
                location.pathname === "/"
                  ? "text-amber-400 font-medium"
                  : "text-slate-50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/project"
              className={`hover:text-amber-400 active:text-amber-400 ${
                location.pathname === "/project"
                  ? "text-amber-400 font-medium"
                  : "text-slate-50"
              }`}
            >
              Project
            </Link>
            <Link
              to="/blog"
              className={`hover:text-amber-400 active:text-amber-400 ${
                location.pathname === "/blog"
                  ? "text-amber-400 font-medium"
                  : "text-slate-50"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`hover:text-amber-400 active:text-amber-400 ${
                location.pathname === "/about"
                  ? "text-amber-400 font-medium"
                  : "text-slate-50"
              }`}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
