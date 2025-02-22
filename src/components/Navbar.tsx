import { Button } from "./ui/button";

const navbarItems = ["Investment Opportunities", "How it Works", "About Us"];

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-8 md:px-16 lg:px-32 py-6">
        <a href="#">
          <p className="font-bold text-green-800 text-xl">NEXT INVEST</p>
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
    </>
  );
}
