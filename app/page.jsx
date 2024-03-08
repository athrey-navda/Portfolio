"use client";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import EducationComponent from "./education/education";
import ExperienceComponent from "./experience/experience";
import ProjectsComponent from "./projects/projects";
import SkillsComponent from "./skills/skills";

const gmu = [
  { name: "Majors", description: "MS in Computer Science" },
  {
    name: "Coursework",
    description:
      "Analysis of Algorithms, User Interface and Experience (UI-UX) Development , Information Security Theory, Software Testing, Software Project Management.",
  },
  { name: "Duration", description: "Jan 2023 to Dec 2024" },
  { name: "GPA", description: "3.89/4.0" },
];
const vtu = [
  { name: "Majors", description: "BE in Information Science" },
  {
    name: "Coursework",
    description:
      "Software Engineering, DSA, OOPC, Web Development, Cryptography Network Security,Software Testing, DBMS, Computer Network",
  },
  { name: "Duration", description: "Aug 2015 to July 2019" },
  { name: "GPA", description: "3.0/4.0" },
];

export default function Home() {
  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container md:mx-auto flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />

        <section className="d-block px-6 py-14 sm:py-18 lg:px-8">
          <HeroSection />
        </section>

        <section className="d-block px-6 py-6 sm:py-2 lg:px-8">
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

        <section className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <EducationComponent />
        </section>

        <section className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <ExperienceComponent />
        </section>

        <section className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <ProjectsComponent />
        </section>

        <section className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <SkillsComponent />
        </section>
      </div>
    </div>
  );
}
