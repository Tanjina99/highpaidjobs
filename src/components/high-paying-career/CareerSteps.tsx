export default function CareerRoadmap() {
  const steps = [
    {
      number: "01",
      title: "Pick Your Plan",
      description:
        "Find out options among them: Placement, assessment, guidance, technical coaching, quick refine and placement.",
    },
    {
      number: "02",
      title: "Your Career Assessment",
      description:
        "Get one-on-one coaching and assessment until your placement in confirmed in 8 to 12 weeks.",
    },
    {
      number: "03",
      title: "Access 500+ Active Recruiters",
      description:
        "We'll review your resume, connect you with recruiters, and prepare you for interviews.",
    },
    {
      number: "04",
      title: "Ready Job Offer within 10 Interviews",
      description:
        "Our 500+ active recruiters will help you land multiple job offers within the first 10 interviews.",
    },
    {
      number: "05",
      title: "Renegotiation for Extra $10k",
      description:
        "When your final salary is decided, we will step in to renegotiate get you extra $10k",
    },
    {
      number: "06",
      title: "Support During Probation Period",
      description:
        "Receive full support during your probation period to ensure your success.",
    },
  ];

  return (
    <div className="relative">
      {steps.map((step, index) => (
        <div key={index} className="flex mb-12 relative">
          {/* Vertical line */}
          {index < steps.length - 1 && (
            <div className="absolute left-[29px] top-[60px] w-[2px] h-[calc(100%+12px)] bg-dashed border-l-2 border-dashed border-gray-200 z-0"></div>
          )}

          {/* Number circle */}
          <div className="flex-shrink-0 z-10">
            <div className="flex items-center justify-center w-[58px] h-[58px] rounded-full bg-career-number text-career-number-text font-bold text-xl">
              {step.number}
            </div>
          </div>

          {/* Content */}
          <div className="ml-8 mt-4">
            <h3 className="text-xl font-semibold text-black mb-2">
              {step.title}
            </h3>
            <p className="text-p-text">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
