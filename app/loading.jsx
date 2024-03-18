"use client";
import { Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useTimeoutFn } from "react-use";

const Loading = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const [isShowing, setIsShowing] = useState(true);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(false), 500);

  useEffect(() => {
    resetIsShowing();
  }, []);

  return (
    <div className="md:container-xl md:mx-auto flex min-h-screen flex-col items-center justify-between p-2 pt-24 lg:px-24 bg-opacity-85 bg-white dark:bg-black text-black dark:text-white">
      <section className="d-block px-6 py-14 sm:py-18 lg:px-8">
        <div>
          <div className="flex flex-col items-center py-16">
            <div className="h-64 w-64">
              <Transition
                as={Fragment}
                show={isShowing}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-90"
                leaveTo="opacity-0"
              >
                <Image
                  src={
                    resolvedTheme === "dark"
                      ? "/images/logo/athrey-high-resolution-logo-white-transparent.png"
                      : "/images/logo/athrey-high-resolution-logo-black-transparent.png"
                  }
                  alt="logo"
                  width={720}
                  height={720}
                />
              </Transition>
            </div>
            <div className="mt-9 text-xl font-bold">Loading portfolio</div>
            <div className="loader flex item-center justify-center mt-8"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loading;
