import AnimatedText from "./animatedText";
import information from "../../../data/information.json";

const AboutMeComponent = () => {
  return (
    <section id="about" className="h-screen">
      <div className="flex flex-col">
        <AnimatedText 
          text="A little about me..."
          className="font-bold text-center text-4xl laptop:text-5xl desktop:text-5xl"
        />
      </div>
    </section>
  )
}

export default AboutMeComponent;