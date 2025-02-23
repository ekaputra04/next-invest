import { Button } from "./ui/button";

export default function Apply() {
  return (
    <>
      <div className="relative flex md:flex-row flex-col-reverse justify-center items-center gap-32 px-8 md:px-16 lg:px-48 py-24">
        <div className="space-y-8 md:w-1/2">
          <h2 className="font-semibold text-slate-800 text-2xl md:text-3xl lg:text-4xl">
            Looking to raise capital for your growing business?
          </h2>
          <p className="text-slate-500 text-base">
            Whether expanding or opening a brand-new concept, we make it easy to
            raise money from thousands of local investors.
          </p>
          <Button className="bg-green-700 hover:bg-green-800 px-10 py-6 rounded-none text-white uppercase">
            Apply Online
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/investing.png"
            alt="image"
            className="w-full object-cover"
          />
        </div>{" "}
        <img
          src="/images/shape-1.png"
          alt="decorator"
          className="top-32 left-8 -z-10 absolute w-64 rotate-30"
        />
      </div>
    </>
  );
}
