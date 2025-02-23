import InvestmentCard from "./InvestmentCard";

export default function Investment() {
  return (
    <>
      <div className="bg-slate-50 px-8 md:px-16 lg:px-48 py-16">
        <h2 className="font-bold text-slate-600 text-2xl md:text-3xl lg:text-4xl text-center">
          Offerings open for investment
        </h2>
        <p className="mt-4 text-slate-500 text-sm md:text-base lg:text-lg text-center">
          Explore pre-vetted investment opportunities available in a growing
          number of industry categories.
        </p>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          <InvestmentCard />
          <InvestmentCard />
          <InvestmentCard />
        </div>
      </div>
    </>
  );
}
