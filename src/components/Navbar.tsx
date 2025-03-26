import React from "react";
import { ModeToggle } from "./toggle/ModeToggle";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="container flex justify-between mx-auto  pb-4 px-4 pt-4 border-b-4 border-b-slate-50">
        <div>
          <h1 className="text-lg md:text-xl font-bold">HighPaid Jobs</h1>
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button className="flex items-center justify-between gap-1 rounded-full bg-white hover:bg-gray-100 text-slate-900 px-4 py-3 cursor-pointer text-sm md:text-base">
            Get Started
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
