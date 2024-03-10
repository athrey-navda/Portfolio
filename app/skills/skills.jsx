import Link from "next/link";

export default function SkillsComponent() {
  return (
    <Link href="./skills">
      <h2 className="text-3xl font-bold py-12 sm:text-4xl">Skills</h2>
      <div className="mx-auto max-w-2xl  items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 py-4 bg-teal-100 dark:bg-teal-950">
        <div>
          <div className="text-xl font-bold">Technical Skills</div>
          <div className="mt-2">
            <div className="mt-2 text-sm">
              <span className="font-bold">Programming Languages: </span>
              JavaScript, Python, Java, C, C+
            </div>
            <div className="mt-2 text-sm">
              <span className="font-bold">Technologies: </span>
              Next.js, React, NodeJS, Express.js, Redux, HTML, CSS, Tailwind
              CSS, Bootstrap, Material UI, Sass, Spring Boot, JWT, OAuth,
              RESTful APIs, WebSocket’s (Firebase), AJAX.
            </div>
            <div className="mt-2 text-sm">
              <span className="font-bold">Databases: </span>
              MySQL, PostgreSQL, MongoDB Software
            </div>
            <div className="mt-2 text-sm">
              <span className="font-bold">Web Tools: </span>
              VS Code, Git, Postman, Jenkins, Kubernetes, Ansible, Amazon EC2,
              Figma, Jira, React DevTools
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl  items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 py-4 bg-teal-100 dark:bg-teal-950">
        <div>
          <div className="text-xl font-bold">Leadership Involvement</div>
          <div className="mt-2">
            <div className="mt-2 text-sm">
              <div className="font-bold">
                Active Member - Leadership Education and Development | George
                Mason University Jan 2023
              </div>
              Redefined leadership via ”Active Leaders Program”, fostering
              collaborative communication for tech and biz ventures. •
              Participated in “Leadership Mason Conferences”, steered
              discussions on stakeholders’ alignment and teamwork.
            </div>
            <div className="mt-2 text-sm">
              <div className="font-bold">
                Core team Member- Cultural Activity Team | VTU University Aug
                2016 - Jul 2019
              </div>
              Coordinated a university event, collaborating with the marketing
              team to secure sponsorship’s, and ensured the seamless functioning
              of teams to make the event a success. • Successfully organized
              Marathon 2k18 - Run to Save Tigers, with the registration of 1300
              participants, contributing to the event’s overall success.
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
