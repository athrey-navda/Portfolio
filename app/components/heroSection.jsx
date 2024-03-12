"use client";
import { Fragment, useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const { setTheme, resolvedTheme } = useTheme();

  const [isShowing, setIsShowing] = useState(false);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 800);

  useEffect(() => {
    resetIsShowing();
  }, []);

  const [isEffect, setIsEffect] = useState(false);
  const [, , resetIsEffect] = useTimeoutFn(() => setIsEffect(true), 800);

  useEffect(() => {
    resetIsEffect();
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl mt-18">
        <div className="mx-auto grid max-w-2xl grid-cols-1 sm:gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <Transition
              as={Fragment}
              show={isEffect}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="flex justify-center">
                <div className="lg:max-w-lg">
                  <h2 className="text-lg sm:text-xl py-4 sm:pt-8 lg:text-base xl:text-lg font-semibold leading-6 text-indigo-600">
                    Hello there!
                  </h2>
                  <div className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    It's Byndoor Athrey Navda
                  </div>

                  <div className="mt-14 text-base sm:text-lg lg:text-xl leading-6 font-bold text-gray-600 dark:text-white">
                    Crafting Code
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl leading-6 font-bold text-gray-600 dark:text-white">
                    Exploring Worlds
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl leading-6 font-bold text-gray-600 dark:text-white">
                    Cooking Creations
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl leading-6 font-bold text-gray-600 dark:text-white">
                    Grooving to the Beat!
                  </div>

                  <div className="mt-14 text-base sm:text-lg lg:text-xl leading-6 text-gray-600 dark:text-white">
                    Experienced Software Engineer.
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl leading-6 text-gray-600 dark:text-white">
                    MS in Computer Science at George Mason University.
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl leading-6 text-gray-600 dark:text-white">
                    Graduating Dec '24.
                  </div>
                  <div>
                    <div className="flex mt-4 sm:justify-between sm:mt-10">
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
                        href="https://www.instagram.com/b_athrey_navda/?igsh=MnZmcHNnaWRmZzY1"
                        target="_blank"
                        className="mx-3 hover:text-gray-900 dark:hover:text-sky-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>

                        <span className="sr-only">Instagram</span>
                      </Link>
                      <div className="mx-3">
                        <Link
                          href="/file/ByndoorAthreyNavda_Resume.pdf"
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
                </div>
              </div>
            </Transition>
          </div>
          <div className="flex justify-center mb-8">
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transform transition duration-[600ms]"
              enterFrom="opacity-0 rotate-[-180deg] scale-50"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <div className="flex justify-center">
                <img
                  src="/images/homepage/herosectionImage.jpg"
                  alt="ProfilePic"
                  className="w-full max-w-sm md:max-w-none rounded-full shadow-xl ring-1 ring-gray-400/10"
                  width={350}
                  height={350}
                />
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
}
