import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/util/Container";

export default function PricingPlans() {
  return (
    <div className="px-4 py-12 bg-foreground">
      <Container>
        <h1 className="text-button-text text-4xl md:text-5xl font-bold text-center mb-4">
          Unlock Your Career Freedom!
        </h1>
        <p className="text-center text-p-text mb-10">
          Choose the assessment plan that works best for you with our flexible
          payment options
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter Plan */}
          <div className="rounded-lg bg-piricing-card border shadow-sm p-6 flex flex-col h-full">
            <div className="mb-6">
              <h2 className="font-bold text-black">Plan: Starter</h2>
              <p className="text-black text-xs">Quick 30 min interview</p>
            </div>

            <div className="mb-6">
              <p className="bg-piricing-card text-black text-sm">
                Starting from
              </p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-black">$49.99</span>
              </div>
              <p className="bg-piricing-card text-black text-xs">
                One time payment
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>

                <span className="text-black">30 Min Interview.</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">Provide Recording.</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">Interview Assessment.</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">Delivery: 1 to 3 days.</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">
                  Receive: details report and next action plan.
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">
                  Provide 30 Local recruiter (small to large companies for open
                  position)
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-full cursor-pointer">
                Pay Now{" "}
                <span className="ml-1">
                  <ChevronRight />
                </span>
              </Button>
            </div>
          </div>

          {/* Essential Plan */}
          <div className="rounded-lg border bg-blue-600 text-white shadow-sm p-6 relative flex flex-col h-full">
            <div className="absolute top-10 -right-2">
              <span className="bg-[#F6A934] text-sm md:text-sm font-medium text-black px-3 py-1 rounded-t rounded-bl">
                Most Popular
              </span>
              <div className="absolute top-6 md:top-6 right-0">
                <svg
                  width="7.903320"
                  height="7.903320"
                  viewBox="0 0 7.90332 7.90332"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs></defs>
                  <path
                    id="Vector 80"
                    d="M0 0L7.9 0L0 7.9L0 0Z"
                    fill="#F6A934"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-bold text-white">Plan: Essential</h2>
              <p className="text-xs text-blue-200">
                60 min technical interview and resume <br /> assessment
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium text-blue-200">Starting From</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">$99.99</span>
              </div>
              <p className="text-xs mt-1 text-blue-200">
                Upfront deposit, $99.99 installment for 24 months: Interest FREE
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className=" p-0.5 mr-2 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-white ">60 min interview.</span>
              </div>
              <div className="flex items-start">
                <div className=" p-0.5 mr-2 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-white">
                  Deliver: Recording Interview, Resume Assessment and guidance!
                </span>
              </div>
              <div className="flex items-start">
                <div className=" p-0.5 mr-2 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-white">
                  Receive: details report and next action plan
                </span>
              </div>
              <div className="flex items-start">
                <div className=" p-0.5 mr-2 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check h-5 w-5 text-white bg-blue-500 rounded-full mr-2 flex-shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-white">
                  50 Local recruiter (small to large companies for open
                  position)
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <Button className="py-3 px-4 rounded-full w-full bg-foreground hover:bg-primary text-blue-600 dark:text-white cursor-pointer">
                Pay Now{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </Button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="rounded-lg bg-piricing-card border shadow-sm p-6 flex flex-col h-full">
            <div className="mb-6">
              <h2 className="font-bold text-black">Plan: Premium</h2>
              <p className="text-black text-xs">
                Interview, resume and current job application assessment
              </p>
            </div>

            <div className="mb-6">
              <p className="bg-piricing-card text-black text-sm">
                Starting From
              </p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-black">$149.99</span>
              </div>
              <p className="bg-piricing-card text-black text-xs">
                Upfront deposit, $149.99 installment for 24 months: Interest
                FREE
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">Duration: 2 Hours</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">Recruiter Interview</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">Tech Interview</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">Behavior Interview</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">Resume Assessment</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">
                  Current Job Application Assessment
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">
                  Receive: Details Report and Next Action Plan
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check h-4 w-5 text-primary dark:text-white bg-white dark:bg-foreground rounded-full mr-2 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="text-black">
                  70 Local Recruiters (Small to Large Companies for Open
                  Position)
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-full cursor-pointer">
                Pay Now{" "}
                <span className="ml-1">
                  <ChevronRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
