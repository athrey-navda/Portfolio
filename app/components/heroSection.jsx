export default function HeroSection() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 sm:gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg sm:text-xl lg:text-base xl:text-lg font-semibold leading-6 text-indigo-600">Hello there!</h2>
              <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">It's Byndoor Athrey Navda</p>
              <p className="mt-4 text-base sm:text-lg lg:text-xl leading-6 text-gray-600 dark:text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/homepage/herosectionImage.jpg"
              alt="ProfilePic"
              className="w-full max-w-sm md:max-w-none rounded-full shadow-xl ring-1 ring-gray-400/10"
              width={400}
              height={400}
            />    
          </div>
        </div>
      </div>
    </div>
  );
}
