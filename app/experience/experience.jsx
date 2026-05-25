import { Linden_Hill } from "next/font/google";
import Link from "next/link";

export default function ExperienceComponent() {
  return (
    <div>
      <h2 className="text-3xl font-bold py-8 sm:text-4xl">Experience</h2>
      <div className="overflow-hidden py-4 sm:py-4 bg-slate-200 dark:bg-zinc-800 mt-3">
        <div className="mx-auto px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-48"
                src="/images/homepage/goldman_sachs_logo.png"
                alt="goldman_sachs_logo"
              />
            </div>
            <h2 className="text-base font-semibold leading-7 mt-4">
              Goldman Sachs Services LLC - Dallas, United States
            </h2>
          </div>
          <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Associate in Engineering Division
            </p>
            <div className="mt-2">
              <div className="inline font-semibold">Jul 2025 - present</div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>High-Scale Middleware Systems:</strong> Built backend
                features for high-scale middleware systems, implementing proxy,
                routing, and API rate-limiting improvements to handle massive
                traffic loads efficiently.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>Data Migration & Audit Readiness:</strong> Developed
                services for log-file-based data migration to central servers,
                improving data consistency and ensuring comprehensive audit
                readiness for regulatory compliance.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>API Enhancement & Regulatory Compliance:</strong>{" "}
                Enhanced internal APIs to resolve item-discovery issues, apply
                regulatory updates, and correct mis-flagged inventory, ensuring
                accurate data representation and compliance.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>Database Integration Optimization:</strong> Improved
                database-integration workflows for internal applications,
                optimizing data access patterns and backend performance for
                reduced latency and improved throughput.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>Load Balancing Architecture:</strong> Engineered a
                reverse proxy load balancer, migrating from round-robin to a
                least-connection algorithm, improving server availability by 60%
                and ensuring optimal resource utilization.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>Frontend Modernization:</strong> Supporting frontend
                modernization efforts while transitioning into UI development
                responsibilities, bridging backend expertise with frontend
                development to deliver comprehensive solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
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
            {" - United States"}
          </h2>
          <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Software Developer
            </p>
            <div className="mt-2">
              <div className="inline font-semibold">Aug 2024 - July 2025</div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>Full-Stack CRM Development:</strong> Spearheading the
                full stack development of a platform services (CRM) using React,
                TypeScript, and Python for 1,000+ users, delivering a robust and
                scalable solution.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>Backend Architecture:</strong> Architected backend
                services with Flask and PostgreSQL, improving API response times
                by 25% through optimized queries and efficient data modeling.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>Advanced Search Integration:</strong> Leveraging
                KeyBERT, spaCy, Elasticsearch & Redis to deliver better search
                functionalities with less latency, enhancing user experience and
                data retrieval accuracy.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>Real-Time Messaging:</strong> Implemented Kafka-based
                real-time messaging for seamless user interactions and
                notifications, enabling instant communication and updates.
              </div>
              <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                <strong>Performance Optimization:</strong> Optimized frontend
                performance using Webpack, CDN & advanced image optimization
                techniques, reducing load time by 35% for improved user
                engagement.
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
                <div className="inline font-semibold">Jun 2022 - Jan 2023</div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  At ClayWorks, I played a pivotal role in developing a
                  scalable, secure SaaS-based booking system with a four-tier
                  user interface, ensuring seamless functionality and an
                  intuitive experience for users. My contributions spanned
                  frontend architecture, API integrations, performance
                  optimizations, automation testing, and CI/CD implementation,
                  significantly enhancing system efficiency and user engagement.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  <strong>
                    Full-Stack Development & Scalable Architecture :
                  </strong>{" "}
                  Engineered a secure, scalable SaaS solution by designing and
                  implementing optimized algorithms for a "Book Anything"
                  system. Led the frontend development using React, Next.js,
                  TypeScript, ES6+, Tailwind, and Chart.js, ensuring a modern,
                  responsive UI.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  <strong>State Management & API Integration :</strong>
                  Developed robust state management and API integration
                  solutions using Redux, Redux-thunk, Axios, Python (Flask), and
                  MySQL with ORM, boosting application responsiveness by 40%.
                  Efficiently handled asynchronous actions, middleware
                  integrations, and WebSockets for real-time data updates.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  <strong>Automation Testing & Code Quality :</strong>
                  Ensured high code quality by implementing Test-Driven
                  Development (TDD) with Cypress and Mocha for automation
                  testing and Postman for API validation. This streamlined the
                  testing process, reducing bugs and enhancing system
                  reliability.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  <strong>CI/CD & Performance Optimization :</strong>
                  Established CI/CD pipelines using Jenkins, reducing manual
                  deployment efforts by 60%. Optimized application performance
                  by implementing code splitting, lazy loading, memoization,
                  debouncing, and caching, leading to a 30% reduction in load
                  times. Debugged and monitored performance using Chrome
                  DevTools and DataDog.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  <strong>Cross-Team Collaboration & Agile Leadership:</strong>
                  Worked closely with UX, sales, and marketing teams via
                  Confluence, refining product features that resulted in a 25%
                  revenue increase. Led Scrum meetings, mentored junior
                  developers, and conducted rigorous code reviews, accelerating
                  project timelines by 10% and enabling an early product launch.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  This experience underscores my expertise in building scalable
                  SaaS platforms, optimizing application performance,
                  implementing automation, and leading cross-functional teams to
                  drive product success.
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-8 text-base leading-7 lg:max-w-none">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Software Engineer
              </p>
              <div className="mt-2">
                <div className="inline font-semibold">Sep 2019 - Jun 2022</div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  During my tenure at ClayWorks, I played a key role in
                  designing scalable software architectures, integrating IoT
                  solutions, and developing full-stack applications that
                  enhanced operational efficiency and user experience. I worked
                  across multiple projects, implementing best practices in
                  software design, system integration, and agile development
                  while ensuring regulatory compliance and performance
                  optimization.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  <strong>
                    Inventory Management System – Scalable Architecture &
                    Analytics:
                  </strong>
                  Designed and developed a multi-interface inventory management
                  system using React, Node.js, GraphQL, and MySQL, incorporating
                  role-based access control, automated stock updates, and
                  analytics dashboards. This system reduced material wastage by
                  36% across 10 centers by streamlining inventory tracking and
                  reporting.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  <strong>
                    Smart Work-Pod Solution – IoT & Compliance Integration:
                  </strong>
                  Spearheaded the development of Spotch, an innovative
                  IoT-integrated smart work-pod solution, ensuring compliance
                  with regulatory safety standards. This solution enabled
                  real-time monitoring, space optimization, and seamless user
                  experiences.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  <strong>Full-Stack Development & System Integration:</strong>
                  Led the end-to-end software development life cycle (SDLC)
                  using Jira, adhering to MVC architectural patterns from system
                  design to deployment. Developed the frontend using React &
                  Material-UI and the backend using Java SpringBoot, integrating
                  real-time WebSocket notifications via Firebase. Additionally,
                  extended mobile accessibility by implementing a React Native
                  application.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  <strong>
                    Legacy System Modernization & Cross-Platform Compatibility:
                  </strong>
                  Led the end-to-end software development life cycle (SDLC)
                  using Jira, adhering to MVC architectural patterns from system
                  design to deployment. Developed the frontend using React &
                  Material-UI and the backend using Java SpringBoot, integrating
                  real-time WebSocket notifications via Firebase. Additionally,
                  extended mobile accessibility by implementing a React Native
                  application.
                </div>
                <div className="text-md mt-2 hover:font-bold hover:p-1 hover:dark:bg-gray-300 hover:dark:text-black hover:bg-gray-400 hover:text-black rounded-lg">
                  This experience highlights my expertise in full-stack
                  development, IoT-driven solutions, system architecture, and
                  agile project execution, ensuring optimized workflows,
                  enhanced system efficiency, and scalable software solutions.
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
