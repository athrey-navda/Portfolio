import { Linden_Hill } from "next/font/google";
import Link from "next/link";

export default function ExperienceComponent() {
  return (
    <div>
      <h2 className="text-3xl font-bold py-8 sm:text-4xl">Experience</h2>
      <div className="overflow-hidden py-4 sm:py-4 bg-slate-200 dark:bg-zinc-800 mt-3">
        <div className="mx-auto px-6 lg:px-8">
          <div className="flex justify-start gap-x-6">
            <Link href="https://www.ifees.net">
              <div className="flex items-center  gap-x-6">
                <img
                  className="h-16 w-48"
                  src="/images/homepage/gedc_logo.png"
                  alt="gedc_logo"
                />
              </div>
            </Link>
            <Link href="https://www.gedcouncil.org/">
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-48"
                  src="/images/homepage/ifees_logo.png"
                  alt="ifees_logo"
                />
              </div>
            </Link>
          </div>
          <h2 className="text-base font-semibold leading-7 mt-4">
            <Link href="https://www.ifees.net">
              International Federation of Engineering Education Societies
              (IFEES)
            </Link>
            and{" "}
            <Link href="https://www.gedcouncil.org/">
              Global Engineering Deans Council (GEDC)
            </Link>
          </h2>
          <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              International Program Associate
            </p>
            <div className="mt-2">
              <div className="inline font-semibold">Aug 2024 - present</div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                Constructing the product development of a community platform
                using Next.js, Flask, Elasticsearch & OAuth.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                Utilizing REST APIs, LLM and Elasticsearch to deliver enhanced,
                user-friendly search functionalities.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-4 sm:py-4 bg-slate-200 dark:bg-zinc-800 mt-3">
        <div className="mx-auto px-6 lg:px-8">
          <div>
            <Link href="https://www.clayworks.space">
              <div className="flex items-center gap-x-6">
                <img
                  className="h-10 w-64"
                  src="/images/homepage/clayworks.png"
                  alt="cw_logo"
                />
              </div>
            </Link>
            <h2 className="text-base font-semibold leading-7 mt-4">
              <Link href="https://www.clayworks.space">
                ClayWorks Spaces Technologies Private Limited - Bengaluru -
                India
              </Link>
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
                  Implemented algorithm design in a booking system a SaaS
                  product with user, admin, client, master interfaces.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Enabled customizable booking types(cabins, meeting rooms,
                  parking, food)via an flexible MVC and MVP patterns.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Led the implementation using React, Next.js, Redux, Tailwind,
                  Headless UI and Chartjs for visualization.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Built backend services with Node.js, Express.js, and MySQL,
                  integrating JWT and OAuth for secure auth.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Utilized Cypress and Mocha for automation testing and ensuring
                  code quality in full stack development.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Handled software development life cycle, from software
                  architecture and design patterns to software deployment.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Aligned development with UX, sales, and marketing, boosting
                  revenue by 25% through improved user experience.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Directed scrum meetings which helped in reducing development
                  timelines by 10%, achieving an early launch.
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
                  Spearheaded the creation of an Inventory system with four
                  interfaces such as user, admin, vendor, master.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Using Node, Express & MySQL, with daily stock updates to team
                  which reduced wastage by 26% across 10 centers.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Evolved smart work-pod solution Spotch with IoT integration
                  and well-being alerts, enhancing productivity.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Facilitated React for the frontend, Java with Maven for the
                  backend, and Firebase for real-time WebSocket notifications,
                  integrating a mobile app with React Native for seamless user
                  experience, recognized by Google.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Managed the end-to-end integration of new technology stacks
                  into legacy PHP systems and other web development.
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
    </div>
  );
}
