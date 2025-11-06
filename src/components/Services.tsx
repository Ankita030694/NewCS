import Link from 'next/link';

export default function Services() {
  return (
    <section className="w-full py-12 sm:px-4 overflow-x-hidden max-w-full">
      <div className="w-full max-w-7xl mx-auto">
        {/* Desktop Version - Top Section: Badge and Heading */}
        <div className="hidden md:flex justify-between items-start mb-8">
          {/* Left: Badge with Breathing Dot Inside */}
          <div 
            className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-3"
            style={{ 
              background: '#E9E9E9',
              color: '#0C2756'
            }}
          >
            {/* Breathing Blue Dot */}
            <div 
              className="rounded-full animate-pulse"
              style={{
                width: '12px',
                height: '12px',
                background: '#007AFF',
                animation: 'breathe 2s ease-in-out infinite'
              }}
            ></div>
            See All services
          </div>

          {/* Right: Heading and Description */}
          <div className="flex-1 ml-8">
            <h2 
              className="font-bold text-right text-3xl mb-3" 
              style={{ color: '#0C2756' }}
            >
              Our Comprehensive Debt <br /> Settlement Services
            </h2>
            <p 
              className="text-right text-base" 
              style={{ color: '#0C2756', opacity: 0.7 }}
            >
              Professional assistance to legally reduce <br /> harassment, handle recovery agents, and <br /> settle your outstanding debts.
            </p>
          </div>
        </div>

        {/* Mobile Version - Top Section: Badge and Heading */}
        <div className="flex md:hidden flex-col items-end mb-6 px-4">
          {/* Badge with Breathing Dot Inside */}
          <div 
            className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-3 mb-4"
            style={{ 
              background: '#E9E9E9',
              color: '#0C2756'
            }}
          >
            {/* Breathing Blue Dot */}
            <div 
              className="rounded-full animate-pulse"
              style={{
                width: '12px',
                height: '12px',
                background: '#007AFF',
                animation: 'breathe 2s ease-in-out infinite'
              }}
            ></div>
            See All services
          </div>

          {/* Right Aligned Heading and Description */}
          <div className="w-full text-right">
            <h2 
              className="font-bold text-right text-2xl mb-3" 
              style={{ color: '#0C2756' }}
            >
              Our Comprehensive Debt Settlement Services
            </h2>
            <p 
              className="text-right text-sm" 
              style={{ color: '#0C2756', opacity: 0.7 }}
            >
              Professional assistance to legally reduce harassment, handle recovery agents, and settle your outstanding debts.
            </p>
          </div>
        </div>

        {/* Desktop Version - Middle Section: Anti-Harassment (Left) + 3 Services (Right) */}
        <div className="hidden md:flex relative items-center mb-8" style={{ minHeight: '420px', gap: '80px' }}>
          {/* Left: Main Anti-Harassment Container */}
          <div 
            className="p-8 flex flex-col"
            style={{
              width: '52%',
              height: '420px',
              borderRadius: '40px',
              background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div className="flex-1">
              <h3 
                className="font-bold text-left text-2xl mb-4" 
                style={{ color: '#0C2756' }}
              >
                Stop Loan Recovery Agent Harassment – Protect Your Rights with CredSettle
              </h3>
              <p 
                className="text-left text-sm mb-4" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
              >
                Are you facing constant calls, threats, or home visits from loan recovery agents? At CredSettle, we provide India's leading Anti-Harassment Services designed to legally stop recovery agent harassment and protect your peace of mind.
              </p>
              <p 
                className="text-left text-sm" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
              >
                Our legal experts ensure that lenders and agents follow RBI recovery guidelines while helping you settle your loan safely and ethically.
              </p>
            </div>
            
            {/* View More Button - Bottom Right */}
            <div className="flex justify-end mt-6">
              <Link href = "/services/anti-harassment"> 
              <button 
                className="px-6 py-3 rounded-full text-sm font-medium text-white transition-colors duration-200 hover:opacity-90 flex items-center gap-2"
                style={{ background: '#007AFF' }}
              >
                View More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              </Link>
            </div>
          </div>

          {/* Right: 3 Service Containers in Column */}
          <div className="flex flex-col gap-2.5" style={{ flex: 1, height: '300px', position: 'relative', zIndex: 1 }}>
            {/* Service 1 */}
            <div 
              className="flex-1"
              style={{
                borderRadius: '30px',
                background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                padding: '16px'
              }}
            >
              <h4 
                className="font-bold text-left mb-1" 
                style={{ color: '#0C2756', fontSize: '14px' }}
              >
                Call Forwarding Services
              </h4>
              <p 
                className="text-left" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.3', fontSize: '12px' }}
              >
                Divert all recovery calls directly to our legal helpline.
              </p>
            </div>

            {/* Service 2 */}
            <div 
              className="flex-1"
              style={{
                borderRadius: '30px',
                background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                padding: '16px'
              }}
            >
              <h4 
                className="font-bold text-left mb-1" 
                style={{ color: '#0C2756', fontSize: '14px' }}
              >
                Complaint Filing
              </h4>
              <p 
                className="text-left" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.3', fontSize: '12px' }}
              >
                We file formal complaints with RBI, NCH, and Cyber Police against harassment.
              </p>
            </div>

            {/* Service 3 */}
            <div 
              className="flex-1"
              style={{
                borderRadius: '30px',
                background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                padding: '16px'
              }}
            >
              <h4 
                className="font-bold text-left mb-1" 
                style={{ color: '#0C2756', fontSize: '14px' }}
              >
                Cease & Desist Notices
              </h4>
              <p 
                className="text-left" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.3', fontSize: '12px' }}
              >
                Our legal team issues notices to stop illegal recovery activities immediately.
              </p>
            </div>
          </div>

          {/* Animated Connection Lines SVG */}
          <svg 
            className="absolute pointer-events-none" 
            style={{ 
              width: '80px', 
              height: '100%', 
              top: 0,
              left: '52%',
              zIndex: 20 
            }}
            viewBox="0 0 149 400"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Animated gradient - traveling blue wave from left to right */}
              <linearGradient id="flowGradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E6E6E6"/>
                <stop offset="0%" stopColor="#E6E6E6">
                  <animate attributeName="offset" values="-0.3;1" dur="3s" repeatCount="indefinite"/>
                </stop>
                <stop offset="15%" stopColor="#00B2F1">
                  <animate attributeName="offset" values="-0.15;1.15" dur="3s" repeatCount="indefinite"/>
                </stop>
                <stop offset="30%" stopColor="#E6E6E6">
                  <animate attributeName="offset" values="0;1.3" dur="3s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="#E6E6E6"/>
              </linearGradient>
            </defs>
            
            {/* Path to top container - curves upward to middle of top container */}
            <path
              d="M 0 200 H 50.6 C 66.6 200 79.6 187 79.6 171 V 120 C 79.6 110 92.6 100 108.6 100 H 149"
              stroke="url(#flowGradient)"
              strokeWidth="4"
              fill="none"
            />
            
            {/* Path to bottom container - curves downward to middle of bottom container */}
            <path
              d="M 0 200 H 50.6 C 66.6 200 79.6 213 79.6 229 V 280 C 79.6 290 92.6 300 108.6 300 H 149"
              stroke="url(#flowGradient)"
              strokeWidth="4"
              fill="none"
            />
            
            {/* Path to middle container - straight to middle of middle container */}
            <path
              d="M 0 200 H 149"
              stroke="url(#flowGradient)"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        {/* Mobile Version - Middle Section: Anti-Harassment Container in Middle */}
        <div className="block md:hidden mb-8 px-4 overflow-hidden">
          <div className="relative w-full max-w-full mx-auto">
            {/* Main Anti-Harassment Container */}
            <div
              className="relative flex flex-col p-5 w-full"
              style={{
                minHeight: '364px',
                borderRadius: '40px',
                background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
              }}
            >
              <div
                className="flex flex-col gap-[15px] w-full"
                style={{
                  minHeight: '279px'
                }}
              >
                <h3
                  className="font-medium w-full"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '22px',
                    letterSpacing: '0.18px'
                  }}
                >
                  Stop Loan Recovery Agent Harassment – Protect Your Rights with CredSettle
                </h3>
                <p
                  className="w-full"
                  style={{
                    color: 'rgba(12, 39, 86, 0.70)',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0.16px'
                  }}
                >
                  Are you facing constant calls, threats, or home visits from loan recovery agents? At CredSettle, we provide India's leading Anti-Harassment Services designed to legally stop recovery agent harassment and protect your peace of mind.
                  <br /><br />
                  Our legal experts ensure that lenders and agents follow RBI recovery guidelines while helping you settle your loan safely and ethically.
                </p>
              </div>

              <Link href="/services/anti-harassment" className="self-end mt-4">
                <div
                  className="flex flex-col items-start"
                  style={{
                    padding: '7px 14px',
                    gap: '10px',
                    borderRadius: '10px',
                    background: '#007AFF',
                    boxShadow: '0 1px 6.8px 0 rgba(0, 0, 0, 0.35), 0 -4px 4px 0 rgba(255, 255, 255, 0.10) inset, 0 4px 4px 0 rgba(255, 255, 255, 0.10) inset',
                    minWidth: '146px',
                    height: '35px'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        color: '#FFF',
                        fontFamily: 'Poppins',
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0.15px',
                        textAlign: 'center'
                      }}
                    >
                      View More
                    </span>
                    <svg width="14" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.3137 0.999123V10.6966M12.3137 0.999123H2.61623M12.3137 0.999123L0.999989 12.3128" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Services Container with SVG Lines */}
            <div
              className="relative w-full mt-4 pl-8"
              style={{
                minHeight: '331px'
              }}
            >
              {/* Connecting Lines SVG */}
              <svg
                className="absolute"
                style={{
                  width: '31px',
                  height: '100%',
                  left: '0px',
                  top: '0px'
                }}
                viewBox="0 0 32 285"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0V68C1 76.2843 7.71573 83 16 83H32" stroke="#0C2756" strokeOpacity="0.4" strokeWidth="2"/>
                <path d="M1 66V166C1 174.284 7.71573 181 16 181H32" stroke="#0C2756" strokeOpacity="0.4" strokeWidth="2"/>
                <path d="M1 149V269C1 277.284 7.71573 284 16 284H32" stroke="#0C2756" strokeOpacity="0.4" strokeWidth="2"/>
              </svg>

              {/* Service Cards */}
              <div
                className="flex justify-center items-center w-full mb-4"
                style={{
                  padding: '15px',
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '93px'
                }}
              >
                <p
                  className="w-full"
                  style={{
                    color: 'rgba(0, 0, 0, 0.70)',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px'
                  }}
                >
                  <span style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>Call Forwarding Services –</span>
                  {' '}
                  <span style={{ color: 'rgba(0, 0, 0, 0.70)' }}>Divert all recovery calls directly to our legal helpline.</span>
                </p>
              </div>

              <div
                className="flex justify-center items-center w-full mb-4"
                style={{
                  padding: '15px',
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '93px'
                }}
              >
                <p
                  className="w-full"
                  style={{
                    color: 'rgba(12, 39, 86, 0.70)',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px'
                  }}
                >
                  <span style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>Complaint Filing –</span>
                  {' '}
                  <span style={{ color: 'rgba(12, 39, 86, 0.70)' }}>We file formal complaints with RBI, NCH, and Cyber Police against harassment.</span>
                </p>
              </div>

              <div
                className="flex justify-center items-center w-full mb-4"
                style={{
                  padding: '15px',
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '94px'
                }}
              >
                <p
                  className="w-full"
                  style={{
                    color: 'rgba(12, 39, 86, 0.70)',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px'
                  }}
                >
                  <span style={{ fontSize: '16px', color: 'rgba(12, 39, 86, 1)' }}>Cease & Desist Notices</span>
                  <span style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}> –</span>
                  {' '}
                  <span style={{ color: 'rgba(12, 39, 86, 0.70)' }}>Our legal team issues notices to stop illegal recovery activities immediately.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version - Bottom Section: 2x3 Grid of Loan Settlement Services */}
        <div className="hidden md:grid grid-cols-3 gap-4 mb-8">
          {/* Personal Loan Settlement */}
          <Link href = "/services/personal-loan-settlement"> 
          <div 
            className="p-6 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-xl" 
                style={{ color: '#0C2756' }}
              >
                Personal Loan Settlement
              </h4>
              <img 
                src="/service1.png" 
                alt="Personal Loan Settlement" 
                style={{ width: '80px', height: '80px' }}
              />
            </div>
            <p 
              className="text-left text-sm flex-1" 
              style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
            >
              We recognize that life's financial challenges can be unpredictable. Our experts negotiate with lenders to secure manageable settlement plans for your unsecured personal loans.
            </p>
            <div className="flex justify-end mt-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>

          {/* Credit Card Settlement */}
          <Link href = "/services/credit-card-settlement"> 
          <div 
            className="p-6 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-xl" 
                style={{ color: '#0C2756' }}
              >
                Credit Card Settlement
              </h4>
              <img 
                src="/service2.png" 
                alt="Credit Card Settlement" 
                style={{ width: '80px', height: '80px' }}
              />
            </div>
            <p 
              className="text-left text-sm flex-1" 
              style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
            >
              Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.
            </p>
            <div className="flex justify-end mt-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>
          {/* Business Loan Settlement */}
          <Link href = "/services/business-loan-settlement"> 
          <div 
            className="p-6 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-xl" 
                style={{ color: '#0C2756' }}
              >
                Business Loan Settlement
              </h4>
              <img 
                src="/service3.png" 
                alt="Business Loan Settlement" 
                style={{ width: '80px', height: '80px' }}
              />
            </div>
            <p 
              className="text-left text-sm flex-1" 
              style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
            >
              Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.
            </p>
            <div className="flex justify-end mt-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>
          {/* Car Loan Settlement */}
          <Link href = "/services/car-loan-settlement"> 
          <div 
            className="p-6 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-xl" 
                style={{ color: '#0C2756' }}
              >
                Car Loan Settlement
              </h4>
              <img 
                src="/service4.png" 
                alt="Car Loan Settlement" 
                style={{ width: '80px', height: '80px' }}
              />
            </div>
            <p 
              className="text-left text-sm flex-1" 
              style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
            >
              Since car loans are secured, a default risks asset loss. We negotiate reduced balances and manageable payments, easing the fear of losing your vehicle while restoring stability.
            </p>
            <div className="flex justify-end mt-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>
          {/* App Loan Settlement */}
          <Link href = "/services/app-loan-settlement"> 
          <div 
            className="p-6 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-xl" 
                style={{ color: '#0C2756' }}
              >
                App Loan Settlement
              </h4>
              <img 
                src="/service5.png" 
                alt="App Loan Settlement" 
                style={{ width: '80px', height: '80px' }}
              />
            </div>
            <p 
              className="text-left text-sm flex-1" 
              style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
            >
              Stop aggressive, illegal harassment from digital lending apps immediately. We provide legal representation to secure a final, RBI-compliant One-Time Settlement (OTS).
            </p>
            <div className="flex justify-end mt-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>
          {/* NBFC Loan Settlement */}
          <Link href = "/services/nbfc-loan-settlement"> 
          <div 
            className="p-6 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-xl" 
                style={{ color: '#0C2756' }}
              >
                NBFC Loan Settlement
              </h4>
              <img 
                src="/service6.png" 
                alt="NBFC Loan Settlement" 
                style={{ width: '80px', height: '80px' }}
              />
            </div>
            <p 
              className="text-left text-sm flex-1" 
              style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
            >
              Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.
            </p>
            <div className="flex justify-end mt-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>
        </div>

        {/* Mobile Version - Bottom Section: Single Column of Loan Settlement Services */}
        <div className="block md:hidden flex flex-col gap-4 mb-8 px-4">
          {/* Personal Loan Settlement */}
          <Link href = "/services/personal-loan-settlement"> 
          <div 
            className="p-5 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-lg" 
                style={{ color: '#0C2756' }}
              >
                Personal Loan Settlement
              </h4>
              <img 
                src="/service1.png" 
                alt="Personal Loan Settlement" 
                style={{ width: '60px', height: '60px' }}
              />
            </div>
            <div className="flex-1 mb-3">
              <p 
                className="text-left text-sm" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5' }}
              >
                We recognize that life's financial challenges can be unpredictable. Our experts negotiate with lenders to secure manageable settlement plans for your unsecured personal loans.
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>

          {/* Credit Card Settlement */}
          <Link href = "/services/credit-card-settlement"> 
          <div 
            className="p-5 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-lg" 
                style={{ color: '#0C2756' }}
              >
                Credit Card Settlement
              </h4>
              <img 
                src="/service2.png" 
                alt="Credit Card Settlement" 
                style={{ width: '60px', height: '60px' }}
              />
            </div>
            <div className="flex-1 mb-3">
              <p 
                className="text-left text-sm" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5' }}
              >
                Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>

          {/* Business Loan Settlement */}
          <Link href = "/services/business-loan-settlement"> 
          <div 
            className="p-5 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-lg" 
                style={{ color: '#0C2756' }}
              >
                Business Loan Settlement
              </h4>
              <img 
                src="/service3.png" 
                alt="Business Loan Settlement" 
                style={{ width: '60px', height: '60px' }}
              />
            </div>
            <div className="flex-1 mb-3">
              <p 
                className="text-left text-sm" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5' }}
              >
                Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>

          {/* Car Loan Settlement */}
          <Link href = "/services/car-loan-settlement"> 
          <div 
            className="p-5 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-lg" 
                style={{ color: '#0C2756' }}
              >
                Car Loan Settlement
              </h4>
              <img 
                src="/service4.png" 
                alt="Car Loan Settlement" 
                style={{ width: '60px', height: '60px' }}
              />
            </div>
            <div className="flex-1 mb-3">
              <p 
                className="text-left text-sm" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5' }}
              >
                Since car loans are secured, a default risks asset loss. We negotiate reduced balances and manageable payments, easing the fear of losing your vehicle while restoring stability.
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>

          {/* App Loan Settlement */}
          <Link href = "/services/app-loan-settlement"> 
          <div 
            className="p-5 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-lg" 
                style={{ color: '#0C2756' }}
              >
                App Loan Settlement
              </h4>
              <img 
                src="/service5.png" 
                alt="App Loan Settlement" 
                style={{ width: '60px', height: '60px' }}
              />
            </div>
            <div className="flex-1 mb-3">
              <p 
                className="text-left text-sm" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5' }}
              >
                Stop aggressive, illegal harassment from digital lending apps immediately. We provide legal representation to secure a final, RBI-compliant One-Time Settlement (OTS).
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>

          {/* NBFC Loan Settlement */}
          <Link href = "/services/nbfc-loan-settlement"> 
          <div 
            className="p-5 relative"
            style={{
              borderRadius: '40px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 
                className="font-bold text-left text-lg" 
                style={{ color: '#0C2756' }}
              >
                NBFC Loan Settlement
              </h4>
              <img 
                src="/service6.png" 
                alt="NBFC Loan Settlement" 
                style={{ width: '60px', height: '60px' }}
              />
            </div>
            <div className="flex-1 mb-3">
              <p 
                className="text-left text-sm" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5' }}
              >
                Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#007AFF' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          </Link>
        </div>

        {/* Section Heading */}
        <div className="mb-6">
          <h2 
            className="font-bold text-center text-2xl md:text-4xl py-4 md:py-8" 
            style={{ color: '#0C2756', fontWeight: 500 }}
          >
            Improve your Credit Score
          </h2>
        </div>

        {/* Desktop Version - Credit Score Container */}
        <Link href = "/services/credit-score-builder" className="hidden md:block"> 
        <div 
          className="p-8 flex items-center gap-8 relative"
          style={{
            borderRadius: '40px',
            background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
            boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
          }}
        >
          {/* Left: Credit Score Image */}
          <img 
            src="/creditscore.png" 
            alt="Credit Score" 
            style={{ width: '300px', height: 'auto' }}
          />

          {/* Right: Content */}
          <div className="flex-1 flex flex-col h-full">
            <div className="flex-1">
              <h3 
                className="font-bold text-left text-2xl mb-4" 
                style={{ color: '#0C2756' }}
              >
                Boost Your Credit Score Now
              </h3>
              <p 
                className="text-left text-base" 
                style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
              >
                Ready for real improvement? Our service gives you the advantage. We quickly analyze your report, fix errors with targeted disputes, and teach you the best ways to keep your score high. Start your journey to a better financial future today.
              </p>
            </div>
            
            {/* View More Button - Bottom Right */}
            <div className="flex justify-end mt-6">
              <button 
                className="px-6 py-3 rounded-full text-sm font-medium text-white transition-colors duration-200 hover:opacity-90 flex items-center gap-2"
                style={{ background: '#007AFF' }}
              >
                View More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        </Link>

        {/* Mobile Version - Credit Score Container */}
        <Link href = "/services/credit-score-builder" className="block md:hidden px-4"> 
        <div 
          className="p-5 relative w-full overflow-hidden"
          style={{
            borderRadius: '40px',
            background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
            boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div className="flex items-start justify-between mb-3 gap-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <h3 
                className="font-bold text-left text-lg mb-2" 
                style={{ color: '#0C2756', textAlign: 'center' }}
              >
                Boost Your Credit Score Now
              </h3>
            </div>
            <img 
              src="/creditscore.png" 
              alt="Credit Score" 
              // Reduced image size by 20%: max-w-[240px] (was 300px), sm:max-w-[48px] (was 60px)
              style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain', flexShrink: 0 }}
              className="max-w-[240px] sm:max-w-[48px]"
            />
          </div>
          <div className="flex-1 mb-3">
            <p 
              className="text-left text-sm" 
              style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5' }}
            >
              Ready for real improvement? Our service gives you the advantage. We quickly analyze your report, fix errors with targeted disputes, and teach you the best ways to keep your score high.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <button 
              className="px-6 py-3 rounded-full text-sm font-medium text-white transition-colors duration-200 hover:opacity-90 flex items-center gap-2"
              style={{ background: '#007AFF' }}
            >
              View More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        </Link>
      </div>
    </section>
  );
}
