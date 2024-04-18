import AnimatedText from "./animatedText";
import ProjectCard from "./projectCard";

const ProjectComponent = () => {
  return (
    <section id="project" className="h-screen">
      <div className="flex flex-col items-center">
        <AnimatedText 
          text="Project(s)"
          className="font-bold text-center text-4xl laptop:text-5xl desktop:text-5xl"
        />
        {/* project section */}
        <div className="mt-5 gap-4 phone:flex tablet:flex laptop:flex desktop:flex">
          <ProjectCard
            imageUrl="/portfolioScreenShot.png"
            title="Project 1"
            description="Description"
            techStack={["Tech Stack"]}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectComponent;