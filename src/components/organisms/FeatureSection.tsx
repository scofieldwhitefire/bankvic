import { IconArrowRight } from "@tabler/icons-react";
import { Static } from "../../assets/images";

const FeatureSection = () => {
  return (
    <section className="bg-[#f5f5f5] w-full">
      <div className="container mx-auto w-full py-20 px-10">
        <div className="bg-white rounded-lg">
          <div className="grid grid-cols-12 gap-10 px-14 pb-14">
            <div className="flex items-start gap-5 col-span-4 text-[#1a3b8e] pt-14">
              <img src={Static.wallet} className="size-[45px] object-fit" />
              <div className="px-7">
                <a href="#" className="flex items-center gap-0.5">
                  <span className="hover:underline font-bold text-xl">
                    Bank accounts
                  </span>
                  <IconArrowRight />
                </a>
                <div className="space-y-0.5 my-2 flex flex-col items-start font-normal">
                  <a href="#">Everyday account</a>
                  <a href="#">Savings accounts</a>
                  <a href="#">Term deposits</a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5 col-span-4 text-[#1a3b8e] pt-14">
              <img
                src={Static.visaCreditCard}
                className="size-[45px] object-fit"
              />
              <div className="px-7">
                <a href="#" className="flex items-center gap-0.5">
                  <span className="hover:underline font-bold text-xl">
                    Credit cards
                  </span>
                  <IconArrowRight />
                </a>
                <div className="space-y-0.5 my-2 flex flex-col items-start font-normal">
                  <a href="#">Qantas Visa</a>
                  <a href="#">Low Rate Visa</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-5 col-span-4 text-[#1a3b8e] pt-14">
              <img
                src={Static.bankingAccount}
                className="size-[45px] object-fit"
              />
              <div className="px-7">
                <a href="#" className="flex items-center gap-0.5">
                  <span className="hover:underline font-bold text-xl">
                    Home loans
                  </span>
                  <IconArrowRight />
                </a>
                <div className="space-y-0.5 my-2 flex flex-col items-start font-normal">
                  <a href="#">Upgrade and refinance</a>
                  <a href="#">Investment</a>
                  <a href="#">First home buyer</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-5 col-span-4 text-[#1a3b8e] pt-14">
              <img src={Static.insurance} className="size-[45px] object-fit" />
              <div className="px-7">
                <a href="#" className="flex items-center gap-0.5">
                  <span className="hover:underline font-bold text-xl">
                    Insurance
                  </span>
                  <IconArrowRight />
                </a>
                <div className="space-y-0.5 my-2 flex flex-col items-start font-normal">
                  <a href="#">Home</a>
                  <a href="#">Vehicle</a>
                  <a href="#">Travel</a>
                  <a href="#">Income</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-5 col-span-4 text-[#1a3b8e] pt-14">
              <img
                src={Static.personalLending}
                className="size-[45px] object-fit"
              />
              <div className="px-7">
                <a href="#" className="flex items-center gap-0.5">
                  <span className="hover:underline font-bold text-xl">
                    Bank accounts
                  </span>
                  <IconArrowRight />
                </a>
                <div className="space-y-0.5 my-2 flex flex-col items-start font-normal">
                  <a href="#">Personal loan</a>
                  <a href="#">Car loan</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-5 col-span-4 text-[#1a3b8e] pt-14">
              <img src={Static.calculator} className="size-[45px] object-fit" />
              <div className="px-7">
                <a href="#" className="flex items-center gap-0.5">
                  <span className="hover:underline font-bold text-xl">
                    Get help
                  </span>
                  <IconArrowRight />
                </a>
                <div className="space-y-0.5 my-2 flex flex-col items-start font-normal">
                  <a href="#">Calculators</a>
                  <a href="#">Interest rates and fees</a>
                  <a href="#">Forms and documents</a>
                  <a href="#">Join BankVic</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
