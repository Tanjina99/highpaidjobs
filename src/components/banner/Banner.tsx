import { ChevronRight, Flame } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-col space-y-8 lg:w-1/2">
            <div className="scale-animation inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-scaleUp w-full max-w-max">
              <span className="animate-pulse">
                <Flame className="text-amber-600 h-5 w-5" fill="currentColor" />
              </span>

              <div className="flex justify-center items-center p-2 ">
                <div className="flex items-center gap-2 text-lg  animate-pulse">
                  <span className="text-second-button-text font-bold">
                    99.99%
                  </span>

                  <span className="text-second-button-text font-bold">
                    GUARANTEED
                  </span>

                  <span className="text-second-button-text font-bold">
                    to Reach the Top 1%
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-6xl md:text-5.5xl text-center md:text-left leading-tight font-bold text-balance text-second-button-text">
                Get your Six-Figure <br />
                job back in{" "}
                <span className="relative text-[#E7B008]">
                  8-16 Weeks
                  <svg
                    className="absolute left-0 w-full -bottom-3"
                    height="20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q50 0, 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-warn"
                    />
                  </svg>
                </span>
                <br />
                with our proven <br />
                techniques.
              </h2>
              <p className="text-lg text-white/80">
                Get access to 20+ actively hiring premium recruiters today
                surrounding your location.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-button-color text-button-text gap-2 font-medium py-3 px-6 rounded-full transition-colors cursor-pointer">
                Book Free Consultation
                <ChevronRight />
              </button>
              <button className="flex items-center justify-center gap-2 text-second-button-text border border-white/20 font-medium py-3 px-6 rounded-full transition-colors cursor-pointer">
                Join Next Webinar
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3&autoplay=1"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
