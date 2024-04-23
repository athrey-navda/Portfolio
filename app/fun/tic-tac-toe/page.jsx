import BreadCrumbs from "../../components/breadCrumbs";

import Tictactoe from "./ticTacToe";

const breadcrumbItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "fun", label: "Fun", href: "/fun" },
  { key: "tic-tac-toe", label: "Tic Tac Toe", href: "/fun/tic-tac-toe" },
  {
    key: "snake-and-ladder",
    label: "Snake and Ladder",
    href: "/fun/snake-and-ladder",
  },
];
export default function AboutMe() {
  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <section className="d-block px-6 sm:py-4 lg:px-24 min-h-screen">
        <div className="p-2 mt-24">
          <BreadCrumbs items={breadcrumbItems} />
        </div>
        <Tictactoe />
      </section>
    </div>
  );
}
