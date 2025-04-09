import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#2a2fcf] text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div>
            <p className="text-xs uppercase">Support</p>
            <h2 className="text-2xl font-bold mt-1">
              Need help? <span className="font-extrabold">Talk to us</span>
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
            <div className="flex space-x-4">
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
            <p className="font-semibold mb-2">Our Story</p>
            <ul className="space-y-1">
              <li>Why BankVic?</li>
              <li>Our Community</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Our Products</p>
            <ul className="space-y-1">
              <li>Banking</li>
              <li>Saving</li>
              <li>Home Buying</li>
              <li>Insurance</li>
              <li>Banking app</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Rates & Fees</p>
            <ul className="space-y-1">
              <li>Interest rates</li>
              <li>Fees</li>
              <li>Calculators</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Get Help</p>
            <ul className="space-y-1">
              <li>FAQs</li>
              <li>Forms & Documents</li>
              <li>Financial Hardship</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Legal Stuff</p>
            <ul className="space-y-1">
              <li>Corporate Governance</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Terms of Use</li>
              <li>Complaints and Disputes</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10 text-xs">
          <p>
            &copy; 2025 Police Financial Services Limited ABN 33 087 651 661 -
            trading as BankVic | AFSL and Australian Credit Licence 240293.
          </p>
        </div>
      </div>
    </footer>
  );
}
