export default function HeroSection() {
  return (
    <section className="hero bg-gradient-to-b from-slate-900 from-5% via-slate-800 to-slate-900 to-90% text-gray-900 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-16 pb-12 sm:pb-24">
        <div className="infomation group flex gap-1 items-center justify-center">
          <div className="introdure text-slate-100 pl-8">
            <h2 className="font-semibold">
              <span className="block text-left text-slate-200 text-base sm:text-lg md:text-xl font-medium">
                Hi! I'm
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl tracking-wide whitespace-nowrap">
                Anh Nhut
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl">(anhutf)</p>
          </div>
          <div className="cover relative grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 39 24"
              stroke="currentColor"
              className="w-full stroke-[1.5] sm:stroke-[1.2] transition duration-500 ease-in-out group-hover:scale-x-105 group-hover:text-slate-800 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M32.25 6.75 37.5 12l-5.25 5.25m-25.5 0L1.5 12l5.25-5.25m22.5-3-4.5 16.5"
              />
            </svg>
            <div className="avatar absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-b-2 border-b-slate-800">
              <img
                className="w-auto h-full drop-shadow-2xl opacity-80 group-hover:opacity-90 z-20"
                src={require("../../assets/anhutf-sticker.png")}
              />
            </div>
          </div>
        </div>

        <h1 className="text-amber-300 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight z-50 drop-shadow-2xl">
          <span>Web Developer </span>
          <span className="text-amber-400"> & </span>
          <span className="whitespace-nowrap"> Front-End</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 py-2">
          I looking forward to getting the experience, improve skills, develop
          my career.
        </p>
        <div className="action flex flex-col sm:flex-row justify-center items-center gap-4 text-base sm:text-lg md:text-xl font-medium uppercase pt-3 sm:pt-6">
          <a
            href="#contact"
            className="shrink w-52 border border-amber-400 hover:border-amber-500 px-6 py-3 rounded-md text-amber-400 transition duration-500 ease-in-out hover:-translate-y-0.5"
          >
            Hire me
          </a>
          <a
            download
            href="/cv/NguyenAnhNhut_Resume.pdf"
            className="shrink w-52 border border-slate-700 hover:border-slate-600 px-6 py-3 rounded-md text-slate-200 transition duration-500 ease-in-out hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
