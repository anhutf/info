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
    <section className="skills max-w-3xl mx-auto px-4 sm:px-8 pt-12 sm:pt-24 pb-4 sm:pb-8 flex flex-col">
      <h2 className="text-center text-md sm:text-lg uppercase text-amber-300 font-medium tracking-wider">
        &mdash; Skills in &mdash;
      </h2>
      <div className="group w-full inline-flex gap-0 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_14rem,_black_calc(100%-200px),transparent_100%)] text-2xl font-medium px-6 pt-6">
        <ul className="flex items-center justify-center [&_img]:max-w-none animate-infinite-scroll group-hover:animate-pause">
          {itemsSkill.map((item, index) => (
            <li
              key={index}
              className="group/name px-8 sm:px-12 py-2 flex flex-col gap-1 justify-center items-center"
            >
              <div className="h-8 sm:h-10 md:h-12 flex items-center">
                <img
                  className="w-8 sm:w-10 md:w-12 grayscale hover:grayscale-0"
                  src={require(`../../assets/skill-icon/${item}.png`)}
                />
              </div>
              <p className="-mx-20 text-sm sm:text-base text-slate-100 invisible group-hover/name:visible">
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
              className="group/name px-8 sm:px-12 py-2 flex flex-col gap-1 items-center"
            >
              <div className="h-8 sm:10 md:h-12 flex items-center">
                <img
                  className="peer w-8 sm?:w-10 md:w-12 grayscale hover:grayscale-0"
                  src={require(`../../assets/skill-icon/${item}.png`)}
                />
              </div>
              <p className="-mx-20 text-sm sm:text-base text-slate-100 invisible group-hover/name:visible">
                {skillNames[index]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
