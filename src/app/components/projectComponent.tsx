import AnimatedText from "./animatedText";
import ProjectCard from "./projectCard";

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
          <ProjectCard
            imageUrl="/portfolioScreenShot.png"
            title="Portfolio"
            techStack={["NextJs", "TailWindCSS", "Framer Motion", "Personal", "Portfolio"]}
            description="This is my personal portfolio project. I built this while trying out Framer Motion."
          />

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