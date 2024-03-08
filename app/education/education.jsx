import Link from "next/link";

const gmu = [
  { name: "Majors", description: "MS in Computer Science" },
  {
    name: "Coursework",
    description:
      "Analysis of Algorithms, User Interface and Experience (UI-UX) Development , Information Security Theory, Software Testing, Software Project Management.",
  },
  { name: "Duration", description: "Jan 2023 to Dec 2024" },
  { name: "GPA", description: "3.89/4.0" },
];
const vtu = [
  { name: "Majors", description: "BE in Information Science" },
  {
    name: "Coursework",
    description:
      "Software Engineering, DSA, OOPC, Web Development, Cryptography Network Security,Software Testing, DBMS, Computer Network",
  },
  { name: "Duration", description: "Aug 2015 to July 2019" },
  { name: "GPA", description: "3.0/4.0" },
];

export default function EducationComponent() {
  return (
    <Link href="./education">
      <h2 className="text-3xl font-bold py-12 sm:text-4xl">Education</h2>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 bg-stone-300 dark:bg-stone-700 mt-3 py-4">
        <div>
          <h3 className="font-semibold">
            George Mason University - Fairfax, Viginia, United States
          </h3>
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
          <div
            className="rounded-lg overflow-hidden"
            style={{ height: "30rem", overflow: "hidden" }}
          >
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
          <div
            className="rounded-lg overflow-hidden"
            style={{ height: "30rem", overflow: "hidden" }}
          >
            <img
              src="/images/homepage/vtu.jpeg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">
            Visveswaraya Technological University - Kalburgi, Karnataka, India
          </h3>
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
  );
}
