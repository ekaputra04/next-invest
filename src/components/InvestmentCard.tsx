import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";

export default function InvestmentCard() {
  return (
    <>
      <div className="group bg-white shadow-xl w-full transition-all">
        <div className="group-hover:hidden transition-all duration-200">
          <div className="relative">
            <img
              src="/images/oxalis-1.png"
              alt="image"
              className="w-full h-48 object-cover"
            />
            <div className="top-4 left-4 absolute flex flex-wrap justify-between gap-2">
              <Badge className="bg-slate-50 hover:bg-slate-100 opacity-50 rounded-none text-slate-800 text-opacity-100 uppercase">
                House
              </Badge>
              <Badge className="bg-slate-50 hover:bg-slate-100 opacity-50 rounded-none text-slate-800 text-opacity-100 uppercase">
                Family Business
              </Badge>
            </div>
          </div>
          <InvestmentCardDetail />
        </div>
        <div className="group-hover:block hidden transition-all">
          <InvestmentCardDetail />
          <div className="p-4 pt-0">
            <hr className="px-4" />
            <div className="grid grid-cols-2 mt-2">
              <p className="py-1 text-slate-600 text-sm">Security Type</p>
              <p className="py-1 font-semibold text-slate-800 text-sm text-end">
                Revenue Sharing Note
              </p>

              <p className="py-1 text-slate-600 text-sm">Investment Multiple</p>
              <p className="py-1 font-semibold text-slate-800 text-sm text-end">
                1.4x
              </p>

              <p className="py-1 text-slate-600 text-sm">Maturity</p>
              <p className="py-1 font-semibold text-slate-800 text-sm text-end">
                48 Months
              </p>

              <p className="py-1 text-slate-600 text-sm">Min. Investment</p>
              <p className="py-1 font-semibold text-slate-800 text-sm text-end">
                $100
              </p>
            </div>
          </div>
          <a href="">
            <div className="flex justify-center items-center bg-green-700 hover:bg-green-800 p-4 w-full">
              <p className="font-semibold text-md text-white uppercase">View</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

function InvestmentCardDetail() {
  return (
    <>
      <div className="space-y-2 p-4 transition-all">
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">Oxalis</h3>
        <p className="text-slate-500 text-sm">Brooklyn, NY</p>
        <p className="text-slate-800 text-base line-clamp-3">
          A recognized leader in language immersion & early education, opening
          second school.
        </p>
        <Slider
          disabled
          defaultValue={[55]}
          max={100}
          step={1}
          className="py-4 w-2/3"
        />

        <p>
          <span className="font-semibold text-green-700">$574,920 </span>
          raised of $1,000,000
        </p>
      </div>
    </>
  );
}
