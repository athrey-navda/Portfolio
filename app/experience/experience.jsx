import Link from "next/link";

export default function ExperienceComponent() {
  return (
    <Link href="./experience">
      <h2 className="text-3xl font-bold py-8 sm:text-4xl">Experience</h2>
      <div className="overflow-hidden py-4 sm:py-4 bg-slate-200 dark:bg-zinc-800 mt-3">
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
              ClayWorks Spaces Technologies Private Limited - Bengaluru - India
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap gap-6">
            <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Software Engineer II
              </p>
              <div className="mt-2">
                <div className="inline font-semibold">Jul 2022 - Jan 2023</div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Designed a SaaS product Universal Booking System of a system
                  with 4 interfaces user, admin, client, master.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Led the implmentation using React, Next.js, Tailwind, Headless
                  UI and Chartjs for visualization.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Built backend services with Node.js, Express.js, and MySQL,
                  integrating JWT and OAuth for secure auth.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Utilized Cypress and Mocha for automation testing and ensuring
                  code quality throughout development.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Coordinated with UX, sales & marketing teams to align
                  development for business.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Directed scrum meetings, improving quality and reducing
                  development timelines by 10%, achieving an early launch.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Implemented innovative data experiences and integrated
                  3rd-party applications within the MVC framework.
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Software Engineer
              </p>
              <div className="mt-2">
                <div className="inline font-semibold">Sep 2019 - Jul 2022</div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Spearheaded the creation of a internal Invementory system with
                  4 interfaces such as user, admin, vendor, master.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Created using Node, Express & MySQL, with daily stock updates
                  to team which reduced wastage by 26%.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Boosted online presence by 30% through agile development of
                  websites using HTML, JS, PHP, and Bootstrap.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Managed and integrated new technology stacks into three legacy
                  PHP systems, showcasing adaptability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-4 sm:py-4 bg-slate-200 dark:bg-zinc-800 mt-3">
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
              <div className="inline font-semibold">Jun 2018 - Aug 2018</div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                Architected a home automation tool with AWS Lambda, LLM, & Alexa
                Skills, enhancing application speed by 30%.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                Optimized system performance by 50% using DynamoDB and tailored
                API calls on EC2, improving UX.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
