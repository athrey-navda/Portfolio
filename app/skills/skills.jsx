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
    </Link>
  );
}
