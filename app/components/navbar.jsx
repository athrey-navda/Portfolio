"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  // { name: "About me", id: "about-me" },
  // { name: "Contact me", id: "contact-me" },
  { name: "Fun-Game", id: "fun" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <header className="sticky top-0 z-50 bg-white dark:bg-black">
        <nav
          className="flex items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Athrey</span>
              {!mobileMenuOpen ? (
                <img
                  className="h-auto w-28"
                  src={
                    resolvedTheme === "dark"
                      ? "/images/logo/athrey-high-resolution-logo-white-transparent.png"
                      : "/images/logo/athrey-high-resolution-logo-black-transparent.png"
                  }
                  alt=""
                />
              ) : (
                ""
              )}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              key="home"
              href="./"
              className="text-md font-semibold leading-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={
                  window.location.pathname === "/"
                    ? `#${item.id}`
                    : `/${item.id}`
                }
                onClick={(e) => {
                  if (window.location.pathname !== "/") {
                    e.preventDefault();
                    window.location.href = `/${item.id}`;
                  }
                }}
                className="text-md font-semibold leading-6"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6">
              {resolvedTheme === "dark" ? (
                <button>
                  <SunIcon
                    width={30}
                    height={25}
                    className="text-white"
                    onClick={() => setTheme("light")}
                  />
                </button>
              ) : (
                <button>
                  <MoonIcon
                    width={30}
                    height={25}
                    className="text-black"
                    onClick={() => setTheme("dark")}
                  />
                </button>
              )}
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 text-black dark:text-white bg-white dark:bg-black">
            <div className="flex items-center justify-between">
              <a href="./" className="-m-1.5 p-1.5">
                <span className="sr-only">Athrey</span>
                <img
                  className="h-auto w-28"
                  src={
                    resolvedTheme === "dark"
                      ? "/images/logo/athrey-high-resolution-logo-white-transparent.png"
                      : "/images/logo/athrey-high-resolution-logo-black-transparent.png"
                  }
                  alt=""
                />
              </a>

              {resolvedTheme === "dark" ? (
                <button className="-m-2.5 rounded-md p-2.5">
                  <SunIcon
                    className="h-6 w-6 text-white "
                    onClick={() => setTheme("light")}
                  />
                </button>
              ) : (
                <button className="-m-2.5 rounded-md p-2.5">
                  <MoonIcon
                    className="h-6 w-6 text-black"
                    onClick={() => setTheme("dark")}
                  />
                </button>
              )}

              <button
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    key="home"
                    href="./"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={
                        window.location.pathname === "/"
                          ? `#${item.id}`
                          : `/${item.id}`
                      }
                      onClick={(e) => {
                        if (window.location.pathname !== "/") {
                          e.preventDefault();
                          window.location.href = `/${item.id}`;
                        }
                        setMobileMenuOpen(false);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
