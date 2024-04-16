'use client'
import AnimatedText from "./components/animatedText";
import IntroComponent from "./components/introComponent";
import ContactComponent from "./components/contactComponent";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <IntroComponent />

      <section id="about" className="h-screen">
        <div className="flex flex-col items-center">
          <AnimatedText 
            text="<About Me />"
            className="font-bold text-2xl"
          />
        </div>
      </section>

      <section id="project" className="h-screen">
        <div className="flex flex-col items-center">
          <AnimatedText 
            text="<Project(s) />"
            className="font-bold text-2xl"
          />
        </div>
      </section>

      <ContactComponent />
    </main>
  );
}
