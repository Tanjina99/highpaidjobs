import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Container from "@/util/Container";

export default function SecureFuture() {
  return (
    <div className="bg-background p-8 md:p-12">
      <Container>
        <div className="relative bg-primary rounded-lg p-4 md:p-12 text-center overflow-hidden">
          {/* Background Images */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Image
              src="/image/cta-right.webp"
              alt="Left background"
              height={1000}
              width={1000}
              className="h-[130px] w-[130px] scale-[1] md:scale-[3] object-contain animate-pulse delay-[2000]"
            />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Image
              src="/image/cta-left.webp"
              alt="Right background"
              height={1000}
              width={1000}
              className="h-[130px] w-[130px] md:scale-[3] object-contain animate-pulse delay-[2000]"
            />
          </div>

          {/* Content */}
          <div className="z-10 relative max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 text-nowrap">
              Secure Your $100K+ Future Today!
            </h1>

            <p className="text-blue-100 text-base md:text-lg mb-3 md:mb-8 max-w-2xl mx-auto">
              Spots are filling FAST! Join our next hiring wave and start your
              journey to a high-paying tech career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="#book-call">
                <Button className="flex items-center justify-center bg-button-color text-button-text gap-2 font-medium py-3 px-6 rounded-full transition-colors">
                  Book a Free 15-Min Call <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="#join-webinar">
                <Button className="flex items-center justify-center gap-2 text-second-button-text border border-white/20 font-medium py-3 px-6 rounded-full transition-colors cursor-pointer">
                  Join Next Webinar <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="text-white/90 flex items-center justify-center gap-2 text-base md:text-base mt-3">
              🚀 HighPaidJobs.us – The Fastest Path to a $100K+ Career!
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
