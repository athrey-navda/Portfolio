import BreadCrumbs from "@/app/components/breadCrumbs";
import SnakesAndLaddersRedux from "./snakeAndLadder-redux";

const breadcrumbItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "fun", label: "Fun", href: "/fun" },

  {
    key: "snake-and-ladder-redux",
    label: "Snake and Ladder with Redux",
    href: "/fun/snake-and-ladder-redux",
  },
];
export default function SnakeandLadderReduxHome() {
  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <section className="d-block px-6 sm:py-4 lg:px-24 min-h-screen">
        <div className="p-2 mt-24">
          <BreadCrumbs items={breadcrumbItems} />
        </div>
        <SnakesAndLaddersRedux />
      </section>
    </div>
  );
}
