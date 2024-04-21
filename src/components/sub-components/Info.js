export default function Info({ year, title, content, active }) {
  const setColor = active ? "bg-amber-400" : "bg-slate-500";

  return (
    <li className="py-8">
      <div className="flex items-center">
        <div
          className={`absolute left-0 -translate-x-1/2 h-4 w-4 rounded-full ${setColor}`}
        ></div>
        <p className="text-lg text-slate-100 font-medium">{year}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl text-amber-300 font-semibold tracking-wide mb-2">
          {title}
        </h3>
        <p className="text-slate-300">{content}</p>
      </div>
    </li>
  );
}
