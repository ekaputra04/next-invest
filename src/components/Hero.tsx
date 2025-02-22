import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>
      <div className="relative flex justify-start items-center h-screen">
        <div className="space-y-6 px-8 md:px-16 lg:px-32 lg:w-2/3">
          <h2 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl">
            Meaningful investments in Main Street businesses
          </h2>
          <p className="text-white text-base md:text-lg lg:text-xl">
            Browse vetted investment offerings in communities all over the US.
          </p>
          <Button className="bg-green-700 hover:bg-green-800 rounded-none text-white">
            Get Started
          </Button>
        </div>
        <img
          src="/images/hero.png"
          alt="hero"
          className="top-0 right-0 bottom-0 left-0 -z-20 absolute w-full"
        />
        <img
          src="/images/circle-blue.png"
          alt="circle"
          className="top-32 left-16 -z-10 absolute w-64"
        />
      </div>
    </>
  );
}
