import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EFF7FF] pt-8 md:pt-[60px] px-4 md:px-[50px] pb-0 mb-0 rounded-t-[20px] md:rounded-t-[40px] overflow-hidden overflow-x-hidden max-w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-[15px] md:rounded-[30px] border border-[rgba(12,39,86,0.20)] shadow-[0_0_23.5px_0_rgba(0,0,0,0.10)] p-6 md:p-10 lg:p-[40px]">
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-[60px] mb-8 md:mb-12 lg:mb-[45px]">
            <div className="flex flex-col gap-4 md:gap-5 w-full lg:max-w-[350px]">
              <img src="/credsettle-logo-black.svg" alt="CredSettle Logo" className="w-20 md:w-24 lg:w-[110px] h-auto" />
              <p className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm leading-relaxed font-normal">
                Settle your loans and credit card debt easily with CredSettle. Get debt relief, loan waivers & protection from harassment by recovery agents in India.
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <FontAwesomeIcon 
                  icon={faXTwitter} 
                  className="text-[#0C2756] w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity" 
                />
                <FontAwesomeIcon 
                  icon={faFacebook} 
                  className="text-[#0C2756] w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity" 
                />
                <FontAwesomeIcon 
                  icon={faInstagram} 
                  className="text-[#0C2756] w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity" 
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-[60px] w-full lg:w-auto">
              <div className="flex flex-col gap-4 md:gap-5 min-w-0 sm:min-w-[90px]">
                <h3 className="text-[#0C2756] text-sm md:text-base font-bold leading-tight">
                  Company
                </h3>
                <div className="flex flex-col gap-2 md:gap-3">
                  <a href="/about" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">About Us</a>
                  <a href="/services" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Services</a>
                  <a href="/contact" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Contact Us</a>
                  <a href="/resources" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Blogs</a>
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-5 min-w-0 sm:min-w-[180px]">
                <h3 className="text-[#0C2756] text-sm md:text-base font-bold leading-tight">
                  Services
                </h3>
                <div className="flex flex-col gap-2 md:gap-3">
                  <a href="/services/personal-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Personal Loan</a>
                  <a href="/services/credit-card-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Credit Card</a>
                  <a href="/services/business-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Business Loan</a>
                  <a href="/services/car-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Car Loan</a>
                  <a href="/services/anti-harassment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Anti Harassment</a>
                  <a href="/services/credit-score-builder" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Credit Score Improvement</a>
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-5 min-w-0 sm:min-w-[200px]">
                <h3 className="text-[#0C2756] text-sm md:text-base font-bold leading-tight">
                  Contact
                </h3>
                <div className="flex flex-col gap-2 md:gap-3">
                  <p className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm font-normal leading-relaxed">
                    4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
                  </p>
                  <a href="#" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Terms & Conditions</a>
                  <a href="#" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-[rgba(12,39,86,0.20)] h-px mb-4 md:mb-6"></div>

          <p className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm font-normal leading-tight">
            © 2020 CredSettle
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-4 md:mt-8 mb-0 pb-0 relative overflow-hidden">
        <h2 
          className="text-center text-[clamp(48px,15vw,200px)] font-normal leading-none -mb-5 md:-mb-12 lg:-mb-[50px] overflow-hidden whitespace-normal break-words w-full max-w-full mx-auto px-4 select-none"
          style={{ 
            background: 'linear-gradient(180deg, #007AFF 0%, #EFF7FF 72.39%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block',
            height: 'auto',
            position: 'relative',
            bottom: 0,
            wordBreak: 'break-word',
            overflowWrap: 'anywhere',
            overflow: 'hidden'
          }}
        >
          CredSettle
        </h2>
      </div>
    </footer>
  );
}
