import { AlignRight } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navbarItems: string[] = [
  "Investment Opportunities",
  "How it Works",
  "About Us",
];

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:flex justify-between items-center px-8 md:px-16 lg:px-48 py-6">
        <a href="#">
          <p className="font-bold text-green-700 text-xl">NEXT INVEST</p>
        </a>
        <ul className="flex justify-evenly gap-8">
          {navbarItems.map((item) => (
            <li className="hover:text-green-800 hover:underline">
              <a href="#">
                <p className="text-slate-700 text-base">{item}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Button className="bg-green-700 hover:bg-green-800 rounded-none text-white">
            Login
          </Button>
          <Button
            variant={"outline"}
            className="border-green-700 rounded-none text-green-700 hover:text-green-700"
          >
            Register
          </Button>
        </div>
      </div>
      <div className="lg:hidden flex justify-between items-center px-8 py-4">
        <a href="#">
          <p className="font-bold text-green-700 text-xl">NEXT INVEST</p>
        </a>
        <Sheet>
          <SheetTrigger>
            <AlignRight />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <a href="#">
              <p className="font-bold text-green-700 text-xl">NEXT INVEST</p>
            </a>
            <ul className="flex flex-col justify-evenly gap-4 mt-8">
              {navbarItems.map((item) => (
                <li className="group pl-2 hover:border-green-700 hover:border-l-2 hover:text-green-700 transition-all">
                  <a href="#">
                    <p className="group-hover:text-green-700 text-slate-700 text-base">
                      {item}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
