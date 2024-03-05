'use client'
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
export default function Home() {
  return (
  <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container md:mx-auto flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
        <HeroSection /> 
      </div>
  </div>
   
  );
}
