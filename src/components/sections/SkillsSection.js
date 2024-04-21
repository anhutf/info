export default function SkillsSection() {
  const itemsSkill = [
    "javascript-icon",
    "html-icon",
    "css-icon",
    "tailwind-icon",
    "react-icon",
    "figma-icon",
  ];
  const skillNames = [
    "JavaScript",
    "HTML",
    "CSS",
    "TailWind",
    "ReactJS",
    "Figma",
  ];

  return (
    <section className="skills max-w-5xl mx-auto px-8 pt-24 pb-12 flex flex-col">
      <h2 className="text-center text-lg uppercase text-amber-300 font-medium tracking-wider">
        &mdash; Skills in &mdash;
      </h2>
      <div className="group max-w-3xl mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_14rem,_black_calc(100%-200px),transparent_100%)] text-2xl font-medium px-6 pt-6">
        <ul className="flex items-center justify-center [&_img]:max-w-none animate-infinite-scroll group-hover:animate-pause">
          {itemsSkill.map((item, index) => (
            <li
              key={index}
              className="group/name px-8 py-2 flex flex-col gap-1 items-center"
            >
              <div className="h-12 flex items-center">
                <img
                  className="w-12 grayscale hover:grayscale-0"
                  src={require(`../../assets/skill-icon/${item}.png`)}
                />
              </div>
              <p className="text-base text-slate-100 invisible group-hover/name:visible">
                {skillNames[index]}
              </p>
            </li>
          ))}
        </ul>
        {/* when the animation reaches -100%, the duplicate element takes over, ensuring the animation continues without any disruptions */}
        <ul
          className="flex items-center justify-center [&_img]:max-w-none animate-infinite-scroll group-hover:animate-pause"
          aria-hidden="true"
        >
          {itemsSkill.map((item, index) => (
            <li
              key={index}
              className="group/name px-8 py-2 flex flex-col gap-1 items-center"
            >
              <div className="h-12 flex items-center">
                <img
                  className="peer w-12 grayscale hover:grayscale-0"
                  src={require(`../../assets/skill-icon/${item}.png`)}
                />
              </div>
              <p className="text-base text-slate-100 invisible group-hover/name:visible">
                {skillNames[index]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
