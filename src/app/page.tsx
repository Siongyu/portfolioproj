'use client'
import AnimatedText from "./components/animatedText";
import IntroComponent from "./components/introComponent";
import ProjectComponent from "./components/projectComponent";
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

      <ProjectComponent />

      <ContactComponent />
    </main>
  );
}
