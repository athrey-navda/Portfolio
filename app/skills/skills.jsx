"use client";

import Image from "next/image";
import Link from "next/link";

const programmingLanguages = [
  {
    id: 1,
    name: "Javascript",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    imageAlt: "Js",
  },
  {
    id: 2,
    name: "TypeScript",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    imageAlt: "Ts",
  },
  {
    id: 3,
    name: "Python",

    imageSrc: "https://www.python.org/static/img/python-logo.png",
    imageAlt: "Py",
  },
  {
    id: 4,
    name: "Java",

    imageSrc: "/images/skills/java.png",
    imageAlt: "Java",
  },
  {
    id: 5,
    name: "C++",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    imageAlt: "C++",
  },
  {
    id: 6,
    name: "PHP",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    imageAlt: "C++",
  },
];

const frontendTechnologies = [
  {
    id: 1,
    name: "React",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
    imageAlt: "React",
  },
  {
    id: 2,
    name: "Nextjs",

    imageSrc: "/images/skills/nextjs.jpg",
    imageAlt: "Nextjs",
  },
  {
    id: 3,
    name: "Redux",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png?20180308172936",
    imageAlt: "Java",
  },
  {
    id: 11,
    name: "Angular",

    imageSrc: "https://angular.io/assets/images/logos/angular/angular.svg",
    imageAlt: "Angular",
  },
  {
    id: 4,
    name: "Tailwind",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    imageAlt: "C++",
  },
  {
    id: 5,
    name: "Bootstrap",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    imageAlt: "C++",
  },
  {
    id: 12,
    name: "React Native",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    imageAlt: "RN",
  },
  {
    id: 7,
    name: "CSS",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    imageAlt: "C++",
  },
  {
    id: 8,
    name: "JQuery",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Jquery-icon.svg",
    imageAlt: "C++",
  },
  {
    id: 9,
    name: "HTML",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    imageAlt: "C++",
  },
  {
    id: 10,
    name: "Chart.js",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Chart.js_logo.svg",
    imageAlt: "Chart",
  },
];

const backendTechnologies = [
  {
    id: 1,
    name: "Node.js",

    imageSrc: "/images/skills/nodejs.jpg",
    imageAlt: "Node",
  },
  {
    id: 2,
    name: "Express.js",

    imageSrc: "/images/skills/expressjs.png",
    imageAlt: "Express",
  },
  {
    id: 3,
    name: "GraphQL",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    imageAlt: "GraphQL",
  },
  {
    id: 4,
    name: "JSON",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg",
    imageAlt: "JSON++",
  },
  {
    id: 5,
    name: "XML",

    imageSrc: "/images/skills/xml.jpg",
    imageAlt: "XML",
  },
  {
    id: 6,
    name: "REST APIs",

    imageSrc: "/images/skills/rest.jpeg",
    imageAlt: "RESTAPIS",
  },
  {
    id: 7,
    name: "WebSockets",

    imageSrc: "/images/skills/websocket.png",
    imageAlt: "WebSockets",
  },
  {
    id: 8,
    name: "Firebase",

    imageSrc:
      "https://img.godotassetlibrary.com/TX7pKOrfKcNirXf3vKfgG7P3_gq9IjIYda_KEHlP6rU/rs:fit:1920:1080:0/g:no/aHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3N0YXRpYy9pbWFnZXMvYnJhbmQtZ3VpZGVsaW5lcy9sb2dvLWxvZ29tYXJrLnBuZw.webp",
    imageAlt: "Firebase",
  },

  {
    id: 9,
    name: "Socket.io",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
    imageAlt: "Socket.io",
  },
];

const databaseTech = [
  {
    id: 1,
    name: "SQL",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    imageAlt: "SQL",
  },
  {
    id: 2,
    name: "MySQL",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg",
    imageAlt: "Mysql",
  },
  {
    id: 3,
    name: "PostgreSQL",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    imageAlt: "Post",
  },
  {
    id: 4,
    name: "MongoDB",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Antu_mongodb.svg",
    imageAlt: "MongoDB",
  },
  {
    id: 5,
    name: "DynamoDB",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png",
    imageAlt: "DynamoDB",
  },
];

const cloudTech = [
  {
    id: 1,
    name: "AWS",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    imageAlt: "AWS",
  },
  {
    id: 2,
    name: "DigitalOcean",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg",
    imageAlt: "DigitalOcean",
  },
  {
    id: 3,
    name: "GCP",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    imageAlt: "GCP",
  },
];

const security = [
  {
    id: 1,
    name: "JWT",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/JWT_LOGO.png",
    imageAlt: "JWT",
  },
  {
    id: 2,
    name: "OAuth",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg",
    imageAlt: "OAuth",
  },
];

const containerization = [
  {
    id: 1,
    name: "Docker",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png",
    imageAlt: "Docker",
  },
  {
    id: 2,
    name: "Kubernetes",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    imageAlt: "Kubernetes",
  },
];

const toolsTech = [
  {
    id: 1,
    name: "VS code",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    imageAlt: "VS",
  },
  {
    id: 2,
    name: "Git",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    imageAlt: "Kubernetes",
  },

  {
    id: 3,
    name: "Postman",

    imageSrc: "/images/skills/postman.jpeg",
    imageAlt: "Kubernetes",
  },
  {
    id: 4,
    name: "Jira",

    imageSrc: "/images/skills/jira.png",
    imageAlt: "Kubernetes",
  },
  {
    id: 5,
    name: "Cypress",

    imageSrc: "/images/skills/cypress.jpeg",
    imageAlt: "Cypress",
  },
  {
    id: 6,
    name: "Mocha",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Mocha_logo.svg",
    imageAlt: "Mocha",
  },
];

export default function SkillsComponent() {
  return (
    <div className="bg-stone-100 dark:bg-teal-950">
      <div className="p-2">
        <Link href="./skills">
          <h2 className="text-3xl font-bold py-8 sm:text-4xl">Skills</h2>
          <div className="mx-auto max-w-2xl  items-center gap-x-8 gap-y-8 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 py-4 ">
            <div>
              {" "}
              <div className="font-bold">Programming Languages: </div>
              <div className="my-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                {programmingLanguages.map((languages) => (
                  <div key={languages.id}>
                    <div className="my-2 flex justify-center">
                      <div
                        className={`w-24 h-24 overflow-hidden p-2 rounded-md lg:aspect-none group-hover:opacity-75 ${languages.name === "Python" ? "bg-white dark:bg-black" : "bg-gray-200"}`}
                      >
                        <Image
                          alt={languages.imageAlt}
                          src={languages.imageSrc}
                          className="object-cover object-center w-full h-full"
                          width={124}
                          height={124}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-sm">{languages.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold">Frontend Dev : </div>
              <div className="my-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                {frontendTechnologies.map((frontend) => (
                  <div key={frontend.id}>
                    <div className="my-2 flex justify-center">
                      <div className="w-24 h-24 overflow-hidden  p-2 rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                        <Image
                          alt={frontend.imageAlt}
                          src={frontend.imageSrc}
                          className="object-cover object-center w-full h-full"
                          width={124}
                          height={124}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-sm">{frontend.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold">Backend Dev : </div>
              <div className="my-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                {backendTechnologies.map((backend) => (
                  <div key={backend.id}>
                    <div className="my-2 flex justify-center">
                      <div className="w-24 h-24 overflow-hidden p-2 rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                        <Image
                          alt={backend.imageAlt}
                          src={backend.imageSrc}
                          className="object-cover object-center w-full h-full"
                          width={124}
                          height={124}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-sm">{backend.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold">Database : </div>
              <div className="my-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                {databaseTech.map((database) => (
                  <div key={database.id}>
                    <div className="my-2 flex justify-center">
                      <div className="w-24 h-24 overflow-hidden p-2 rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                        <Image
                          alt={database.imageAlt}
                          src={database.imageSrc}
                          className="object-cover object-center w-full h-full"
                          width={124}
                          height={124}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-sm">{database.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold">Cloud : </div>
              <div className="my-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                {cloudTech.map((cloud) => (
                  <div key={cloud.id}>
                    <div className="my-2 flex justify-center">
                      <div className="w-24 h-24 overflow-hidden p-2 rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                        <Image
                          alt={cloud.imageAlt}
                          src={cloud.imageSrc}
                          className="object-cover object-center w-full h-full"
                          width={124}
                          height={124}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-sm">{cloud.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold">Security : </div>
              <div className="my-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                {security.map((sec) => (
                  <div key={sec.id}>
                    <div className="my-2 flex justify-center">
                      <div className="w-24 h-24 overflow-hidden p-2 rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                        <Image
                          alt={sec.imageAlt}
                          src={sec.imageSrc}
                          className="object-cover object-center w-full h-full"
                          width={124}
                          height={124}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-sm">{sec.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-bold">Containerization : </div>
              <div className="my-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                {containerization.map((container) => (
                  <div key={container.id}>
                    <div className="my-2 flex justify-center">
                      <div className="w-24 h-24 overflow-hidden p-2 rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                        <Image
                          alt={container.imageAlt}
                          src={container.imageSrc}
                          className="object-cover object-center w-full h-full"
                          width={124}
                          height={124}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-sm">{container.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold">Tools and more : </div>

              <div className="my-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                {toolsTech.map((tools) => (
                  <div key={tools.id}>
                    <div className="my-2 flex justify-center">
                      <div className="w-24 h-24 overflow-hidden p-2 rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                        <Image
                          alt={tools.imageAlt}
                          src={tools.imageSrc}
                          className="object-cover object-center w-full h-full"
                          width={124}
                          height={124}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-sm">{tools.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl  items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 py-4 ">
            <div>
              <div className="text-xl font-bold">Leadership Involvement</div>
              <div className="mt-2">
                <div className="mt-2 text-sm">
                  <div className="font-bold">
                    Active Member - Leadership Education and Development |
                    George Mason University Jan 2023
                  </div>
                  Redefined leadership via ”Active Leaders Program”, fostering
                  collaborative communication for tech and biz ventures. •
                  Participated in “Leadership Mason Conferences”, steered
                  discussions on stakeholders’ alignment and teamwork.
                </div>
                <div className="mt-2 text-sm">
                  <div className="font-bold">
                    Core team Member- Cultural Activity Team | VTU University
                    Aug 2016 - Jul 2019
                  </div>
                  Coordinated a university event, collaborating with the
                  marketing team to secure sponsorship’s, and ensured the
                  seamless functioning of teams to make the event a success. •
                  Successfully organized Marathon 2k18 - Run to Save Tigers,
                  with the registration of 1300 participants, contributing to
                  the event’s overall success.
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
