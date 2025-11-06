'use client';

export default function AboutUsSection() {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24 py-6 sm:py-8 md:py-12 overflow-x-hidden">
        {/* About Us Heading */}
        <h2 
          className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4" 
          style={{color: '#0C2756'}}
        >
          About Us
        </h2>
          {/* Bottom Heading */}
          <h5 
          className="font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-sm sm:text-base md:text-lg" 
          style={{color: '#0C2756'}}
        >
          See How CredSettle Turns Debt into a Done Deal.
        </h5>

        {/* 3 Cards Grid - CURRENT VERSION (COMMENTED) */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6 -mt-2 sm:-mt-3">
          <div 
            className="relative overflow-hidden p-5 sm:p-6 md:p-7 min-h-[255px] sm:min-h-[300px] md:min-h-[360px] md:max-h-[450px]"
            style={{
              borderRadius: '32px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
            }}
          >
            <div className="pb-24 sm:pb-28 md:pb-32" style={{ position: 'relative', zIndex: 1 }}>
              <h3 
                className="font-semibold text-gray-900 text-lg sm:text-xl md:text-xl mb-3 sm:mb-4" 
                style={{ lineHeight: '1.3' }}
              >
                Facing Overwhelming Debt?<br />
                You're Not Alone
              </h3>
              <p 
                className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed mb-3.5" 
              >
                At CredSettle, we specialize in providing professional, legal loan settlement solutions that directly address your financial stress. Our mission is to help you significantly reduce your outstanding credit card debt and personal loan dues through expert negotiation and RBI-compliant processes.
              </p>
            </div>
            <img 
              src="/about1.png" 
              alt="Debt Settlement Services" 
              className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-52 h-auto"
            />
          </div>

          <div 
            className="relative overflow-hidden p-5 sm:p-6 md:p-7 min-h-[255px] sm:min-h-[330px] md:min-h-[360px] md:max-h-[450px]"
            style={{
              borderRadius: '32px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
            }}
          >
            <div className="pb-24 sm:pb-28 md:pb-32" style={{ position: 'relative', zIndex: 1 }}>
              <h3 
                className="font-semibold text-gray-900 text-lg sm:text-xl md:text-xl mb-3 sm:mb-4" 
                style={{ lineHeight: '1.3' }}
              >
                Our RBI-Compliant Process:<br />
                Trust and Security
              </h3>
              <p 
                className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed mb-3.5" 
              >
                As India's most trusted loan settlement company, we negotiate directly with banks, NBFCs, and financial institutions on your behalf. Our entire framework strictly adheres to all RBI guidelines and regulatory compliance standards, ensuring every settlement is legally sound and ethically managed.
              </p>
            </div>
            <img 
              src="/about2.png" 
              alt="RBI Compliant Loan Settlement" 
              className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-52 h-auto"
            />
          </div>

          <div 
            className="relative overflow-hidden p-5 sm:p-6 md:p-7 min-h-[255px] sm:min-h-[330px] md:min-h-[360px] md:max-h-[450px]"
            style={{
              borderRadius: '32px',
              background: '#EFF7FF',
              boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
            }}
          >
            <div className="pb-24 sm:pb-28 md:pb-32" style={{ position: 'relative', zIndex: 1 }}>
              <h3 
                className="font-semibold text-gray-900 text-lg sm:text-xl md:text-xl mb-3 sm:mb-4" 
                style={{ lineHeight: '1.3' }}
              >
                Your Fast Track to<br />
                Debt Freedom
              </h3>
              <p 
                className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed mb-3.5" 
              >
                Our expert team of debt settlement specialists is dedicated to helping you close your loans peacefully and rebuild your financial life. We fast-track your debt resolution with proven strategies that have helped thousands achieve financial freedom and eliminate stress.
              </p>
            </div>
            <img 
              src="/about3.png" 
              alt="Fast Debt Relief Solutions" 
              className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-52 h-auto"
            />
          </div>
        </div> */}

        {/* NEW BREATHTAKING CARDS DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8 md:mb-10 -mt-2 sm:-mt-3">
          {/* Card 1 - Gradient with Glassmorphism */}
          <div 
            className="group relative overflow-hidden p-6 sm:p-7 md:p-8 min-h-[280px] sm:min-h-[320px] md:min-h-[380px] transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
            style={{
              borderRadius: '32px',
              background: 'linear-gradient(135deg, #EFF7FF 0%, #D4F1F4 50%, #B8E6D3 100%)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 8px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 8px rgba(0, 0, 0, 0.04)';
            }}
          >
            {/* Animated background gradient overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 195, 0.1) 100%)',
                borderRadius: '32px',
              }}
            />
            
            {/* Decorative corner accent */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(79, 172, 254, 0.3) 0%, transparent 70%)',
                borderRadius: '0 32px 0 100%',
              }}
            />

            <div className="relative z-10 pb-24 sm:pb-28 md:pb-32">
              <h3 
                className="font-bold text-gray-900 text-xl sm:text-2xl md:text-2xl mb-4 sm:mb-5 transition-colors duration-300 group-hover:text-[#0C2756]" 
                style={{ lineHeight: '1.3' }}
              >
                Facing Overwhelming Debt?<br />
                <span className="text-[#0C2756]">You're Not Alone</span>
              </h3>
              <p 
                className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed mb-4 transition-all duration-300 group-hover:text-gray-800" 
              >
                At CredSettle, we specialize in providing professional, legal loan settlement solutions that directly address your financial stress. Our mission is to help you significantly reduce your outstanding credit card debt and personal loan dues through expert negotiation and RBI-compliant processes.
              </p>
            </div>
            
            {/* Enhanced image with hover effect */}
            <img 
              src="/about1.png" 
              alt="Debt Settlement Services" 
              className="absolute bottom-0 right-0 w-36 sm:w-44 md:w-56 h-auto transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2 group-hover:-translate-y-2"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))' }}
            />
          </div>

          {/* Card 2 - Enhanced with shimmer effect */}
          <div 
            className="group relative overflow-hidden p-6 sm:p-7 md:p-8 min-h-[280px] sm:min-h-[320px] md:min-h-[380px] transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
            style={{
              borderRadius: '32px',
              background: 'linear-gradient(135deg, #EFF7FF 0%, #E8F5E9 50%, #F1F8E9 100%)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 8px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 8px rgba(0, 0, 0, 0.04)';
            }}
          >
            {/* Animated shimmer overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(139, 195, 74, 0.1) 100%)',
                borderRadius: '32px',
              }}
            />
            
            {/* Decorative corner accent */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(76, 175, 80, 0.3) 0%, transparent 70%)',
                borderRadius: '0 32px 0 100%',
              }}
            />

            <div className="relative z-10 pb-24 sm:pb-28 md:pb-32">
              <h3 
                className="font-bold text-gray-900 text-xl sm:text-2xl md:text-2xl mb-4 sm:mb-5 transition-colors duration-300 group-hover:text-[#0C2756]" 
                style={{ lineHeight: '1.3' }}
              >
                Our RBI-Compliant Process:<br />
                <span className="text-[#0C2756]">Trust and Security</span>
              </h3>
              <p 
                className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed mb-4 transition-all duration-300 group-hover:text-gray-800" 
              >
                As India's most trusted loan settlement company, we negotiate directly with banks, NBFCs, and financial institutions on your behalf. Our entire framework strictly adheres to all RBI guidelines and regulatory compliance standards, ensuring every settlement is legally sound and ethically managed.
              </p>
            </div>
            
            {/* Enhanced image with hover effect */}
            <img 
              src="/about2.png" 
              alt="RBI Compliant Loan Settlement" 
              className="absolute bottom-0 right-0 w-36 sm:w-44 md:w-56 h-auto transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2 group-hover:-translate-y-2"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))' }}
            />
          </div>

          {/* Card 3 - Premium gradient design */}
          <div 
            className="group relative overflow-hidden p-6 sm:p-7 md:p-8 min-h-[280px] sm:min-h-[320px] md:min-h-[380px] transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
            style={{
              borderRadius: '32px',
              background: 'linear-gradient(135deg, #EFF7FF 0%, #FFF3E0 50%, #FFE0B2 100%)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 8px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 8px rgba(0, 0, 0, 0.04)';
            }}
          >
            {/* Animated background gradient overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 152, 0, 0.1) 100%)',
                borderRadius: '32px',
              }}
            />
            
            {/* Decorative corner accent */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(255, 193, 7, 0.3) 0%, transparent 70%)',
                borderRadius: '0 32px 0 100%',
              }}
            />

            <div className="relative z-10 pb-24 sm:pb-28 md:pb-32">
              <h3 
                className="font-bold text-gray-900 text-xl sm:text-2xl md:text-2xl mb-4 sm:mb-5 transition-colors duration-300 group-hover:text-[#0C2756]" 
                style={{ lineHeight: '1.3' }}
              >
                Your Fast Track to<br />
                <span className="text-[#0C2756]">Debt Freedom</span>
              </h3>
              <p 
                className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed mb-4 transition-all duration-300 group-hover:text-gray-800" 
              >
                Our expert team of debt settlement specialists is dedicated to helping you close your loans peacefully and rebuild your financial life. We fast-track your debt resolution with proven strategies that have helped thousands achieve financial freedom and eliminate stress.
              </p>
            </div>
            
            {/* Enhanced image with hover effect */}
            <img 
              src="/about3.png" 
              alt="Fast Debt Relief Solutions" 
              className="absolute bottom-0 right-0 w-36 sm:w-44 md:w-56 h-auto transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2 group-hover:-translate-y-2"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))' }}
            />
          </div>
        </div>

        {/* Bottom Card with Guidelines - CURRENT VERSION (COMMENTED) */}
        {/* <div 
          className="overflow-hidden rounded-3xl sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-6 md:p-6"
          style={{
            background: '#EFF7FF',
            boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
          }}
        >
          <h3 
            className="font-semibold text-center text-gray-900 mb-4 sm:mb-5 md:mb-6 text-lg sm:text-xl md:text-[22px]" 
            style={{ fontWeight: 500 }}
          >
            We work with the guidelines of
          </h3>
          <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-4 sm:gap-5 md:gap-6 place-items-center">
            <img 
              src="/guideline1.svg" 
              alt="RBI Guidelines Compliance" 
              className="w-full max-w-[70px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] h-auto"
            />
            <img 
              src="/guideline2.svg" 
              alt="Financial Regulations Compliance" 
              className="w-full max-w-[70px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] h-auto"
            />
            <img 
              src="/guideline3.svg" 
              alt="Legal Compliance Standards" 
              className="w-full max-w-[70px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] h-auto"
            />
            <img 
              src="/guideline4.svg" 
              alt="Banking Regulations Compliance" 
              className="w-full max-w-[70px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] h-auto"
            />
            <img 
              src="/guideline5.svg" 
              alt="Consumer Protection Guidelines" 
              className="w-full max-w-[70px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] h-auto"
            />
            <img 
              src="/guideline6.svg" 
              alt="Debt Settlement Regulations" 
              className="w-full max-w-[70px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] h-auto"
            />
          </div>
        </div> */}

        {/* NEW ENHANCED BOTTOM CARD WITH GUIDELINES */}
        <div 
          className="group relative overflow-hidden rounded-3xl sm:rounded-[28px] md:rounded-[32px] p-6 sm:p-7 md:p-8 transition-all duration-500 ease-out hover:scale-[1.01]"
          style={{
            background: 'linear-gradient(135deg, #EFF7FF 0%, #F5F5F5 50%, #FAFAFA 100%)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 8px rgba(0, 0, 0, 0.04)';
          }}
        >
          {/* Animated background overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(12, 39, 86, 0.03) 0%, rgba(79, 172, 254, 0.03) 100%)',
              borderRadius: '32px',
            }}
          />

          <div className="relative z-10">
            <h3 
              className="font-bold text-center text-gray-900 mb-6 sm:mb-7 md:mb-8 text-xl sm:text-2xl md:text-2xl transition-colors duration-300 group-hover:text-[#0C2756]" 
              style={{ fontWeight: 600 }}
            >
              We work with the guidelines of
            </h3>
            <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-6 sm:gap-7 md:gap-8 place-items-center">
              {[
                { src: '/guideline1.svg', alt: 'RBI Guidelines Compliance' },
                { src: '/guideline2.svg', alt: 'Financial Regulations Compliance' },
                { src: '/guideline3.svg', alt: 'Legal Compliance Standards' },
                { src: '/guideline4.svg', alt: 'Banking Regulations Compliance' },
                { src: '/guideline5.svg', alt: 'Consumer Protection Guidelines' },
                { src: '/guideline6.svg', alt: 'Debt Settlement Regulations' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="transition-all duration-300 hover:scale-110 hover:rotate-3"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))' }}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full max-w-[70px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] h-auto transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}

