"use client";
import HeroSection from "./components/heroSection";
import EducationComponent from "./education/education";
import ExperienceComponent from "./experience/experience";
import ProjectsComponent from "./projects/projects";
import SkillsComponent from "./skills/skills";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          scrollTo(element);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const scrollTo = (element) => {
    const offsetTop = element.getBoundingClientRect().top;
    const duration = 800;

    const startTime = performance.now();
    const startOffset = window.scrollY;

    function scroll(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;

      window.scrollTo({
        top: startOffset + offsetTop * ease(progress),
        behavior: "auto",
      });

      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  };

  const ease = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container-xl md:mx-auto flex min-h-screen flex-col items-center justify-between p-2 pt-24 lg:px-24">
        <section className="d-block px-6 py-14 sm:py-18 lg:px-8">
          <HeroSection />
        </section>

        <section className="d-block px-6 py-4 sm:py-1 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
              <p>
                “Welcome to my digital space, where code meets creativity, and
                innovation drives impact. With a passion for crafting software
                solutions, exploring the world, whipping up culinary delights,
                and grooving to the beat, I bring a diverse blend of skills and
                experiences to every project. Let's build something
                extraordinary together!”
              </p>
            </blockquote>
          </div>
        </section>

        <section id="education" className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <EducationComponent />
        </section>

        <section id="experience" className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <ExperienceComponent />
        </section>

        <section id="projects" className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <ProjectsComponent />
        </section>

        <section id="skills" className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <SkillsComponent />
        </section>
      </div>
    </div>
  );
}
