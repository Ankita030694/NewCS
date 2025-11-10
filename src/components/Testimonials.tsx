import Link from 'next/link';

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/59ce5c31d29889152fc4b10012357360245f5760?width=820",
      text: "CredSettle stopped the constant harassment immediately. They negotiated a Personal Loan settlement for far less than I owed, restoring my peace of mind and dignity.",
      name: "Ravi K.",
      type: "Personal Loan Settlement",
      imageHeight: "390px"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cf1255e48575a7e20767bade3db63105f80d5938?width=820",
      text: "After months of stress from credit card debt, CredSettle helped me settle my outstanding balance at 40% of the original amount. The process was smooth and professional.",
      name: "Prakash S.",
      type: "Credit Card Settlement",
      imageHeight: "390px"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d213786399b8442ae836c6d1917c81e93a1c9722?width=820",
      text: "I was struggling with my car loan payments. CredSettle negotiated a settlement that saved me thousands and helped me get back on track financially. Highly recommended!",
      name: "Amit R.",
      type: "Car Loan Settlement",
      imageHeight: "482px"
    }
  ];

  const blogPosts = [
    {
      slug: "home-credit-loan-settlement-guide",
      image: "/sample.png",
      title: "Home Credit Loan Settlement in India: A Complete Legal Guide",
      date: "October 2, 2025"
    },
    {
      slug: "debt-settlement-laws-rights",
      image: "/sample.png", 
      title: "Understanding Debt Settlement Laws: Your Rights and Protections",
      date: "September 28, 2025"
    },
    {
      slug: "stop-loan-recovery-harassment",
      image: "/sample.png",
      title: "How to Stop Loan Recovery Harassment: Legal Remedies",
      date: "September 25, 2025"
    }
  ];

  return (
    <section className="flex flex-col items-center gap-8 md:gap-14 py-12 px-4 overflow-x-hidden w-full max-w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 md:gap-[21px] w-full max-w-[610px]">
        <h2 className="text-[#0C2756] text-center font-semibold text-2xl md:text-[34px] leading-tight md:leading-[34px]" style={{ fontWeight: 500 }}>
          What Our Clients Say
        </h2>
        <p className="text-[rgba(12,39,86,0.7)] text-center font-normal text-base md:text-[21px] leading-tight md:leading-[21px] tracking-[-0.21px]">
          Real stories. Real settlements. Real relief from debt harassment.
        </p>
      </div>

      {/* Desktop Version - Hidden on Mobile */}
      <div className="hidden md:flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[48px] w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card w-full max-w-[287px] h-auto lg:h-[550px] rounded-[28px] bg-[rgba(239,247,255,0.7)] shadow-[3px_3px_11px_0_rgba(0,0,0,0.1)] relative overflow-hidden"
          >
            {/* Image Container */}
            <div className="w-full h-auto lg:h-[390px] overflow-hidden rounded-t-[28px] lg:rounded-t-[28px] lg:rounded-b-none bg-[rgba(239,247,255,0.3)] flex items-center justify-center">
              <img
                src={testimonial.image}
                alt={`${testimonial.name} testimonial`}
                className="w-full h-full object-contain"
                style={{ 
                  flexShrink: 0,
                  maxHeight: testimonial.imageHeight 
                }}
              />
            </div>

            {/* Simple Blur Gradient at Bottom of Image */}
            <div
              className="hidden lg:block absolute w-full h-[100px]"
              style={{
                top: '300px',
                background: 'linear-gradient(to bottom, rgba(239, 247, 255, 0) 0%, rgba(239, 247, 255, 0.6) 50%, rgba(239, 247, 255, 1) 100%)',
                zIndex: 1
              }}
            />

            {/* Content Section */}
            <div className="testimonial-content flex flex-col gap-4 md:gap-[21px] p-4 lg:p-0 lg:absolute lg:left-[32px] lg:top-[356px] lg:w-[223px] lg:h-[166px] z-10">
              {/* Quote */}
              <p className="text-[rgba(12,39,86,0.7)] font-normal text-sm md:text-[14px] leading-relaxed md:leading-[17px] tracking-[-0.14px]">
                "{testimonial.text}"
              </p>

              {/* Name and Type */}
              <div className="flex flex-col gap-3 md:gap-[14px]">
                <h3 className="text-[#0C2756] font-normal text-lg md:text-[18px] leading-tight md:leading-[18px] tracking-[-0.18px]">
                  {testimonial.name}
                </h3>
                <p className="text-[#0C2756] text-left font-normal text-xs md:text-[13px] leading-tight md:leading-[13px] tracking-[-0.13px]">
                  {testimonial.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Version - Horizontal Scrollable/Swipeable - Hidden on Desktop */}
      <div className="md:hidden w-full">
        {/* Testimonials Section */}
        <div className="mb-8">
          <h3 className="text-[#0C2756] text-left font-semibold text-xl mb-4 px-2" style={{ fontWeight: 500 }}>
            Testimonials
          </h3>
          <div className="flex overflow-x-auto gap-4 pb-4 px-2 scrollbar-hide" style={{ 
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] rounded-[28px] bg-[rgba(239,247,255,0.7)] shadow-[3px_3px_11px_0_rgba(0,0,0,0.1)] overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Image */}
                <div className="w-full h-[250px] overflow-hidden flex items-center justify-center bg-[rgba(239,247,255,0.3)]">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-4 p-4">
                  {/* Quote */}
                  <p className="text-[rgba(12,39,86,0.7)] font-normal text-sm leading-relaxed tracking-[-0.14px]">
                    "{testimonial.text}"
                  </p>

                  {/* Name and Type */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[#0C2756] font-normal text-lg leading-tight tracking-[-0.18px]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#0C2756] text-left font-normal text-xs leading-tight tracking-[-0.13px]">
                      {testimonial.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Testimonials;
