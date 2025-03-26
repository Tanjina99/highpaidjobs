import { LucideIcon, Briefcase, Building, GraduationCap } from "lucide-react";

// Type definition for Path Option
export interface PathOption {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

// Type definition for Pricing Plan
export interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  textForButton: string;
}

// Path Options Data
export const pathOptions: PathOption[] = [
  {
    id: "assessment",
    title: "Job Assessment",
    icon: Briefcase,
    description:
      "Find out why you're not getting jobs and get actionable feedback",
  },
  {
    id: "placement",
    title: "Job Placement",
    icon: Building,
    description: "Get placed in your dream job with our network of employers",
  },
  {
    id: "prep",
    title: "Job Prep",
    icon: GraduationCap,
    description: "Prepare for interviews and build the skills employers want",
  },
];

// Pricing Plans Data
export const pricingPlans: Record<string, PricingPlan> = {
  assessment: {
    title: "Job Assessment Only",
    subtitle: "Find out why you are not getting jobs NOW",
    price: "$49",
    period: "One time payment",
    features: [
      "30 to 120 min interview",
      "40 to 70 local recruiter access",
      "Provided recording with details report",
      "Salary negotiation blueprint",
      "Probation period hacks",
      "Help revamp the resume and tailoring for each job needs.",
    ],
    textForButton: "Get Started",
  },
  prep: {
    title: "Job Assessment + Placement",
    subtitle: "Land $100k+ job within 90 days",
    price: "$499",
    period: "Upfront deposit, $271 installment for 24 months: Interest FREE",
    popular: true,
    features: [
      "Everything in Job Assessment",
      "Access to 500+ active recruiters",
      "Complete support during interviews",
      "Sure job offer within 10 interviews",
      "Help renegotiate salary by $10k",
      "Complete support during probation period",
      "Lifetime access to materials",
    ],
    textForButton: "Schedule Consultation",
  },
  placement: {
    title: "Job Prep + Assessment + Placement",
    subtitle: "Switch career and get $100k+ job in 120 days",
    price: "$999",
    period: "Upfront deposit, $395 installment for 24 months: Interest FREE",
    features: [
      "Everything in Job Assessment + Placement",
      "One-on-one instruction",
      "Hands-on real-world projects",
      "Optional 400-hour internship",
      "Industry mentor matching",
      "Portfolio development",
      "Lifetime access to materials",
    ],
    textForButton: "Get Started",
  },
};
