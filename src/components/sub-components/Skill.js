export default function Skill({ skillName }) {
  const skillColor = {
    JavaScript: "hover:bg-amber-300",
    HTML: "hover:bg-orange-300",
    CSS: "hover:bg-lime-300",
    TailWind: "hover:bg-cyan-300",
    ReactJS: "hover:bg-sky-300",
    Figma: "hover:bg-red-300",
    TypeScript: "hover:bg-sky-500",
  };

  return (
    <>
      {skillName.split(", ").map((skill) => (
        <span
          key={skill}
          className={`bg-slate-400 ${skillColor[skill]} text-sm md:text-base rounded-full px-3 hover:cursor-pointer`}
        >
          {skill}
        </span>
      ))}
    </>
  );
}
