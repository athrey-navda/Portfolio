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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    imageAlt: "Ts",
  },
  {
    id: 3,
    name: "Python",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Python-logo.png/1093px-Python-logo.png",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/240px-ISO_C%2B%2B_Logo.svg.png",
    imageAlt: "C++",
  },
  {
    id: 6,
    name: "PHP",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1422px-PHP-logo.svg.png",
    imageAlt: "C++",
  },
];

const frontendTechnologies = [
  {
    id: 1,
    name: "React",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
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

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    imageAlt: "Java",
  },
  {
    id: 4,
    name: "Tailwind",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png",
    imageAlt: "RN",
  },
  {
    id: 7,
    name: "CSS",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
    imageAlt: "C++",
  },
  {
    id: 8,
    name: "JQuery",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Jquery-icon.svg/1200px-Jquery-icon.svg.png",
    imageAlt: "C++",
  },
  {
    id: 9,
    name: "HTML",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Html5_dise%C3%B1o_web.png?20180726103553",
    imageAlt: "C++",
  },
  {
    id: 10,
    name: "Chart.js",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chart.js_logo.svg/240px-Chart.js_logo.svg.png",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
    imageAlt: "GraphQL",
  },
  {
    id: 4,
    name: "JSON",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1200px-JSON_vector_logo.svg.png",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/240px-Socket-io.svg.png",
    imageAlt: "Socket.io",
  },
];

const databaseTech = [
  {
    id: 1,
    name: "SQL",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Oracle_SQL_Developer_logo.svg/800px-Oracle_SQL_Developer_logo.svg.png",
    imageAlt: "SQL",
  },
  {
    id: 2,
    name: "MySQL",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1448px-Database-mysql.svg.png",
    imageAlt: "Mysql",
  },
  {
    id: 3,
    name: "PostgreSQL",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/240px-Postgresql_elephant.svg.png",
    imageAlt: "Post",
  },
  {
    id: 4,
    name: "MongoDB",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/1024px-Antu_mongodb.svg.png",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/300px-Amazon_Web_Services_Logo.svg.png",
    imageAlt: "AWS",
  },
  {
    id: 2,
    name: "DigitalOcean",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1024px-DigitalOcean_logo.svg.png",
    imageAlt: "DigitalOcean",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/1196px-Oauth_logo.svg.png",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/168px-Kubernetes_logo_without_workmark.svg.png",
    imageAlt: "Kubernetes",
  },
];

const toolsTech = [
  {
    id: 1,
    name: "VS code",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
    imageAlt: "VS",
  },
  {
    id: 2,
    name: "Git",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mocha_logo.svg/200px-Mocha_logo.svg.png",
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
                      <div className="w-24 h-24 overflow-hidden p-2 rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
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
