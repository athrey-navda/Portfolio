'use client'
import Link from "next/link";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";

const gmu = [
  { name: 'Majors', description: 'MS in Computer Science' },
  { name: 'Coursework', description: 'Analysis of Algorithms, User Interface and Experience (UI-UX) Development , Information Security Theory, Software Testing, Software Project Management.' },
  { name: 'Duration', description: 'Jan 2023 to Dec 2024' },
  { name: 'GPA', description: '3.89/4.0' },
  ]
const vtu = [
  { name: 'Majors', description: 'BE in Information Science' },
  { name: 'Coursework', description: 'Software Engineering, DSA, OOPC, Web Development, Cryptography Network Security,Software Testing, DBMS, Computer Network' },
  { name: 'Duration', description: 'Aug 2015 to July 2019' },
  { name: 'GPA', description: '3.0/4.0' },
 ]

export default function Home() {
  return (
  <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container md:mx-auto flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
        <section className="d-block px-6 py-14 sm:py-18 lg:px-8" >
          <HeroSection />
        </section>
        <section className="d-block px-6 py-6 sm:py-4 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                  molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
          </div>
        </section>
        
      
        <section className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <Link href="./education">
            <h2 className="text-3xl font-bold py-12 sm:text-4xl">Education</h2>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 bg-stone-300 dark:bg-stone-700 mt-3 py-4">
              <div>
                <h3 className="font-semibold">George Mason University - Fairfax, Viginia, United States</h3>
                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
                  {gmu.map((gmu) => (
                    <div key={gmu.name} className="border-t border-gray-200 pt-4">
                      <dt className="font-medium">{gmu.name}</dt>
                      <dd className="mt-2 text-sm">{gmu.description}</dd>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                <div className="rounded-lg overflow-hidden" style={{ height: "30rem", overflow: "hidden" }}>
                  <img
                    src="https://cec.gmu.edu/sites/g/files/yyqcgq471/files/styles/large/public/2022-08/Generic-thumnbail-image.jpg"
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 bg-stone-300 dark:bg-stone-700 mt-3 py-4">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                <div className="rounded-lg overflow-hidden" style={{ height: "30rem", overflow: "hidden" }}>
                  <img
                    src="/images/homepage/vtu.jpeg"
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Visveswaraya Technological University - Kalburgi, Karnataka, India</h3>
                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
                  {vtu.map((vtu) => (
                    <div key={vtu.name} className="border-t border-gray-200 pt-4">
                      <dt className="font-medium">{vtu.name}</dt>
                      <dd className="mt-2 text-sm">{vtu.description}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </section>
       
        <section className="d-block px-6 py-8 sm:py-8 lg:px-8">
          <Link href="./experience">
            <h2 className="text-3xl font-bold py-8 sm:text-4xl">Experience</h2>
            <div className="overflow-hidden py-4 sm:py-4 bg-slate-400 dark:bg-slate-800 mt-3">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <h2 className="text-base font-semibold leading-7">ClayWorks Spaces Technologies Private Limited - Bengaluru - India</h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Software Engineer II</p>
                      <p className="mt-6 text-lg leading-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                        iste dolor cupiditate blanditiis ratione.
                      </p>
                      <div className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                          <div className="relative pl-9">
                            <div className="inline font-semibold">
                              Content here
                            </div>{' '}
                            <dd className="inline">Content here</dd>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/images/homepage/clayworks.jpg"
                      alt="Product screenshot"
                      className="w-[38rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[38rem] md:-ml-4 lg:-ml-0"
                      width={2432}
                      height={1442}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="overflow-hidden py-4 sm:py-4 bg-slate-400 dark:bg-slate-800 mt-3">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <h2 className="text-base font-semibold leading-7">The Valley Bootcamp, Bengaluru India</h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Software Engineering Intern</p>
                      <p className="mt-6 text-lg leading-8">
                        Led the design and development of a Home Automation project using Machine Learning and Alexa Skillset.
                      </p>
                      <div className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                          <div className="relative pl-9">
                            <div className="inline font-semibold">
                           Content here
                            </div>{' '}
                            <dd className="inline">Content here</dd>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/images/homepage/vbc.jpg"
                      alt="Product screenshot"
                      className="w-[38rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[38rem] md:-ml-4 lg:-ml-0"
                      width={2432}
                      height={1442}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </Link>
        </section>

      </div>
  </div>
   
  );
}
