import {
  Check,
  X,
  Shield,
  Monitor,
  Users,
  UserCheck,
  DollarSign,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  return (
    <div className="bg-background text-white py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-button-text">
          Why Choose Us Over Others?
        </h1>
        <p className="text-center text-p-text mb-12">
          See how our program delivers results where others fall short
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-foreground rounded-lg p-6">
            <div className="text-cyan-400 mb-4">
              <Shield className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">
              Guaranteed Job Placement
            </h3>
            <p className="text-p-text mb-4 text-md">
              We guarantee you'll get hired or we keep working with you for free
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold text-black">
                  HighPaidJobs
                </span>
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
              </div>

              <div className="bg-background rounded flex flex-col items-center justify-center py-2 px-3 w-auto">
                <span className="mb-1 text-md font-semibold text-black">
                  Others
                </span>
                <div className="bg-red-600 rounded-full p-1">
                  <X className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded py-2 px-4 text-sm text-center">
              99.99% success rate within 8-16 weeks
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-foreground rounded-lg p-6">
            <div className="text-cyan-400 mb-4">
              <Monitor className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">
              Hyper Personalized Coaching
            </h3>
            <p className="text-p-text mb-4 text-md">
              One-on-one instruction tailored to your learning style
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold text-black">
                  HighPaidJobs
                </span>
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold text-black">
                  Others
                </span>
                <div className="bg-red-600 rounded-full p-1">
                  <X className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded py-2 px-4 text-sm text-center">
              Dedicated mentor throughout your journey
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-foreground rounded-lg p-6">
            <div className="text-cyan-400 mb-4">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">
              Interview Support
            </h3>
            <p className="text-p-text mb-4 text-md">
              Expert guidance during the entire interview process
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold">
                  HighPaidJobs
                </span>
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold">Others</span>
                <div className="bg-red-600 rounded-full p-1">
                  <X className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded py-2 px-4 text-sm text-center">
              We join your interviews to help you succeed
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-foreground rounded-lg p-6">
            <div className="text-cyan-400 mb-4">
              <UserCheck className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">
              Post-Hire Support
            </h3>
            <p className="text-p-text mb-4 text-md">
              Continued assistance after you land your job
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold">
                  HighPaidJobs
                </span>
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold">Others</span>
                <div className="bg-red-600 rounded-full p-1">
                  <X className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded py-2 px-4 text-sm text-center">
              Full support during probation period to help your job sustain
            </div>
          </div>

          {/* Feature 5 */}
          <div className="bg-foreground rounded-lg p-6">
            <div className="text-cyan-400 mb-4">
              <DollarSign className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">
              Decided Salary Renegotiation
            </h3>
            <p className="text-p-text mb-4 text-md">
              Expert techniques to maximize your compensation
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold">
                  HighPaidJobs
                </span>
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold">Others</span>
                <div className="bg-red-600 rounded-full p-1">
                  <X className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded py-2 px-4 text-sm text-center">
              Average $5-10k increase in offers
            </div>
          </div>

          {/* Feature 6 */}
          <div className="bg-foreground rounded-lg p-6">
            <div className="text-cyan-400 mb-4">
              <Lock className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black ">
              100% Money-Back Guarantee
            </h3>
            <p className="text-p-text mb-4 text-md whitespace-pre-wrap">
              15 day money back guarantee, a risk-free investment!
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold">
                  HighPaidJobs
                </span>
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-background rounded flex flex-col items-center justify-center py-3 px-4">
                <span className="mb-2 text-[15px] font-semibold">Others</span>
                <div className="bg-red-600 rounded-full p-1">
                  <X className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded py-2 px-4 text-sm text-center">
              15-day unconditional guarantee
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Ready to experience the HighPaidJobs difference?
          </h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium">
            Book Free Consultation <span className="ml-1">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
