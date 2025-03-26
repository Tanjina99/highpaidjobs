import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Card } from "../ui/card";

const CareerTracks = () => {
  const careerTracks = [
    "CloudOps/DevOps (AWS)",
    "Full-Stack Web/Mobile (MERN)",
    "Project/Product Management",
    "SQA Engineering",
    "Front-End Developer",
    "Back-End Developer",
    "Software Engineer",
    "AI Engineer",
    "More",
  ];

  return (
    <div className="h-full w-full">
      <Card className="h-full w-full lg:w-[500px] overflow-hidden border-2 border-primary bg-foreground">
        <div className="bg-primary text-white p-6 text-start w-full">
          <h1 className="text-xl font-bold">Job Prep Tracks</h1>
        </div>

        {/* Tracks Grid */}
        <div className="p-4 flex-grow">
          <div className="grid grid-cols-1 gap-4">
            {careerTracks.map((track, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-button-text p-3 rounded-lg"
              >
                <div className="z-10 border-primary flex items-center justify-center w-6 h-6 text-primary bg-green-100 rounded-full">
                  <CheckCircle2 />
                </div>
                <span className="text-xl font-medium">{track}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Text */}
        <div className="p-4 text-sm text-center -mt-10">
          <p className="text-p-text px-6">
            All tracks include job placement 99.99% guarantee to follow our
            <br />
            techniques.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CareerTracks;
