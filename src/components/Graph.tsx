export default function Graph() {
  return (
    <>
      <div className="relative flex justify-center items-center gap-8 bg-[#ECF4FD] px-8 md:px-16 lg:px-48 py-24">
        <div className="z-10 space-y-8 md:w-1/2">
          <img src="/images/subtract.png" alt="icon" className="w-12" />
          <h2 className="font-semibold text-slate-800 text-2xl md:text-3xl lg:text-4xl text-wrap">
            $7M+ paid out to investors
          </h2>
          <p className="text-slate-500 text-base">
            Next Invest has already paid out over $7M in cash returns to
            investors. Earn potential cash payments through unique revenue-share
            and debt financing investments.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/chart.png"
            alt="graph"
            className="w-full object-cover"
          />
        </div>
        <img
          src="/images/vector.png"
          alt="vector"
          className="bottom-0 left-0 absolute h-96"
        />
        <img
          src="/images/half-circle.png"
          alt="vector"
          className="top-0 right-16 absolute h-16"
        />
      </div>
    </>
  );
}
