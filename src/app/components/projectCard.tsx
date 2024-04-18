type ProjectCardProps = {
  imageUrl: string;
  title: string;
  techStack: string[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  imageUrl,
  title,
  techStack,
  description,
  githubUrl,
  liveUrl,
}: ProjectCardProps & { githubUrl?: string; liveUrl?: string;
}) => {
  return (
    <div className="w-96 h-96 bg-ghost_white-500 rounded-lg border">
      <div className="w-96 h-96 border">
        <img
          src="/portfolioScreenShot.png"
          className="w-max h-full object-contain mx-auto"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-center font-bold text-2xl">Project 1</span>
        <span className="text-center text-lg">Description</span>
        <span className="text-center text-lg">Tech Stack</span>
      </div>
    </div>
  )
}

export default ProjectCard;