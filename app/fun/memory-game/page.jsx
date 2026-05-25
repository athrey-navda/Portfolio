import BreadCrumbs from "../../components/breadCrumbs";
import MemoryGame from "./memoryGame";

const breadcrumbItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "fun", label: "Fun", href: "/fun" },
  { key: "memory-game", label: "Memory Game", href: "/fun/memory-game" },
];

export default function MemoryGameHome() {
  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <section className="d-block px-6 sm:py-4 lg:px-24 min-h-screen">
        <div className="p-2 mt-24">
          <BreadCrumbs items={breadcrumbItems} />
        </div>
        <MemoryGame />
      </section>
    </div>
  );
}
