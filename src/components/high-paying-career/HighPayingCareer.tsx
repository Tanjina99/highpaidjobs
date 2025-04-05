import React from "react";
import CareerSteps from "./CareerSteps";
import CareerTracks from "./CareerTracks";
import Container from "@/util/Container";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HighPayingCareer = () => {
  return (
    <div className="bg-foreground py-10">
      <div className="">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-button-text leading-tight mb-2 md:mb-4">
            Your path to a High-Paying career
          </h1>
          <p className="text-p-text max-w-[270px] mx-auto md:max-w-full dark:text-gray text-base md:text-lg mb-5 md:mb-10">
            Follow our proven step-by-step process to land your dream job
          </p>
        </div>
        <Container>
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <div className="max-2w-xl">
              <CareerSteps />
            </div>

            <div>
              <CareerTracks />
            </div>
          </div>
        </Container>
        <div className="flex justify-center mt-4">
          <Link href="#contactForm">
            <Button className="flex items-center gap-1 bg-all-button hover:bg-all-button-hover text-all-button-text text-lg font-semibold py-1 px-4 rounded-full transition-colors duration-300 cursor-pointer">
              Book Free Consultation
              <ChevronRight className="translate-y-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighPayingCareer;
