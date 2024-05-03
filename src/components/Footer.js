import useScroll from "./sub-components/useScroll";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const isScrollUp = useScroll();
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 flex justify-center">
      <div className="max-w-5xl w-full flex items-center justify-between border-t border-slate-700 mx-4 sm:mx-8 pt-8 sm:pt-16 pb-12 sm:pb-24">
        <div className="logo">
          <a
            href="/"
            className="text-2xl sm:text-3xl text-amber-400 font-medium"
          >
            anf<span className="text-amber-700">.</span>
          </a>
          <p className="text-base sm:text-lg text-slate-200 text-center">
            &copy; 2024 &mdash; Anhutf
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/anhutf"
            target="_blank"
            className="bg-slate-50 p-1 rounded-md"
          >
            <img
              className="w-5 sm:w-7 grayscale hover:grayscale-0"
              src={require(`../assets/info-icon/github-icon.png`)}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anhutf"
            target="_blank"
            className="bg-slate-50 p-1 rounded-md"
          >
            <img
              className="w-5 sm:w-7 grayscale hover:grayscale-0"
              src={require(`../assets/info-icon/linkedin-icon.png`)}
            />
          </a>
          <a
            href="https://www.facebook.com/anhutf"
            target="_blank"
            className="bg-slate-50 p-1 rounded-md"
          >
            <img
              className="w-5 sm:w-7 grayscale hover:grayscale-0"
              src={require(`../assets/info-icon/facebook-icon.png`)}
            />
          </a>
        </div>
      </div>

      <ArrowUpIcon
        onClick={backToTop}
        className={`h-9 sm:h-10 w-9 sm:w-10 bg-slate-700 bg-opacity-90 font-bold text-amber-400 hover:scale-105 hover:text-amber-500 rounded-md p-2 fixed right-4 bottom-4 cursor-pointer ${
          isScrollUp ? "opacity-100" : "opacity-0"
        }`}
      ></ArrowUpIcon>
    </footer>
  );
}
