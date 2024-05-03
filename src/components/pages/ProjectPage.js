import { Helmet } from "react-helmet-async";
import Project from "../sub-components/Project";
import ProjectList from "./../../data/project-list.json";

export default function ProjectPage() {
  return (
    <div className="projectPage text-slate-200">
      <Helmet>
        <title>Project &mdash; Nguyen Anh Nhut</title>
      </Helmet>
      <section className="projectHeader bg-gradient-to-b from-slate-900 from-5% via-slate-800 to-slate-900 to-90%">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-28 sm:pt-40 pb-12 sm:pb-24 relative">
          <h3 className="text-4xl sm:text-5xl md:text-6xl uppercase text-amber-400 font-medium tracking-wider">
            Projects
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl pt-2 sm:pt-3">
            Front-End Projects
          </p>
          <p className="text-5xl sm:text-7xl md:text-8xl uppercase text-slate-500 opacity-10 font-medium tracking-widest absolute top-12 sm:top-20 md:top-16 left-12 sm:left-20">
            Projects
          </p>
        </div>
      </section>
      <section className="projectContent bg-gradient-to-b from-slate-800 to-slate-900 to-90%">
        <div className="group max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center text-xl px-4 sm:px-8 py-12 sm:py-24">
          {ProjectList ? (
            ProjectList.map((projectItem, index) => (
              <Project key={index} projectItem={projectItem} />
            ))
          ) : (
            <p className="px-2 py-4">Loading...</p>
          )}
        </div>
      </section>
    </div>
  );
}
