import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
                <a href="https://www.linkedin.com/company/credsettle/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[#0C2756] w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </a>
                <a href="https://www.facebook.com/people/CredSettle/61572589389799/">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[#0C2756] w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </a>
                <a href="https://www.instagram.com/credsettle/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#0C2756] w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </a>
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
                  <a href="/resources" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Resources</a>
                  <a href="/loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement</a>

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
                  <a href="https://maps.app.goo.gl/Uqcz1TTYyiqjcQC7A" target="_blank" rel="noopener noreferrer">
                    <p className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm font-normal leading-relaxed hover:text-[#0C2756] transition-colors">
                      4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
                    </p>
                  </a>

                  <a href="/terms-and-conditions" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Terms & Conditions</a>
                  <a href="/privacy-policy" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 mb-8 border-t border-[rgba(12,39,86,0.10)] pt-8">
            <h3 className="text-[#0C2756] text-sm md:text-base font-bold leading-tight">
              Queries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <a href="/cheque-bounce-case-in-kolkata" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Cheque Bounce Case in Kolkata</a>
              <a href="/cheque-bounce-case-in-ahmedabad" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Cheque Bounce Case in Ahmedabad</a>
              <a href="/cheque-bounce-case-in-delhi" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Cheque Bounce Case in Delhi</a>
              <a href="/cheque-bounce-case-in-noida" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Cheque Bounce Case in Noida</a>
              <a href="/how-to-handle-recovery-agent-harrasement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Handle Recovery Agent Harassment</a>
              <a href="/bank-calling-references-and-family-members" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Calling References & Family Members</a>
              <a href="/can-i-settle-loan-for-free" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Settle Loan for Free</a>
              <a href="/can-I-settle-my-home-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Settle My Home Loan</a>
              <a href="/what-kind-of-loans-can-not-be-settled" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What Kind of Loans Can Not Be Settled</a>
              <a href="/what-are-the-consequences-of-not-paying-emi" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Consequences of Not Paying EMI</a>
              <a href="/what-is-the-best-way-to-negotiate-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is the Best Way to Negotiate Loan Settlement</a>
              <a href="/how-to-ask-bank-for-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Ask Bank for Settlement</a>
              <a href="/how-to-handle-recovery-agent-harrasement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Handle Recovery Agent Harassment</a>
              <a href="/how-to-stop-recovery-agent-home-visit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Stop Recovery Agent Home Visit</a>
              <a href="/how-to-stop-recovery-agent-harassment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Stop Recovery Agent Harassment</a>
              <a href="/does-loan-settlement-affect-cibil" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Does Loan Settlement Affect CIBIL</a>
              <a href="/is-loan-settlement-a-good-option" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is Loan Settlement a Good Option</a>
              <a href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is Loan Settlement and How Does it Work in India</a>
              <a href="/what-are-the-advantages-and-disadvantages-of-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Advantages and Disadvantages of Loan Settlement</a>
              <a href="/how-does-loan-settlement-affect-your-financial-health-in-long-term" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Long-Term Impact of Loan Settlement</a>
              <a href="/bajaj-finance-recovery-agent-harrasement-home-visit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bajaj Finance Recovery Agent Harassment Home Visit</a>
              <a href="/rbl-bank-harrasement-home-visit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">RBL Bank Harassment Home Visit</a>
              <a href="/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Steps Before Negotiating Loan Settlement</a>
            </div>
          </div>

          <div className="w-full bg-[rgba(12,39,86,0.20)] h-px mb-4 md:mb-6"></div>

          <p className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm font-normal leading-tight">
            © 2020 CredSettle
          </p>
        </div>
      </div>

      <div className="w-full mt-4 md:mt-8 mb-0 pb-0 relative overflow-hidden">
        <h2
          className="text-center text-[clamp(58px,16vw,350px)] font-normal leading-none -mb-5 md:-mb-12 lg:-mb-[50px] overflow-hidden whitespace-normal break-words w-full max-w-full mx-auto px-4 select-none"
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
