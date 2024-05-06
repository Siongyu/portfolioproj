import AnimatedText from "./animatedText";
import ProjectCard from "./projectCard";
import information from "../../../data/information.json";

const ProjectComponent = () => {
  return (
    <section id="project" className="h-screen phone:h-[120svh] tablet:h-screen laptop:h-screen">
      <div className="flex flex-col">
        <AnimatedText 
          text="Project(s)"
          className="font-bold text-center text-4xl laptop:text-5xl desktop:text-5xl"
        />
        <div className="flex overflow-y-auto w-full">
          {/* project section */}
          <div className="mt-5 gap-10 flex">
            {information.projects.map((project, projectIndex) => (
              <ProjectCard
                key={projectIndex}
                imageUrl={project.image}
                title={project.title}
                techStack={project.techstack}
                description={project.description}
                githubUrl={project.githubURL}
                liveUrl={project.liveURL}
              />
            ))}
          </div>
          <span 
            className="text-5xl flex items-center mx-auto 
            phone:text-2xl phone:ml-10
            tablet:text-3xl tablet:ml-10
            "
          >
            More projects soon... 🚧
          </span>
        </div>
      </div>
    </section>
  )
}

export default ProjectComponent;