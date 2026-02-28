import ProjectsCard from "./ProjectsCard";
import { ProjectsData } from "@/constant/constant";

const Projects = () => {
  return (
    <div className="pt-16 pb-16 w-[80%] mx-auto">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300">projects</span>
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
      >
        {ProjectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
