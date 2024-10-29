import { Dialog, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();

  const [isShowing, setIsShowing] = useState(false);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 800);

  const [isEffect, setIsEffect] = useState(false);
  const [, , resetIsEffect] = useTimeoutFn(() => setIsEffect(true), 800);

  const textLines = [
    "Crafting Code!",
    "Exploring Worlds!",
    "Cooking Creations!",
    "Grooving to the Beat!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loopType, setLoopType] = useState("individual");

  useEffect(() => {
    resetIsShowing();
  }, []);

  useEffect(() => {
    resetIsEffect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < textLines.length - 1 && loopType === "individual") {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (currentIndex === textLines.length - 1) {
        setLoopType("individual");
        setCurrentIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, loopType, textLines]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 sm:gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-2">
            <Transition
              as={Fragment}
              show={isEffect}
              enter="transition ease-in-out duration-1000 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-1000 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="flex justify-center pl-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-lg sm:text-xl py-4 sm:pt-8 lg:text-base xl:text-lg font-semibold leading-6 text-indigo-600">
                    Hello there!
                  </h2>
                  <div className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    It's Byndoor Athrey Navda
                  </div>

                  <div className="my-12">
                    {loopType === "individual" && (
                      <div className="text-base sm:text-lg lg:text-xl leading-6 font-bold text-gray-600 dark:text-white">
                        {textLines[currentIndex]}
                      </div>
                    )}
                  </div>

                  <div className="mt-14 text-base sm:text-lg lg:text-xl leading-6 text-gray-600 dark:text-white">
                    Experienced Full stack / Software Engineer.
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl leading-6 text-gray-600 dark:text-white">
                    MS in Computer Science at George Mason University.
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl leading-6 text-gray-600 dark:text-white">
                    Graduating Dec '24.{" "}
                  </div>
                  <div
                    onClick={openModal}
                    className="text-indigo-600 cursor-pointer hover:text-indigo-800 my-2"
                  >
                    Click to see short introduction
                  </div>
                  <div>
                    <div className="sm:flex mt-4 sm:justify-between sm:mt-10">
                      <Link
                        href="mailto:bnavda@gmu.edu"
                        target="_blank"
                        className="hover:text-gray-900 dark:hover:text-sky-300 mx-3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>

                        <span className="sr-only">Mail</span>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/in/byndoor-athrey-navda-5068a0130/"
                        target="_blank"
                        className="mx-3 hover:text-gray-900 dark:hover:text-sky-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                        <span className="sr-only">Linkedin</span>
                      </Link>

                      <Link
                        href="https://github.com/athrey-navda"
                        target="_blank"
                        className="mx-3 hover:text-gray-900 dark:hover:text-sky-300"
                      >
                        <svg
                          width="30"
                          height="30"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">GitHub account</span>
                      </Link>

                      <Link
                        href="https://my-blog-brown-zeta.vercel.app/"
                        target="_blank"
                        className="mx-3 hover:text-gray-900 dark:hover:text-sky-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                          />
                        </svg>

                        <span className="sr-only">Blog</span>
                      </Link>
                      <Link
                        href="https://leetcode.com/u/athrey-navda/"
                        target="_blank"
                        className="mx-3 hover:text-gray-900 dark:hover:text-sky-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                          />
                        </svg>

                        <span className="sr-only">LeetCode</span>
                      </Link>
                      <div className="mx-3">
                        <Link
                          href="/file/Resume_ByndoorAthreyNavda.pdf"
                          target="_blank"
                        >
                          <button
                            className={
                              resolvedTheme === "dark"
                                ? `white-btn rounded-lg px-2 hover:bg-transparent hover:text-white`
                                : `black-btn rounded-lg px-2 hover:bg-transparent hover:text-black`
                            }
                          >
                            Resume
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Modal Code */}
                  <Transition appear show={isModalOpen} as={Fragment}>
                    <Dialog as="div" className="relative" onClose={closeModal}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-black dark:bg-white p-6 text-left align-middle shadow-xl transition-all">
                              <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="mt-24">
                                  <div className="flex justify-end">
                                    <button onClick={closeModal}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="grey"
                                        className="size-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M6 18 18 6M6 6l12 12"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                  <div className="text-xl font-bold text-white dark:text-black">
                                    A little brief about me
                                  </div>
                                </div>

                                <div className="my-0 sm:my-2">
                                  <div className="text-md text-white dark:text-black text-justify">
                                    As a results-driven software engineer with
                                    four years of experience, I specialize in
                                    full-stack development and cloud-based
                                    solutions. With a robust foundation in both
                                    frontend and backend technologies, I have
                                    successfully designed, developed, and
                                    deployed scalable applications that address
                                    complex business challenges.
                                  </div>
                                  <div className="text-md text-white dark:text-black my-2 text-justify">
                                    My technical expertise spans modern
                                    frameworks such as React, Next.js, and
                                    Angular on the frontend, and Node.js,
                                    Express.js, and Python for backend
                                    architecture. I also excel in cloud
                                    integration with AWS, GCP, Docker, and
                                    Kubernetes. I have hands-on experience in
                                    crafting SaaS platforms, implementing CI/CD
                                    pipelines, and building secure
                                    authentication systems using JWT and OAuth.
                                  </div>
                                  <div className="text-md text-white dark:text-black my-2 text-justify">
                                    Currently pursuing a Master's in Computer
                                    Science at George Mason University, I am
                                    deepening my knowledge in data structures,
                                    algorithms, and software project management.
                                    I leverage my industry experience to lead
                                    impactful projects and drive innovation.
                                  </div>
                                  <div className="text-md text-white dark:text-black my-2 text-justify">
                                    I thrive in fast-paced environments and I am
                                    passionate about contributing to the
                                    development of solutions from the ground up.
                                    If you're looking for a collaborative team
                                    player who enjoys solving challenging
                                    problems and delivering real value through
                                    technology, let's connect!
                                  </div>
                                </div>

                                <div className="my-4">
                                  <button
                                    className={
                                      resolvedTheme === "dark"
                                        ? `black-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-black`
                                        : `white-btn rounded-lg px-2 mt-2 hover:bg-transparent hover:text-white`
                                    }
                                    onClick={closeModal}
                                  >
                                    {" "}
                                    Close
                                  </button>
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
              </div>
            </Transition>
          </div>
          <div className="flex justify-center mx-8">
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transform transition duration-[1000ms]"
              enterFrom="opacity-0 rotate-[-180deg] scale-50"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-1000 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <div className="flex justify-center items-center mt-8">
                <img
                  src="/images/homepage/herosectionImage.jpg"
                  alt="ProfilePic"
                  className="w-full object-cover object-center rounded-full shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
}
