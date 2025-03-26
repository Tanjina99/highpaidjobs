"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function FAQSection() {
  return (
    <div className=" px-4 py-16 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">
          Got Questions? We've Got Answers
        </h2>
        <p className="text-lg text-gray-700">
          Find answers to our most frequently asked questions
        </p>
      </div>

      <div className="container mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="item-1"
            className="border rounded-md shadow-sm bg-foreground"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-base text-black font-medium">
                How fast can I get a job?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-black">
              <p>
                Our graduates typically find employment within 3-6 months after
                completing the program. The exact timeline depends on your
                skills, location, and the current job market.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border rounded-md shadow-sm bg-foreground"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-base font-medium text-black">
                What if I don't get hired?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-black">
                We offer ongoing career support and job placement assistance. If
                you don't find a job within a reasonable timeframe, we provide
                additional training and resources to enhance your skills and
                marketability.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border rounded-md shadow-sm bg-foreground"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-base font-medium text-black">
                Can I work remotely?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-black">
                Yes, many of our graduates secure remote positions. We prepare
                you for both remote and in-office work environments, and our job
                placement services include opportunities for both types of
                employment.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border rounded-md shadow-sm bg-foreground"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-base font-medium text-black">
                Who is this program for?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-black">
                Our program is designed for individuals looking to start or
                advance their career in the tech industry. Whether you're a
                complete beginner or looking to upskill, our curriculum can be
                tailored to your experience level and career goals.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border rounded-md shadow-sm bg-foreground"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-base font-medium text-black">
                Do I need prior experience?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-black">
                No prior experience is required. Our program starts with the
                fundamentals and progressively builds to advanced concepts. We
                welcome students from all backgrounds and experience levels.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="border rounded-md shadow-sm bg-foreground"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-base font-medium text-black">
                What companies hire your graduates?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 ">
              <p className="text-black">
                Our graduates have been hired by a wide range of companies, from
                tech giants to startups. Some of our hiring partners include
                Microsoft, Google, Amazon, Facebook, and numerous innovative
                startups across various industries.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg mb-4 text-p-text">
          Have more questions? Ask us during your FREE consultation!
        </p>
        <Button className="bg-all-button hover:bg-all-button-hover text-all-button-text text-lg font-semibold py-1 px-4 rounded-full transition-colors duration-300 cursor-pointer">
          Book Free Consultation
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
