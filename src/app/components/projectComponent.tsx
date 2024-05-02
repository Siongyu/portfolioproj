import AnimatedText from "./animatedText";
import ProjectCard from "./projectCard";
import information from "../../../data/information.json";

const ProjectComponent = () => {
  return (
    <section id="project" className="h-[70vh] phone:h-screen tablet:h-[200svh]">
      <div className="flex flex-col">
        <AnimatedText 
          text="Project(s)"
          className="font-bold text-center text-4xl laptop:text-5xl desktop:text-5xl"
        />
        {/* project section */}
        <div className="mt-5 gap-10 w-full overflow-y-auto phone:flex tablet:flex laptop:flex desktop:flex">
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
      </div>
    </section>
  )
}

export default ProjectComponent;