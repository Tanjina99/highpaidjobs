import React from "react";
import { ModeToggle } from "./toggle/ModeToggle";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Container from "@/util/Container";

const Navbar = () => {
  return (
    <div className="">
      <Container>
        <div className="flex justify-between pb-0 px-2 pt-2 border-b border-b-slate-500">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo/logo.webp"
              alt="HighPaid Jobs Logo"
              height={200}
              width={400}
              className="h-[120px] w-[300px] md:h-[80px] md:w-[200px] object-contain"
            />
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button className="flex items-center justify-between gap-1 rounded-full bg-white hover:bg-gray-100 text-slate-900 px-4 py-3 cursor-pointer text-sm md:text-base">
              Get Started
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
