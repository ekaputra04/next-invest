import { FooterItemType } from "@/types/types";
import { Button } from "./ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerItems: FooterItemType[] = [
  {
    title: "Services",
    details: [
      {
        name: "Email Marketing",
        link: "",
      },
      {
        name: "Campaigns",
        link: "",
      },
      {
        name: "Branding",
        link: "",
      },
      {
        name: "Offline",
        link: "",
      },
    ],
  },
  {
    title: "About",
    details: [
      {
        name: "Our story",
        link: "",
      },
      {
        name: "Benefits",
        link: "",
      },
      {
        name: "Team",
        link: "",
      },
      {
        name: "Careers",
        link: "",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="space-y-8 bg-slate-200 px-8 md:px-16 lg:px-48 py-24">
      <div className="gap-8 grid lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <h2 className="font-bold text-green-700 text-xl uppercase">
            Next Invest
          </h2>
          <p className="text-slate-500">
            Copyright © 2025. Slicing by{" "}
            <a href="https://github.com/ekaputra04" className="hover:underline">
              ekaputra04
            </a>
            . All rights reserved.
          </p>
        </div>
        {footerItems.map((item, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-semibold text-green-700 text-lg">
              {item.title}
            </h3>
            <ul className="space-y-2">
              {item.details.map((detail, index) => (
                <li key={index}>
                  <a
                    href={detail.link}
                    className="text-slate-500 hover:underline"
                  >
                    {detail.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <a className="flex justify-end" href="#">
          <Button className="items-center bg-green-700 hover:bg-green-800 rounded-full w-10 h-10">
            ^
          </Button>
        </a>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-green-700 text-lg">
            Subscribe to our newsletter
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address..."
              className="flex justify-start items-center bg-slate-100 px-4 rounded-l w-64 h-10 text-sm"
            />
            <Button className="bg-green-700 hover:bg-green-800 rounded-l-none h-10 text-white">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center gap-8 bgsla7">
          <a href="#">
            <Facebook color="#334155" />
          </a>
          <a href="#">
            <Twitter color="#334155" />
          </a>
          <a href="#">
            <Instagram color="#334155" />
          </a>
          <a href="#">
            <Linkedin color="#334155" />
          </a>
        </div>
      </div>
    </div>
  );
}
