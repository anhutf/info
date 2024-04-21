import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900">
      <div className="max-w-5xl mx-auto flex items-center justify-between border-t border-slate-700  px-8 pt-16 pb-24">
        <div className="logo">
          <a href="/" className="text-3xl text-amber-400 font-medium">
            anf<span className="text-amber-700">.</span>
          </a>
          <p className="text-lg text-slate-200 text-center">
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
              className="w-7 grayscale hover:grayscale-0"
              src={require(`../assets/info-icon/github-icon.png`)}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anhutf"
            target="_blank"
            className="bg-slate-50 p-1 rounded-md"
          >
            <img
              className="w-7 grayscale hover:grayscale-0"
              src={require(`../assets/info-icon/linkedin-icon.png`)}
            />
          </a>
          <a
            href="https://www.facebook.com/anhutf"
            target="_blank"
            className="bg-slate-50 p-1 rounded-md"
          >
            <img
              className="w-7 grayscale hover:grayscale-0"
              src={require(`../assets/info-icon/facebook-icon.png`)}
            />
          </a>
        </div>
      </div>

      <ArrowUpIcon
        onClick={backToTop}
        className="h-10 w-10 bg-slate-700 bg-opacity-70 font-bold text-amber-400 hover:scale-105 hover:text-amber-500 rounded-md p-2 fixed right-4 bottom-4 cursor-pointer"
      ></ArrowUpIcon>
    </footer>
  );
}
