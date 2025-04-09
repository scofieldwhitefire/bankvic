import Button from "../atoms/Button";
import RateDisplay from "../molecules/RateDisplay";
import AwardBadge from "../molecules/AwardBadge";
import { Static } from "../../assets/images";
import { IconArrowRight } from "@tabler/icons-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="mt-20">
        {/* Right side - Image and Awards */}
        <div className="w-full relative mt-8 md:mt-0">
          <img
            src={Static.heroImg}
            alt="Police officers"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Left side - Offer */}
          <div className="shadow-[0_0_20px_rgba(0,0,0,0.2)] box-border absolute w-[530px] z-10 top-20 left-10 p-[60px] rounded-[9px] bg-white">
            <div className="relative mb-6">
              <div className="absolute -top-22 left-8 bg-blue-600 text-white px-3 py-1 rounded-t-md font-semibold text-sm mb-4">
                Cashback offer*
              </div>
              <h1 className="text-5xl font-bold text-[#1a3b8e]">
                <span className="text-[#ff7a59]">/</span>
                <span className="text-[#1a3b8e] font-normal px-1.5">
                  <strong className="font-bold">Up to $4,000 cash</strong> in
                  your pocket
                </span>
              </h1>
              <p className="text-[#858585] my-4 font-normal text-xl">
                If you're buying a property or refinancing, you may be eligible
                for a cashback offer. Terms and conditions apply, see below*.
              </p>
            </div>

            <div className="flex justify-start gap-5 mb-8">
              <RateDisplay
                rate="5.49"
                type="p.a"
                description="2 year fixed rate"
              />
              <RateDisplay
                rate="5.83"
                type="p.a"
                description="Comparison rate"
              />
            </div>

            <div className="flex space-x-2">
              <Button variant="primary">APPLY NOW</Button>
              <Button
                variant="secondary"
                className="flex items-center gap-1 hover:gap-2"
              >
                ENQUIRE NOW
                <IconArrowRight />
              </Button>
            </div>
          </div>

          {/* <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg">
              <div className="text-center mb-2">
                <h3 className="text-[#1a3b8e] font-bold">Join our</h3>
                <h3 className="text-[#1a3b8e] font-bold">multiple-award</h3>
                <h3 className="text-[#1a3b8e] font-bold">winning bank</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <AwardBadge imageSrc="https://via.placeholder.com/50" alt="Canstar award" />
                <AwardBadge imageSrc="https://via.placeholder.com/50" alt="Canstar award" />
                <AwardBadge imageSrc="https://via.placeholder.com/50" alt="Mozo award" />
                <AwardBadge imageSrc="https://via.placeholder.com/50" alt="Mozo award" />
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
