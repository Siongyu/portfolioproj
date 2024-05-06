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
    <div className="w-96 h-min phone:w-60 phone:w-60 rounded-2xl">
      <div className="border rounded-2xl w-96 h-96 phone:w-60 phone:h-60 tablet:w-60 tablet:h-60">
        <img
          src={imageUrl}
          className="w-max h-full object-fill rounded-2xl mx-auto"
        />
      </div>
      <div className="flex flex-col mt-3 gap-3">
        <span className="font-bold uppercase text-xl phone:text-xl tablet:text-xl">{title}</span>
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="
                w-fit border border-4 rounded-2xl text-md p-1 
                hover:cursor-none hover:dark:bg-ghost_white-500 hover:dark:text-eerie_black-500
                hover:bg-eerie_black-500 hover:text-ghost_white-500
                phone:text-xs phone:border-2
                tablet:text-xs tablet:border-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="text-lg text-justify phone:text-sm ">{description}</span>
        <div className="flex gap-4 justify-end">
          {githubUrl && (
            <button 
              className="ui-btn 3/12 mt-4 phone:w-6/12"
              onClick={() => window.open(githubUrl)}
            >
              <span className="ml-2 phone:text-sm">
                GitHub
              </span>
            </button>
          )}

          {liveUrl && (
            <button 
            className="ui-btn 3/12 mt-4 phone:w-6/12"
            onClick={() => window.open(liveUrl)}
          >
            <span className="ml-2 phone:text-sm">
              Live
            </span>
          </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;