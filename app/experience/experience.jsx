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
              Software Developer
            </p>
            <div className="mt-2">
              <div className="inline font-semibold">Aug 2024 - present</div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                Spearheading the full stack development of a platform services
                (CRM) using Next.js, Python & Flask for 1,000+ users.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                Leveraging REST APIs, Elasticsearch, LLM and Redis to deliver
                enhanced, better search functionalities with less latency.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                Managing the team across different timezones and while adhering
                SDLC coding standards for these digital products.
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
                  Implemented algorithm design in a book anything system a
                  secured, scalable SaaS solution with 4 level user interface.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Led the frontend implementation using React, Next.js, Redux,
                  Tailwind, Headless UI and Chartjs for visualization.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Expert in state management, API integrations using Redux,
                  Redux-thunk, Axios, Node.js, Express.js, and MySQL with ORM,
                  enhancing responsiveness by 40%, while handling asynchronous
                  actions, middleware integration, websockets.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Utilized Cypress & Mocha for automation testing (TDD), Postman
                  for API testing ensuring code quality in development.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Established CI/CD pipelines for the microservices using
                  Jenkins achieving 60% reduction in manual deployment effort.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Orchestrated the software development life cycle with Jira,
                  from software architecture & design patterns (MVC) to
                  deployment.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Reduced applications loading time by 30% through optimization
                  techniques like code splitting, code re-factoring, lazy
                  loading, priority, memoization, reduced re-renders, dependency
                  optimizations, debounce and throttling.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Collaborated using tools like Confluenece with UX, sales, &
                  marketing to improve product features which boosted revenue by
                  25%.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Directed scrum meetings, mentored juniors & conducted source
                  code review, reduced timeline by 10% and led to early launch.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Delivered the SaaS solution to five clients, customizing
                  features, coordinating client calls, and ensuring timely
                  deployment.
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
                  Designed a technical architecture for multi-interface
                  inventory management system with Node.js using Node-Fetch, and
                  MySQL, featuring role-based access control, automated stock
                  updates, & analytics, reducing wastage by 36% across 10
                  centers.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Innovated smart work-pod solution Spotch with IoT integration
                  aligning with regulatory compliance user safety standards.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  Implemented the frontend using React, the backend with Java
                  and SpringBoot (managed via Maven), and implemented real-time
                  WebSocket notifications with Firebase. Furthermore, integrated
                  mobile software development with React Native.
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
                Designed a serverless architecture using AWS Lambda, achieving
                cost efficiency while reducing application latency by 30%.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                Optimized real-time state management with DynamoDB, cutting
                latency by 50% through efficient indexing and queries.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                Integrated Alexa Skills Kit, LLM with AWS Lambda for seamless
                voice commands, enhancing user interaction and feedback
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
