"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const games = [
  {
    id: 1,
    name: "Tic Tac Toe",
    href: "/fun/tic-tac-toe/",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/400px-Tic_tac_toe.svg.png",
    imageAlt: "Tic Tac Toe",
    description:
      "Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns" +
      "marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
  },
  {
    id: 2,
    name: "Coming Soon",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/CD_ComingSoon.svg/1772px-CD_ComingSoon.svg.png",
    imageAlt: "Coming Soon",
    description: "#",
  },
];
export default function Fun() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold py-14 lg:py-6 sm:text-4xl">
        Games developed by me
      </h2>
      <div className="text-black dark:text-white bg-white dark:bg-black">
        <div className="md:container-xl md:mx-auto flex min-h-screen flex-col items-center justify-between p-2 pt-20 lg:pt-4 lg:px-24">
          <div className="mx-auto max-w-2xl lg:max-w-7xl ">
            <div className="mt-6 my-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-18">
              {games.map((game) => (
                <div key={game.id}>
                  <div
                    className={`group relative group-hover:opacity-75 hover:p-2 rounded-lg ${
                      resolvedTheme === "dark"
                        ? `hover:bg-slate-300 hover:text-black`
                        : `hover:bg-slate-900 hover:text-white`
                    }`}
                    style={{
                      height: "40rem",
                      width: "20rem",
                      overflow: "hidden",
                    }}
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none p-2 py-2 lg:h-80">
                      <img
                        src={game.imageSrc}
                        alt={game.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <div>
                        <h3 className="text-xl my-2">{game.name}</h3>
                      </div>
                    </div>
                    <div className="text-md font-bold">{game.stack}</div>
                    <div className="font-light ">{game.description}</div>
                  </div>
                  <div className="mt-3 flex justify-center">
                    <Link href={game.href}>
                      <button
                        className={
                          resolvedTheme === "dark"
                            ? `white-btn rounded-lg px-2 hover:bg-transparent hover:text-white`
                            : `black-btn rounded-lg px-2 hover:bg-transparent hover:text-black`
                        }
                      >
                        Play
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
