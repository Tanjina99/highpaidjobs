import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessStories() {
  return (
    <div className=" bg-[#0F172A]">
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="flex justify-center gap-4">
          <span className="text-white uppercase text-sm tracking-wider mb-2 px-2 py-1 rounded-full bg-[#1E293B]">
            REAL STORIES
          </span>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white">Success Stories</h2>
        <p className="text-slate-400 text-lg mb-8">
          Hear from people who transformed their careers with our program
        </p>
        <div className="flex justify-center mb-10">
          <span className="bg-slate-800 text-red-500 text-sm px-3 py-1 rounded-full flex items-center gap-2 transform -translate-y-3">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            LIVE TESTIMONIAL
          </span>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-white">
          <div className="bg-[#162033] rounded-xl overflow-hidden text-left shadow-xl">
            <div className="relative h-72 overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1065693603?h=0c54fe674c"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-[#162033]">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-lg">Alex P.</h3>
                  <p className="text-[#78869A] text-sm">
                    Hired @ Fortune 100 – $108K
                  </p>
                </div>
              </div>
              <p className="text-xl font-medium mb-2">
                I got two offers within 3 months!
              </p>
              <div className="flex text-yellow-400 gap-x-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="bg-[#162033] rounded-2xl overflow-hidden text-left shadow-lg">
            <div className="relative h-72 overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1065693522?h=9d231d3e62"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-[#162033]">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-lg">Maria S.</h3>
                  <p className="text-[#78869A] text-sm">
                    Hired @ FAANG – $130K
                  </p>
                </div>
              </div>
              <p className="text-xl font-medium mb-2">
                They helped me to get extra $8k!
              </p>
              <div className="flex text-yellow-400 gap-x-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>

          {/* Third Testimonial */}
          <div className="bg-[#162033] rounded-2xl overflow-hidden text-left shadow-lg">
            <div className="relative h-72 overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1065693295?h=00366a3997"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-[#162033]">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  J
                </div>
                <div>
                  <h3 className="font-bold text-lg">Jason K.</h3>
                  <p className="text-[#78869A] text-sm">
                    Hired @ Tech Startup – $95K
                  </p>
                </div>
              </div>
              <p className="text-xl font-medium mb-2">
                Landed my dream job in tech!
              </p>
              <div className="flex text-yellow-400 gap-x-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>

          {/* Fourth Testimonial */}
          <div className="bg-[#162033] rounded-2xl overflow-hidden text-left shadow-lg">
            <div className="relative h-72 overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1065693202?h=b6bd98f94e"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-[#162033]">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  S
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sarah L.</h3>
                  <p className="text-[#78869A] text-sm">
                    Hired @ Google – $120K
                  </p>
                </div>
              </div>
              <p className="text-xl font-medium mb-2">
                Exceeded my career expectations!
              </p>
              <div className="flex text-yellow-400 gap-x-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 pb-10">
        <Button className="text-slate-900 rounded-full bg-yellow-400 hover:bg-yellow-500">
          Book Free Consultation
        </Button>
      </div>
    </div>
  );
}
