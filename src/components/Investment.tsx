import { InvestmentItemType } from "@/types/types";
import InvestmentCard from "./InvestmentCard";
import { Button } from "./ui/button";

const investmentItems: InvestmentItemType[] = [
  {
    image: "/images/oxalis-1.png",
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    badges: ["House", "Family Business"],
    raised: 574.92,
    securityType: "Revenue Sharing Note",
    investmentMultiple: 1.4,
    maturity: 48,
    minInvestment: 100,
    href: "",
  },
  {
    image: "/images/oxalis-2.png",
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    badges: ["House", "Family Business"],
    raised: 574.92,
    securityType: "Revenue Sharing Note",
    investmentMultiple: 1.4,
    maturity: 48,
    minInvestment: 100,
    href: "",
  },
  {
    image: "/images/oxalis-3.png",
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    badges: ["House", "Family Business"],
    raised: 574.92,
    securityType: "Revenue Sharing Note",
    investmentMultiple: 1.4,
    maturity: 48,
    minInvestment: 100,
    href: "",
  },
  {
    image: "/images/oxalis-4.png",
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    badges: ["House", "Family Business"],
    raised: 574.92,
    securityType: "Revenue Sharing Note",
    investmentMultiple: 1.4,
    maturity: 48,
    minInvestment: 100,
    href: "",
  },
  {
    image: "/images/oxalis-5.png",
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    badges: ["House", "Family Business"],
    raised: 574.92,
    securityType: "Revenue Sharing Note",
    investmentMultiple: 1.4,
    maturity: 48,
    minInvestment: 100,
    href: "",
  },
  {
    image: "/images/oxalis-1.png",
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    badges: ["House", "Family Business"],
    raised: 574.92,
    securityType: "Revenue Sharing Note",
    investmentMultiple: 1.4,
    maturity: 48,
    minInvestment: 100,
    href: "",
  },
];

export default function Investment() {
  return (
    <>
      <div className="relative flex flex-col items-center bg-slate-50 px-8 md:px-16 lg:px-48 py-24">
        <h2 className="font-bold text-slate-600 text-2xl md:text-3xl lg:text-4xl text-center">
          Offerings open for investment
        </h2>
        <p className="mt-4 text-slate-500 text-sm md:text-base lg:text-lg text-center">
          Explore pre-vetted investment opportunities available in a growing
          number of industry categories.
        </p>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {investmentItems.map((item, index) => (
            <InvestmentCard key={index} item={item} />
          ))}
        </div>
        <Button
          className="mx-auto mt-16 border-green-700 rounded-none text-green-700 hover:text-green-700 uppercase"
          variant={"outline"}
        >
          View All Projects
        </Button>
        <img
          src="/images/shape-1.png"
          alt="decorator"
          className="top-32 left-16 absolute w-64"
        />
        <img
          src="/images/shape-1.png"
          alt="decorator"
          className="top-96 right-16 absolute w-64"
        />
        <img
          src="/images/shape-1.png"
          alt="decorator"
          className="bottom-32 left-32 absolute w-64 rotate-30"
        />
      </div>
    </>
  );
}
