import Link from "next/link";

export default function ProjectsComponent() {
  return (
    <Link href="./projects">
      <h2 className="text-3xl font-bold py-12 sm:text-4xl">Projects</h2>
      <div className="mx-auto max-w-2xl  items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 py-4 bg-gray-400 dark:bg-gray-900 ">
        <div>
          <div className="text-xl font-bold">
            Rapid Cloudify
            <span className="text-sm flex float-end">Nov 2023 - present</span>
          </div>
          <div className="text-md font-bold mt-4">
            React, React-Bootstrap, Formik, Yup, Python, Ansible, AWS EC2
          </div>
          <div className="mt-2">
            <div className="mt-2 text-sm">
              Automated AWS deployment for ReactJS, Node.js, and Python apps,
              cutting manual effort by 70% and accelerating cycles by 50% for
              small-scale industries.
            </div>
            <div className="mt-2 text-sm">
              Crafted a robust CI/CD pipeline utilizing GitHub Webhooks to
              automate code updates, ensuring an impressive uptime of 99.9% and
              seamless scalability in real-time.
            </div>
            <div className="mt-2 text-sm">
              Implemented Ansible for IaC, reducing AWS setup times by 60% and
              operational costs by 40%, while enhancing client control through a
              user-friendly interface.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl  items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 py-4 bg-gray-400 dark:bg-gray-900 ">
        <div>
          <div className="text-xl font-bold">
            Part-time Job Portal - Intra college
            <span className="text-sm flex float-end">Oct 2018 - May 2019</span>
          </div>
          <div className="text-md font-bold mt-4">
            PHP, Laravel, CSS-Bootstrap, MySQL
          </div>
          <div className="mt-2">
            <div className="mt-2 text-sm">
              Directed the development of a comprehensive full-stack web
              application, enabling students to seamlessly apply for on-campus
              part-time opportunities, resulting in a 40% increase in student
              engagement with the platform.
            </div>
            <div className="mt-2 text-sm">
              Collaborated within a front-end team of 4 to optimize application
              handling and responses, contributing to a
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
