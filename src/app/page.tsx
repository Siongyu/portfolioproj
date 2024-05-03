'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroComponent from "./components/introComponent";
import AboutMeComponent from "./components/aboutmeComponent";
import ProjectComponent from "./components/projectComponent";
import ContactComponent from "./components/contactComponent";

export default function Home() {
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {

    const checkEnd = () => {
      if (window.scrollY > 300) {
        setIsEnd(true);
      } else {
        setIsEnd(false);
      }
    }

    window.addEventListener("scroll", checkEnd);
    return () => window.removeEventListener("scroll", checkEnd);
  }
  , []);

  return (
    <main className="flex flex-col w-full">
      <IntroComponent />

      <AboutMeComponent />

      <ProjectComponent />

      <ContactComponent />

      {isEnd && (
        <motion.div 
          className="fixed bottom-0 right-0 mb-4 mr-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <button className="backToStart" onClick={() => window.scrollTo(0, 0)}>
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
              ></path>
            </svg>
          </button>
        </motion.div>
      )}
    </main>
  );
}
