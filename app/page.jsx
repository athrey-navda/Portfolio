'use client'
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
export default function Home() {
  return (
  <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container md:mx-auto flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
        <section className="d-block px-6 py-18 sm:py-12 lg:px-8" >
          <HeroSection />
        </section>
        <section className="d-block px-6 py-8 sm:py-4 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                  molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
          </div>
        </section>
      </div>
  </div>
   
  );
}
