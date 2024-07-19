import BreadCrumbs from "../components/breadCrumbs";
import FunComponent from "./fun";

const breadcrumbItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "fun", label: "Fun", href: "/fun" },
];
export default function Fun() {
  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container md:mx-auto flex min-h-screen flex-col items-center justify-between">
        <section className="d-block px-6 py-8 sm:py-4 lg:px-8">
          <div className="p-2 mt-24">
            <BreadCrumbs items={breadcrumbItems} />
            <FunComponent />
          </div>
        </section>
      </div>
    </div>
  );
}
