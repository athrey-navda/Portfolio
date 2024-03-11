import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const projects = [
  {
    id: 1,
    name: "Rapid Cloudify",
    href: "http://rapidcloudify.com",
    imageSrc: "/images/homepage/rapidcloudify.png",
    imageAlt: "Rapid Cloudify",
    stack: "React, React-Bootstrap, Formik, Yup, Python, Ansible, AWS EC2",
    description:
      "Automated AWS deployment for ReactJS, Node.js, and Python apps",
  },
  {
    id: 2,
    name: "My Portfolio",
    href: "https://portfolio-rho-swart.vercel.app/",
    imageSrc: "/images/logo/athrey-high-resolution-logo-white.png",
    imageAlt: "Rapid Cloudify",
    stack: "React with Nextjs (App Router), Tailwind CSS",
    description: "An introductory site to my profile",
  },
  {
    id: 3,
    name: "Universal Booking System",
    href: "https://book.clayworks.space",
    imageSrc:
      "https://clayworks.space/assets/website/property/clayworks-cbd/Clayworks-cbd-hot-seats.jpg",
    imageAlt: "Booking System",
    stack:
      "React - Next.js(pageRouter), Node.js, ExpressJS, MySQL, Tailwind CSS, JWT and OAuth",
    description: "Booking System for different booking types",
  },
  {
    id: 4,
    name: "Inventory Management System",
    href: "https://ims.clayworks.co",
    imageSrc: "/images/homepage/ims.jpg",
    imageAlt: "IMS",
    stack: "Node, Express.js, MySQL, HTML, JS, Bootstrap CSS",
    description:
      "Inventory Management Application to manage inventory within co-working spaces",
  },
  {
    id: 5,
    name: "ClayWorks",
    href: "https://clayworks.space",
    imageSrc: "https://clayworks.space/assets/website/fbm/build-1.jpg",
    imageAlt: "ClayWorks",
    stack: "JS, HTML, Bootstrap",
    description: "ClayWorks Company Website",
  },
  {
    id: 6,
    name: "Spotch",
    href: "https://spotch.works",
    imageSrc: "https://spotch.works/assets/website/spotch/S3/S3-1.webp",
    imageAlt: "Spotch",
    stack: "JS, HTML, Bootstrap",
    description: "Spotch Company Website",
  },
];

export default function ProjectsComponent() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <h2 className="text-3xl font-bold py-12 sm:text-4xl">Projects</h2>
      <div className="mx-auto max-w-2xl items-center gap-x-8 gap-y-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 py-4 bg-gray-400 dark:bg-gray-900">
        <div className="md:container md:mx-auto flex min-h-screen flex-col items-center justify-between">
          <section className="d-block px-4 py-8 sm:px-6 sm:py-6 lg:px-4">
            <div className="mx-auto max-w-2xl lg:max-w-7xl ">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {projects.map((product) => (
                  <div
                    key={product.id}
                    className="group relative group-hover:opacity-75 hover:p-2"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none p-2 lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <div>
                        <h3 className="text-xl my-2">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="text-md font-bold">{product.stack}</div>
                    <div className="font-light ">{product.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="flex justify-center">
            <Link href="/projects">
              <div
                className={
                  resolvedTheme === "dark"
                    ? `white-btn inline-flex items-center rounded-lg px-8 py-4 hover:bg-transparent hover:text-white`
                    : `black-btn inline-flex items-center rounded-lg px-8 py-4 hover:bg-transparent hover:text-black`
                }
              >
                More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
