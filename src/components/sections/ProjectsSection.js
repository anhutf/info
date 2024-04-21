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
    <section className="projects max-w-5xl mx-auto px-8 py-12">
      <div className="flex justify-between items-center pb-12">
        <div className="">
          <h3 className="text-4xl uppercase text-amber-400 font-medium tracking-wider">
            Featured Projects
          </h3>
          <p className="text-xl text-slate-200 pt-3">
            Featured Front-End Projects
          </p>
        </div>
        <div className="group flex gap-0 items-center text-amber-300 hover:text-amber-400 text-xl font-medium">
          <Link
            to="/project"
            className="uppercase transition duration-500 ease-in-out hover:translate-x-0.5"
          >
            View all
          </Link>
          <ChevronRightIcon className="h-10 transition duration-500 ease-in-out group-hover:scale-110" />
        </div>
      </div>
      <div className="group grid grid-cols-1 sm:grid-cols-2 gap-8 items-center text-xl">
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
