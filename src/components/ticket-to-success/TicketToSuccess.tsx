import React from "react";
import { ChevronRight } from "lucide-react";
import { SuccessCard, successCards } from "./staticData";

const TicketToSuccess: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="max-w-[320px] md:max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-button-text leading-tight mb-2 md:mb-4">
            Why High Paid Jobs is your ticket to success
          </h1>
          <p className="text-p-text max-w-[270px] mx-auto md:max-w-full md:text-lg mb-5 md:mb-10">
            We share our special tools and techniques, and coach you one-on-one{" "}
            <br /> from the beginning to the placement with higher raise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-10 mx-2 md:mx-auto">
          {successCards.map((card: SuccessCard, index: number) => (
            <div
              key={index}
              className="max-w-[440px] bg-foreground p-2 md:px-[44px] md:py-[30px] rounded-lg shadow flex flex-col items-center"
            >
              <div className="mb-4">
                {/* Render the SVG icon */}
                <card.svg className="w-12 h-12 text-primary" />
              </div>
              <h3 className="md:max-w-[270px] text-base md:text-2xl font-semibold text-button-text mb-2 text-center">
                {card.title}
              </h3>
              <p className="max-w-[260px] text-p-text dark:text-gray text-xs md:text-sm text-center line-clamp-3 sm:line-clamp-none">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center text-center">
          <button className="flex items-center gap-1 bg-all-button hover:bg-all-button-hover text-all-button-text text-lg font-semibold py-1 px-4 rounded-full transition-colors duration-300 cursor-pointer">
            Book Free Consultation
            <ChevronRight className="translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketToSuccess;
