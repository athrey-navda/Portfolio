"use client";
import Link from "next/link";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";

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

        <section className="d-block px-6 py-6 sm:py-4 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
          </div>
        </section>

        <section className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <Link href="./education">
            <h2 className="text-3xl font-bold py-12 sm:text-4xl">Education</h2>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 bg-stone-300 dark:bg-stone-700 mt-3 py-4">
              <div>
                <h3 className="font-semibold">
                  George Mason University - Fairfax, Viginia, United States
                </h3>
                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
                  {gmu.map((gmu) => (
                    <div
                      key={gmu.name}
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium">{gmu.name}</dt>
                      <dd className="mt-2 text-sm">{gmu.description}</dd>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ height: "30rem", overflow: "hidden" }}
                >
                  <img
                    src="https://cec.gmu.edu/sites/g/files/yyqcgq471/files/styles/large/public/2022-08/Generic-thumnbail-image.jpg"
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 bg-stone-300 dark:bg-stone-700 mt-3 py-4">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ height: "30rem", overflow: "hidden" }}
                >
                  <img
                    src="/images/homepage/vtu.jpeg"
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">
                  Visveswaraya Technological University - Kalburgi, Karnataka,
                  India
                </h3>
                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
                  {vtu.map((vtu) => (
                    <div
                      key={vtu.name}
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium">{vtu.name}</dt>
                      <dd className="mt-2 text-sm">{vtu.description}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <Link href="./experience">
            <h2 className="text-3xl font-bold py-8 sm:text-4xl">Experience</h2>
            <div className="overflow-hidden py-4 sm:py-4 bg-slate-400 dark:bg-slate-800 mt-3">
              <div className="mx-auto px-6 lg:px-8">
                <div>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-10 w-64"
                      src="/images/homepage/clayworks.png"
                      alt="cw_logo"
                    />
                  </div>
                  <h2 className="text-base font-semibold leading-7 mt-4">
                    ClayWorks Spaces Technologies Private Limited - Bengaluru -
                    India
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap gap-6">
                  <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                      Software Engineer II
                    </p>
                    <div className="mt-2">
                      <div className="inline font-semibold">
                        Jul 2022 - Jan 2023
                      </div>
                      <div className="text-sm mt-2">
                        Pioneered the design and implementation of the Universal
                        Booking System, Universal Booking System, leveraging
                        React - Next.js (pageRouter) with Tailwind CSS and other
                        animation effects for front-end used Headless UI,
                        Tailwind Components for UI coomponents
                      </div>
                      <div className="text-sm mt-2">
                        Back-end with Node.js, ExpressJS for API’s, MySQL to
                        handle database, JWT and OAuth technologies to create a
                        secure application with sophisticated user hierarchy
                        with 4 levels and credit management for booking.
                      </div>
                      <div className="text-sm mt-2">
                        Guided a cohesive team in the early stages of a startup,
                        fostering cross-functional collaboration for product
                        development aligned with business objectives.
                      </div>
                      <div className="text-sm mt-2">
                        Directed and facilitated scrum meetings for product life
                        cycle management, resulting in a 25% decrease in
                        development timelines and a 30% increase in product
                        quality.
                      </div>
                      <div className="text-sm mt-2">
                        Embarked the journey as a novice software developer,
                        progressively evolving expertise and knowledge within
                        the startup ecosystem, ultimately achieving the role of
                        a market-fit software engineer in a span of four years.
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                      Software Engineer
                    </p>
                    <div className="mt-2">
                      <div className="inline font-semibold">
                        Sep 2019 - Jul 2022
                      </div>
                      <div className="text-sm mt-2">
                        Elevated operational efficiency as an entry-level
                        engineer by actively engaging in the development of a 3
                        to 4 applications, showcasing a consistent commitment to
                        continuous learning and innovative solutions.
                      </div>
                      <div className="text-sm mt-2">
                        Spearheaded the creation of an Inventory management
                        application using Node, Express.js for back-end API’s
                        with MySQL, HTML, JS Bootstrap CSS for UI, resulting in
                        a 20% reduction in wastage in the company. This
                        contribution underscored my ability to address
                        operational challenges through technological solutions.
                      </div>
                      <div className="text-sm mt-2">
                        Drastically enhanced the company’s online presence by
                        developing website for ClayWorks and Spotch following
                        Figma designs, using HTML, Javacscript and Bootstrapp
                        CSS which lead to a substantial 30% increase in
                        company’s online presence.
                      </div>
                      <div className="text-sm mt-2">
                        Directed and facilitated scrum meetings for product life
                        cycle management, resulting in a 25% decrease in
                        development timelines and a 30% increase in product
                        quality.
                      </div>
                      <div className="text-sm mt-2">
                        Played a pivotal role in managing 3 legacy systems such
                        as MRBS, Space calculator, showcasing versatility and
                        adaptability during the early stages of my career.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden py-4 sm:py-4 bg-slate-400 dark:bg-slate-800 mt-3">
              <div className="mx-auto px-6 lg:px-8">
                <div>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-48"
                      src="/images/homepage/vbc.jpg"
                      alt="cw_logo"
                    />
                  </div>
                  <h2 className="text-base font-semibold leading-7 mt-4">
                    The Valley Bootcamp - Bengaluru - India
                  </h2>
                </div>
                <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
                  <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Software Engineer Intern
                  </p>
                  <div className="mt-2">
                    <div className="inline font-semibold">
                      Jun 2018 - Aug 2018
                    </div>
                    <div className="text-sm mt-2">
                      Led the design and development of a Home Automation
                      project using Machine Learning and Alexa Skillset.
                    </div>
                    <div className="text-sm mt-2">
                      Implementation of voice command control in Alexa, leading
                      to a 30% increase in user engagement.
                    </div>
                    <div className="text-sm mt-2">
                      Optimization of DynamoDB usage and customization of API
                      calls, reducing system response time by 50% and enhancing
                      user satisfaction.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <Link href="./projects">
            <h2 className="text-3xl font-bold py-12 sm:text-4xl">Projects</h2>
            <div className="mx-auto max-w-2xl  items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 py-4 bg-gray-400 dark:bg-gray-900 ">
              <div>
                <div className="text-xl font-bold">
                  Rapid Cloudify
                  <span className="text-sm flex float-end">
                    Nov 2023 - present
                  </span>
                </div>
                <div className="text-md font-bold mt-4">
                  React, React-Bootstrap, Formik, Yup, Python, Ansible, AWS EC2
                </div>
                <div className="mt-2">
                  <div className="mt-2 text-sm">
                    Automated AWS deployment for ReactJS, Node.js, and Python
                    apps, cutting manual effort by 70% and accelerating cycles
                    by 50% for small-scale industries.
                  </div>
                  <div className="mt-2 text-sm">
                    Crafted a robust CI/CD pipeline utilizing GitHub Webhooks to
                    automate code updates, ensuring an impressive uptime of
                    99.9% and seamless scalability in real-time.
                  </div>
                  <div className="mt-2 text-sm">
                    Implemented Ansible for IaC, reducing AWS setup times by 60%
                    and operational costs by 40%, while enhancing client control
                    through a user-friendly interface.
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-2xl  items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 py-4 bg-gray-400 dark:bg-gray-900 ">
              <div>
                <div className="text-xl font-bold">
                  Part-time Job Portal - Intra college
                  <span className="text-sm flex float-end">
                    Oct 2018 - May 2019
                  </span>
                </div>
                <div className="text-md font-bold mt-4">
                  PHP, Laravel, CSS-Bootstrap, MySQL
                </div>
                <div className="mt-2">
                  <div className="mt-2 text-sm">
                    Directed the development of a comprehensive full-stack web
                    application, enabling students to seamlessly apply for
                    on-campus part-time opportunities, resulting in a 40%
                    increase in student engagement with the platform.
                  </div>
                  <div className="mt-2 text-sm">
                    Collaborated within a front-end team of 4 to optimize
                    application handling and responses, contributing to a
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
