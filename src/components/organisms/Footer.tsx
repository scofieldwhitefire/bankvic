import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#2a2fcf] text-white px-6 py-10 text-sm">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-10">
            <div>
              <p className="text-sm uppercase">Support</p>
              <h2 className="relative text-3xl font-bold mt-1">
                Need help? <span className="font-extrabold">Talk to us</span>
                <span className="absolute top-0 -left-5 text-orange-500">
                  /
                </span>
              </h2>
              <p className="mt-3">Our team is here to help you.</p>
              <p>Mon to Fri, 8am to 6pm (AEST)</p>
            </div>

            <div className="mt-6 md:mt-0 flex flex-col gap-3">
              <p>
                <span className="font-semibold">Call us:</span> 13 63 73
              </p>
              <p>
                <span className="font-semibold">Email us</span>
              </p>
              <p>
                <span className="font-semibold">Address:</span> Level 8,
                <br />
                505 Little Collins Street,
                <br />
                Melbourne VIC 3000
              </p>
              <p>
                <span className="font-semibold">Find a branch or ATM</span>
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <p className="font-semibold mb-2">Connect with us</p>
              <div className="flex space-x-4 items-center">
                <FaInstagram className="text-white text-2xl" />
                <FaFacebookF className="text-white text-2xl" />
                <FaLinkedinIn className="text-white text-2xl" />
                <FaYoutube className="text-white text-2xl" />
              </div>
            </div>
          </div>

          <hr className="border-gray-400 my-6" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
            <div>
              <p className="font-bold text-xl mb-2">Our Story</p>
              <ul className="space-y-1 font-normal text-lg">
                <li>Why BankVic?</li>
                <li>Our Community</li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">Our Products</p>
              <ul className="space-y-1 font-normal text-lg">
                <li>Banking</li>
                <li>Saving</li>
                <li>Home Buying</li>
                <li>Insurance</li>
                <li>Banking app</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">Rates & Fees</p>
              <ul className="space-y-1 font-normal text-lg">
                <li>Interest rates</li>
                <li>Fees</li>
                <li>Calculators</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">Get Help</p>
              <ul className="space-y-1 font-normal text-lg">
                <li>FAQs</li>
                <li>Forms & Documents</li>
                <li>Financial Hardship</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">Legal Stuff</p>
              <ul className="space-y-1 font-normal text-lg">
                <li>Corporate Governance</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Terms of Use</li>
                <li>Complaints and Disputes</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10 text-xs">
            <p className="text-base font-semibold">
              &copy; 2025 Police Financial Services Limited ABN 33 087 651 661 -
              trading as BankVic | AFSL and Australian Credit Licence 240293.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
