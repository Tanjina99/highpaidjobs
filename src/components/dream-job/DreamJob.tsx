"use client";

import { useState } from "react";
import { Check, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pathOptions, PricingPlan, pricingPlans } from "./jobData";
import Container from "@/util/Container";
import Link from "next/link";

export default function DreamJob() {
  const [selectedPath, setSelectedPath] = useState<string>(pathOptions[0].id);

  // First 2 button has same icon last one has different icon
  const getButtonIcon = (text: string) => {
    switch (text) {
      case "Schedule Consultation":
        return <ArrowRight size={18} />;
      default:
        return <ChevronRight size={18} />;
    }
  };

  return (
    <div className="flex items-center justify-center bg-background p-4 py-20">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-button-text">
            Choose Your Path to Land Your Dream Job
          </h1>
          <p className="text-lg text-p-text max-w-3xl mx-auto">
            Select the career path that aligns with your goals and unlock your
            professional potential
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-6">
          <div className="space-y-4 ">
            {pathOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  className={cn(
                    "w-full flex items-center gap-4 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors",
                    selectedPath === option.id
                      ? "border-blue-500 bg-foreground "
                      : "bg-foreground "
                  )}
                  onMouseOver={() => setSelectedPath(option.id)}
                  onClick={() => setSelectedPath(option.id)}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-blue-500">
                    <Icon size={24} />
                  </div>
                  <span className="text-xl font-semibold text-black">
                    {option.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="bg-foreground rounded-lg p-8 border border-accent-foreground relative">
            {(() => {
              const currentPlan: PricingPlan = pricingPlans[selectedPath];
              return (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8 min-h-[100px]">
                    {currentPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check
                          className="text-blue-500 mt-1 shrink-0"
                          size={18}
                        />
                        <span className="text-black">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                    <Link href="#contactForm">
                      <Button className="bg-all-button hover:bg-all-button-hover text-all-button-text px-8 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                        {currentPlan.textForButton}
                        {getButtonIcon(currentPlan.textForButton)}
                      </Button>
                    </Link>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </Container>
    </div>
  );
}
