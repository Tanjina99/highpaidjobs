import React from "react";
import CareerSteps from "./CareerSteps";
import CareerTracks from "./CareerTracks";

const HighPayingCareer = () => {
  return (
    <div className="bg-foreground py-10">
      <div className="">
        <div className="text-center mb-12">
          <h1 className="max-w-[320px] md:max-w-[739px] mx-auto text-2xl md:text-4xl font-bold text-button-text leading-tight mb-2 md:mb-4">
            Your path to a High-Paying career
          </h1>
          <p className="text-p-text max-w-[270px] mx-auto md:max-w-full dark:text-gray text-base md:text-lg mb-5 md:mb-10">
            Follow our proven step-by-step process to land your dream job
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CareerSteps />

          <CareerTracks />
        </div>
      </div>
    </div>
  );
};

export default HighPayingCareer;
