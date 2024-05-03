import { Link } from "react-router-dom";
import Project from "../sub-components/Project";
import ProjectList from "./../../data/project-list.json";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ProjectsSection() {
  // Only used on external file
  // const [skill, setSkill] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("./../../data/list.json");
  //       const jsonData = await response.json();
  //       console.log(response);
  //       setSkill(jsonData);
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className="projects max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center pb-6 sm:pb-12">
        <div className="">
          <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase text-amber-400 font-medium tracking-wider">
            Featured Projects
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 pt-1 sm:pt-3">
            Featured Front-End Projects
          </p>
        </div>
        <div className="group flex gap-0 items-center text-amber-300 hover:text-amber-400 text-base sm:text-lg md:text-xl font-medium">
          <Link
            to="/project"
            className="uppercase transition duration-500 ease-in-out hover:translate-x-0.5"
          >
            View all
          </Link>
          <ChevronRightIcon className="h-8 sm:h-9 md:h-10 transition duration-500 ease-in-out group-hover:scale-110" />
        </div>
      </div>
      <div className="group grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center text-base sm:text-lg md:text-xl">
        {ProjectList ? (
          ProjectList.filter((projectItem) => projectItem.start >= 4).map(
            (projectItem, index) => (
              <Project key={index} projectItem={projectItem} />
            )
          )
        ) : (
          <p className="px-2 py-4">Loading...</p>
        )}
      </div>
    </section>
  );
}
