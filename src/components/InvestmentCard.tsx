import { InvestmentItemType } from "@/types/types";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";

interface InvestmentCardProps {
  item: InvestmentItemType;
}

export default function InvestmentCard({ item }: InvestmentCardProps) {
  return (
    <>
      <div className="group z-10 bg-white shadow-xl w-full transition-all">
        <div className="group-hover:hidden transition-all duration-200">
          <div className="relative">
            <img
              src={item.image}
              alt="image"
              className="w-full h-48 object-cover transition-all"
            />
            <div className="top-4 left-4 absolute flex flex-wrap justify-between gap-2">
              {item.badges.map((badge, index) => (
                <Badge
                  key={index}
                  className="bg-slate-50 hover:bg-slate-100 opacity-80 rounded-none text-slate-800 text-opacity-100 uppercase"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          <InvestmentCardDetail item={item} />
        </div>
        <div className="group-hover:block hidden transition-all">
          <InvestmentCardDetail item={item} />
          <div className="p-4 pt-0 transition-all">
            <hr className="px-4" />
            <div className="grid grid-cols-2 mt-2">
              <p className="py-1 text-slate-600 text-sm">Security Type</p>
              <p className="py-1 font-semibold text-slate-800 text-sm text-end">
                {item.securityType}
              </p>

              <p className="py-1 text-slate-600 text-sm">Investment Multiple</p>
              <p className="py-1 font-semibold text-slate-800 text-sm text-end">
                {item.investmentMultiple}x
              </p>

              <p className="py-1 text-slate-600 text-sm">Maturity</p>
              <p className="py-1 font-semibold text-slate-800 text-sm text-end">
                {item.maturity} Months
              </p>

              <p className="py-1 text-slate-600 text-sm">Min. Investment</p>
              <p className="py-1 font-semibold text-slate-800 text-sm text-end">
                ${item.minInvestment}
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

function InvestmentCardDetail({ item }: InvestmentCardProps) {
  return (
    <>
      <div className="space-y-2 p-4 transition-all">
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
          {item.title}
        </h3>
        <p className="text-slate-500 text-sm">{item.location}</p>
        <p className="text-slate-800 text-base line-clamp-3">
          {item.description}
        </p>
        <Slider
          disabled
          defaultValue={[55]}
          max={100}
          step={1}
          className="py-4 w-2/3"
        />

        <p>
          <span className="font-semibold text-green-700">${item.raised} </span>
          raised of $1,000,000
        </p>
      </div>
    </>
  );
}
