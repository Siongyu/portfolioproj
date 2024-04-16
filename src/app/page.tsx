'use client'
import Image from "next/image";
import AnimatedText from "./components/animatedText";
import { ReactTyped } from "react-typed"

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="
        h-screen items-center flex justify-center
        phone:flex-col
        tablet:mx-auto laptop:mx-auto desktop:mx-auto
        tablet:gap-4 laptop:gap-8 desktop:gap-12
      ">
          <div className="flex-col">
            <div>
              <ReactTyped 
                strings={[
                  "Hello",
                  "你好",
                  "Bonjour",
                  "こんにちは",
                  "안녕하세요",
                ]} 
                typeSpeed={150}
                backSpeed={20}
                loop
                className="text-6xl font-bold phone:text-2xl tablet:text-3xl laptop:text-4xl"
              />
              <span className="phone:text-xl tablet:text-2xl laptop:text-3xl">
                , I'm <span className="text-6xl font-bold phone:text-2xl tablet:text-3xl laptop:text-4xl">Siong Yu</span>
              </span>
            </div>
            <div>
              <span className="text-outer_space tablet:text-2xl laptop:text-3xl">
                I am currently undertaking a degree in Computing Science
              </span>
            </div>
          </div>

          <div className="phone:w-56 tablet:w-80">
            <img
              src="/avatar.png"
              alt="ME"
            >
            </img>
          </div>
      </section>

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

      <section id="contact" className="h-screen">
        <div className="flex flex-col items-center">
          <AnimatedText 
            text="<Contact />"
            className="font-bold text-2xl"
          />
        </div>
      </section>
    </main>
  );
}
