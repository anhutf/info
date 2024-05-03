export default function Info({ year, title, content, active }) {
  const setColor = active ? "bg-amber-400" : "bg-slate-500";

  return (
    <li className="py-4 sm:py-8">
      <div className="flex items-center">
        <div
          className={`absolute left-0 -translate-x-1/2 h-3 sm:h-4 w-3 sm:w-4 rounded-full ${setColor}`}
        ></div>
        <p className="text-sm sm:text-base md:text-lg text-slate-100 font-medium">
          {year}
        </p>
      </div>
      <div className="mt-3 sm:mt-4">
        <h3 className="text-lg sm:text-xl md:text-2xl text-amber-300 font-semibold tracking-wide mb-2">
          {title}
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-slate-300">
          {content}
        </p>
      </div>
    </li>
  );
}
