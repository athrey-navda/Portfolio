import Link from "next/link";

export default function ExperienceComponent() {
  return (
    <Link href="./experience">
      <h2 className="text-3xl font-bold py-8 sm:text-4xl">Experience</h2>
      <div className="overflow-hidden py-4 sm:py-4 bg-amber-400 dark:bg-zinc-800 mt-3">
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
                <div className="text-sm mt-2">
                  Pioneered the design and implementation of the Universal
                  Booking System, Universal Booking System, leveraging React -
                  Next.js (pageRouter) with Tailwind CSS and other animation
                  effects for front-end used Headless UI, Tailwind Components
                  for UI coomponents
                </div>
                <div className="text-sm mt-2">
                  Back-end with Node.js, ExpressJS for API’s, MySQL to handle
                  database, JWT and OAuth technologies to create a secure
                  application with sophisticated user hierarchy with 4 levels
                  and credit management for booking.
                </div>
                <div className="text-sm mt-2">
                  Guided a cohesive team in the early stages of a startup,
                  fostering cross-functional collaboration for product
                  development aligned with business objectives.
                </div>
                <div className="text-sm mt-2">
                  Directed and facilitated scrum meetings for product life cycle
                  management, resulting in a 25% decrease in development
                  timelines and a 30% increase in product quality.
                </div>
                <div className="text-sm mt-2">
                  Embarked the journey as a novice software developer,
                  progressively evolving expertise and knowledge within the
                  startup ecosystem, ultimately achieving the role of a
                  market-fit software engineer in a span of four years.
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Software Engineer
              </p>
              <div className="mt-2">
                <div className="inline font-semibold">Sep 2019 - Jul 2022</div>
                <div className="text-sm mt-2">
                  Elevated operational efficiency as an entry-level engineer by
                  actively engaging in the development of a 3 to 4 applications,
                  showcasing a consistent commitment to continuous learning and
                  innovative solutions.
                </div>
                <div className="text-sm mt-2">
                  Spearheaded the creation of an Inventory management
                  application using Node, Express.js for back-end API’s with
                  MySQL, HTML, JS Bootstrap CSS for UI, resulting in a 20%
                  reduction in wastage in the company. This contribution
                  underscored my ability to address operational challenges
                  through technological solutions.
                </div>
                <div className="text-sm mt-2">
                  Drastically enhanced the company’s online presence by
                  developing website for ClayWorks and Spotch following Figma
                  designs, using HTML, Javacscript and Bootstrapp CSS which lead
                  to a substantial 30% increase in company’s online presence.
                </div>
                <div className="text-sm mt-2">
                  Directed and facilitated scrum meetings for product life cycle
                  management, resulting in a 25% decrease in development
                  timelines and a 30% increase in product quality.
                </div>
                <div className="text-sm mt-2">
                  Played a pivotal role in managing 3 legacy systems such as
                  MRBS, Space calculator, showcasing versatility and
                  adaptability during the early stages of my career.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-4 sm:py-4 bg-amber-400 dark:bg-zinc-800 mt-3">
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
              <div className="text-sm mt-2">
                Led the design and development of a Home Automation project
                using Machine Learning and Alexa Skillset.
              </div>
              <div className="text-sm mt-2">
                Implementation of voice command control in Alexa, leading to a
                30% increase in user engagement.
              </div>
              <div className="text-sm mt-2">
                Optimization of DynamoDB usage and customization of API calls,
                reducing system response time by 50% and enhancing user
                satisfaction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
