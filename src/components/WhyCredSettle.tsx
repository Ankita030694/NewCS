export default function WhyCredSettle() {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto py-7 px-4 md:px-0 overflow-x-hidden">
        {/* Main Heading */} 
        <h2 
          className="font-bold text-left text-3xl mb-2" 
          style={{color: '#0C2756'}}
        >
          Why CredSettle is India's Most<br className="hidden md:inline" /> Trusted Loan Settlement Company
        </h2>
        
        {/* Subheading */}
        <h3 
          className="font-semibold text-left mb-2 text-base" 
          style={{color: '#0C2756'}}
        >
          Save 50% or More on Your Outstanding Debts <br className="hidden md:inline" /> and Achieve Legal Protection.
        </h3>
        
        {/* Description */}
        <p 
          className="text-left mb-5 text-sm" 
          style={{color: '#0C2756', opacity: 0.7}}
        >
          Settle your loans safely under RBI rules. Our legal team handles recovery calls and negotiates big savings for you.
        </p>

        {/* Desktop Version */}
        <div className="hidden md:block">
          {/* Three Column Layout */}
          <div className="flex gap-3" style={{ height: '468px' }}>
            {/* Column 1 - 50% width, 2 rows */}
            <div className="flex flex-col gap-3" style={{ width: '50%', height: '100%' }}>
              {/* Row 1 - Text left, Image right */}
              <div 
                className="flex items-center justify-between overflow-hidden flex-1"
                style={{
                  borderRadius: '27px',
                  background: '#EFF7FF',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  padding: '25px'
                }}
              >
                <div style={{ flex: 1, paddingRight: '18px' }}>
                  <h4 
                    className="font-bold text-left mb-2" 
                    style={{ fontSize: '22px', color: '#0C2756' }}
                  >
                    RBI-Compliant Process
                  </h4>
                  <p 
                    className="text-left" 
                    style={{ fontSize: '14px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6' }}
                  >
                    We follow Reserve Bank of India rules for debt settlement. Every step is safe, lawful, and clear.
                  </p>
                </div>
                  <img 
                  src="/why1.png" 
                  alt="RBI Compliant Process" 
                  style={{ 
                    maxWidth: '126px',
                    height: 'auto',
                    flexShrink: 0
                  }}
                />
              </div>

              {/* Row 2 - Text left, Image right */}
              <div 
                className="flex items-center justify-between overflow-hidden flex-1"
                style={{
                  borderRadius: '27px',
                  background: '#EFF7FF',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  padding: '25px'
                }}
              >
                <div style={{ flex: 1, paddingRight: '18px' }}>
                  <h4 
                    className="font-bold text-left mb-2" 
                    style={{ fontSize: '22px', color: '#0C2756' }}
                  >
                    Expert Negotiation
                  </h4>
                  <p 
                    className="text-left" 
                    style={{ fontSize: '14px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6' }}
                  >
                    Our legal team negotiates with banks to cut your debt by up to 70%. We get you the lowest one-time payment.
                  </p>
                </div>
                <img 
                  src="/why2.png" 
                  alt="Expert Negotiation" 
                  style={{ 
                    maxWidth: '126px',
                    height: 'auto',
                    flexShrink: 0
                  }}
                />
              </div>
            </div>

            {/* Column 2 - 20% width, single card spanning full height */}
            <div style={{ width: '25%', height: '100%' }}>
              <div 
                className="flex flex-col overflow-hidden h-full"
                style={{
                  borderRadius: '27px',
                  background: '#EFF7FF',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  padding: '0'
                }}
              >
                <img 
                  src="/why3.png" 
                  alt="Expert Legal Team" 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    maxHeight: '234px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '25px' }}>
                  <h4 
                    className="font-bold text-left mb-2" 
                    style={{ fontSize: '22px', color: '#0C2756' }}
                  >
                    Expert Legal Team
                  </h4>
                  <p 
                    className="text-left" 
                    style={{ fontSize: '14px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6' }}
                  >
                    Your case is run by qualified advocates and debt experts. This ensures big savings and total legal safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 - 30% width, 2 rows */}
            <div className="flex flex-col gap-3" style={{ width: '30%', height: '100%' }}>
              {/* Row 1 - Image left, Heading right, Text below both */}
              <div 
                className="overflow-hidden flex-1"
                style={{
                  borderRadius: '27px',
                  background: '#EFF7FF',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  padding: '0'
                }}
              >
                {/* Top row: Image left, Heading right */}
                <div className="flex items-start justify-between" style={{ padding: '0 0 7px 0', margin: '0' }}>
                  <img 
                    src="/why4.png" 
                    alt="Zero Harassment" 
                    style={{ 
                      maxWidth: '102px',
                      height: 'auto',
                      flexShrink: 0,
                      margin: '0',
                      padding: '0',
                      display: 'block'
                    }}
                  />
                  <h4 
                    className="font-bold mr-4 mt-4 text-right" 
                    style={{ fontSize: '22px', color: '#0C2756'}}
                  >
                    Zero Harassment Policy
                  </h4>
                </div>
                {/* Text below both */}
                <p 
                  className="text-right p-4" 
                  style={{ fontSize: '14px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6'}}
                >
                  We step in legally to stop rude recovery calls and home visits. Your peace of mind comes first.
                </p>
              </div>

              {/* Row 2 - Image left, Heading right, Text below both */}
              <div 
                className="overflow-hidden flex-1"
                style={{
                  borderRadius: '27px',
                  background: '#EFF7FF',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  padding: '0'
                }}
              >
                {/* Top row: Image left, Heading right */}
                <div className="flex items-start justify-between" style={{ padding: '0 0 7px 0', margin: '0' }}>
                  <img 
                    src="/why5.png" 
                    alt="Peace of Mind" 
                    style={{ 
                      maxWidth: '102px',
                      height: 'auto',
                      flexShrink: 0,
                      margin: '0',
                      padding: '0',
                      display: 'block'
                    }}
                  />
                  <h4 
                    className="font-bold mr-4 mt-4 text-right" 
                    style={{ fontSize: '22px', color: '#0C2756'}}
                  >
                    Transparent Fees & CIBIL Support
                  </h4>
                </div>
                {/* Text below both */}
                <p 
                  className="text-right p-4" 
                  style={{ fontSize: '14px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6'}}
                >
                  Rebuild your credit with clear terms and no hidden fees. We do all the legal paperwork for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="block md:hidden">
          {/* Single Column Layout */}
          <div className="flex flex-col gap-4">
            {/* Service 1 - RBI-Compliant Process */}
            <div 
              className="relative overflow-hidden"
              style={{
                borderRadius: '27px',
                background: '#EFF7FF',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                padding: '20px',
                minHeight: '200px'
              }}
            >
              <div className="pr-20 mb-2">
                <h4 
                  className="font-bold text-left mb-2" 
                  style={{ fontSize: '18px', color: '#0C2756' }}
                >
                  RBI-Compliant Process
                </h4>
                <p 
                  className="text-left" 
                  style={{ fontSize: '13px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6' }}
                >
                  We follow Reserve Bank of India rules for debt settlement. Every step is safe, lawful, and clear.
                </p>
              </div>
              <img 
                src="/why1.png" 
                alt="RBI Compliant Process" 
                className="absolute bottom-0 right-0"
                style={{ 
                  width: '100px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Service 2 - Expert Negotiation */}
            <div 
              className="relative overflow-hidden"
              style={{
                borderRadius: '27px',
                background: '#EFF7FF',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                padding: '20px',
                minHeight: '200px'
              }}
            >
              <div className="pr-20 mb-2">
                <h4 
                  className="font-bold text-left mb-2" 
                  style={{ fontSize: '18px', color: '#0C2756' }}
                >
                  Expert Negotiation
                </h4>
                <p 
                  className="text-left" 
                  style={{ fontSize: '13px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6' }}
                >
                  Our legal team negotiates with banks to cut your debt by up to 70%. We get you the lowest one-time payment.
                </p>
              </div>
              <img 
                src="/why2.png" 
                alt="Expert Negotiation" 
                className="absolute bottom-0 right-0"
                style={{ 
                  width: '100px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Service 3 - Expert Legal Team */}
            <div 
              className="relative overflow-hidden"
              style={{
                borderRadius: '27px',
                background: '#EFF7FF',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                padding: '20px',
                minHeight: '200px'
              }}
            >
              <div className="pr-20 mb-2">
                <h4 
                  className="font-bold text-left mb-2" 
                  style={{ fontSize: '18px', color: '#0C2756' }}
                >
                  Expert Legal Team
                </h4>
                <p 
                  className="text-left" 
                  style={{ fontSize: '13px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6' }}
                >
                  Your case is run by qualified advocates and debt experts. This ensures big savings and total legal safety.
                </p>
              </div>
              <img 
                src="/why3.png" 
                alt="Expert Legal Team" 
                className="absolute bottom-0 right-0"
                style={{ 
                  width: '100px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Service 4 - Zero Harassment Policy */}
            <div 
              className="relative overflow-hidden"
              style={{
                borderRadius: '27px',
                background: '#EFF7FF',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                padding: '20px',
                minHeight: '200px'
              }}
            >
              <div className="pr-20 mb-2">
                <h4 
                  className="font-bold text-left mb-2" 
                  style={{ fontSize: '18px', color: '#0C2756' }}
                >
                  Zero Harassment Policy
                </h4>
                <p 
                  className="text-left" 
                  style={{ fontSize: '13px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6' }}
                >
                  We step in legally to stop rude recovery calls and home visits. Your peace of mind comes first.
                </p>
              </div>
              <img 
                src="/why4.png" 
                alt="Zero Harassment" 
                className="absolute bottom-0 right-0"
                style={{ 
                  width: '100px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Service 5 - Transparent Fees & CIBIL Support */}
            <div 
              className="relative overflow-hidden"
              style={{
                borderRadius: '27px',
                background: '#EFF7FF',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                padding: '20px',
                minHeight: '200px'
              }}
            >
              <div className="pr-20 mb-2">
                <h4 
                  className="font-bold text-left mb-2" 
                  style={{ fontSize: '18px', color: '#0C2756' }}
                >
                  Transparent Fees & CIBIL Support
                </h4>
                <p 
                  className="text-left" 
                  style={{ fontSize: '13px', color: '#0C2756', opacity: 0.7, lineHeight: '1.6' }}
                >
                  Rebuild your credit with clear terms and no hidden fees. We do all the legal paperwork for you.
                </p>
              </div>
              <img 
                src="/why5.png" 
                alt="Peace of Mind" 
                className="absolute bottom-0 right-0"
                style={{ 
                  width: '100px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
