'use client'
import AnimatedText from "./components/animatedText";
import IntroComponent from "./components/introComponent";
import AboutMeComponent from "./components/aboutmeComponent";
import ProjectComponent from "./components/projectComponent";
import ContactComponent from "./components/contactComponent";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <IntroComponent />

      <AboutMeComponent />

      <ProjectComponent />

      <ContactComponent />
    </main>
  );
}
