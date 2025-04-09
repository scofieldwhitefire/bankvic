import Navbar from "../organisms/Navbar";
import HeroSection from "../organisms/HeroSection";
import FeatureSection from "../organisms/FeatureSection";
import { Sections } from "../molecules/Sections";
import { Static } from "../../assets/images";
import { IconArrowRight } from "@tabler/icons-react";
import { Footer } from "../organisms/Footer";

const HomeTemplate = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Sections
        image={Static.homePolice}
        topText="POLICE OFFER"
        title="A great home loan rate and $4,000 cashback"
        btnText="APPLY NOW"
      >
        <div className="text-sm text-[#474747] font-light py-5">
          Special home loan offer for police.{" "}
          <a href="#" className="block underline">
            *Terms and conditions apply.
          </a>
        </div>
      </Sections>
      <Sections
        image={Static.homeOffer}
        topText="STANDARD CASHBACK OFFER"
        title="A great home loan rate and $3,000 cashback"
        btnText="APPLY NOW"
        pattern="reverse"
      >
        <div className="text-sm text-[#474747] font-light py-5">
          For all new purchases and refinances into BankVic.
          <a href="#" className="block underline">
            *Terms and conditions apply.
          </a>
        </div>
      </Sections>
      <Sections
        image={Static.whoWeServe}
        topText="WHO WE SERVE"
        title="The bank for police, emergency and health workers"
        btnText="OUR STROY"
      >
        <div className="text-sm text-[#474747] font-light py-5">
          We're 100% owned by our members. All our profits are reinvested into
          our business or the communities we're a part of.
        </div>
      </Sections>

      <div className="w-full bg-[#f5f5f5] py-10 lg:py-20">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="pl-5 flex flex-col gap-2 items-start">
            <span className="text-[#474747] text-base font-light">
              WHY BANKVIC
            </span>
            <div className="relative">
              <span className="text-[#ff7a59] absolute top-0 -left-7 text-5xl font-extrabold">
                /
              </span>
              <span className="text-5xl font-bold text-[#1a3b8e]">
                BankVic wins awards
              </span>
            </div>
            <div className="text-sm text-[#474747] font-light py-5">
              BankVic has been recognised by Canstar and Mozo for awards in
              2024.
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-5 bg-white rounded-lg flex flex-col justify-center items-center gap-5 px-5 py-10 text-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105">
              <img
                src={Static.canstar}
                alt="Canstar award"
                className="w-1/2 object-fit p-5"
              />
              <p>Canstar Home Lender Award 2024</p>
              <span className="font-bold flex items-center gap-3 hover:gap-4 text-[#1a3b8e]">
                <span>BankVic wins Home Loan Awards</span>
                <IconArrowRight />
              </span>
            </div>
            <div className="col-span-5 bg-white rounded-lg flex flex-col justify-center items-center gap-5 px-5 py-10 text-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105">
              <img
                src={Static.mozo}
                alt="Canstar award"
                className="w-1/2 object-fit p-5"
              />
              <p>Mozo Home Lender Award 2024</p>
            </div>
          </div>
        </div>
      </div>
        <Footer />

      {/* </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2025 BankVic. All rights reserved.</p>
        </div>
      </footer>j
      </div> */}
    </>
  );
};

export default HomeTemplate;
