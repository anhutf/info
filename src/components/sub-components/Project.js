import Skill from "./Skill";

export default function Project({ projectItem }) {
  const photoProject =
    projectItem.photo !== "N/A"
      ? projectItem.photo
      : "/project-picture/404-image.png";

  return (
    <article className="project flex flex-col gap-3 h-full text-center rounded-md border-b border-slate-500 hover:border-amber-400 px-2 py-4 transition duration-500 ease-out group-hover:scale-95 group-hover:opacity-50 hover:!scale-105 hover:!opacity-100">
      <a
        href={projectItem.demo !== "N/A" ? projectItem.demo : "/"}
        target="_blank"
      >
        <h4 className="text-2xl text-left text-slate-100 hover:text-amber-400 font-semibold transition duration-500 ease-in-out mb-2 truncate hover:text-full">
          {projectItem.title}
        </h4>
      </a>
      <a
        href={projectItem.demo !== "N/A" ? projectItem.demo : "/"}
        target="_blank"
        className="aspect-w-16 aspect-h-9"
      >
        <img className="w-full h-full rounded-md" src={photoProject} />
      </a>
      <p className="text-lg text-slate-200">{projectItem.description}</p>
      <div className="flex gap-2 justify-center items-center mt-auto relative">
        <Skill skillName={projectItem.languages} />
        <a
          href={projectItem.source}
          target="_blank"
          className="absolute right-2"
        >
          <img
            src={require("../../assets/info-icon/github.png")}
            className="w-8 grayscale hover:grayscale-0 transition duration-500 ease-in-out hover:scale-105"
          />
        </a>
      </div>
    </article>
  );
}
