'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Script from 'next/script';

function ContactPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isFirefox, setIsFirefox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numberError, setNumberError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    city: '',
    employmentStatus: '',
    monthlyIncome: '',
    harassment: '',
    creditCardDues: '',
    personalLoanDues: '',
    canPay: '',
    queries: ''
  });

  const [alreadySubmittedToday, setAlreadySubmittedToday] = useState(false);

  useEffect(() => {
    // Detect Firefox browser
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));

    // Check if user has already submitted today
    const lastSubmissionDate = localStorage.getItem('credsettle:last_submission_date');
    const today = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');

    if (lastSubmissionDate === today) {
      setAlreadySubmittedToday(true);
    }
  }, []);

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, name: value }));
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: '' }));
    }
  };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    
    if (value.startsWith('0')) {
      value = value.slice(1); // Remove leading 0
    }

    if (value.length > 10) {
      value = value.slice(0, 10); // Restrict input to 10 digits
    }
    
    setFormData(prev => ({ ...prev, number: value }));
    setNumberError('');
    if (errors.number) {
      setErrors(prev => ({ ...prev, number: '' }));
    }
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    setFormData(prev => ({ ...prev, email: value }));
    
    if (value === '' || emailRegex.test(value)) {
      setErrors(prev => ({ ...prev, email: '' }));
    } else {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address.' }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const getDebtRange = (amount: number) => {
    if (amount >= 1000000) return "10,00,000 or above";
    if (amount >= 500000) return "5,00,000 - 10,00,000";
    if (amount >= 400000) return "4,00,000 - 5,00,000";
    if (amount >= 300000) return "3,00,000 - 4,00,000";
    if (amount >= 200000) return "2,00,000 - 3,00,000";
    return "1,00,000 - 2,00,000";
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.number) {
      newErrors.number = 'Mobile number is required';
    } else if (formData.number.startsWith('0')) {
      setNumberError('Mobile number cannot start with 0.');
      return false;
    } else if (formData.number.length !== 10) {
      setNumberError('Please enter a valid 10-digit number.');
      return false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
    }

    if (!formData.employmentStatus) {
      newErrors.employmentStatus = 'Employment status is required';
    }

    if (!formData.monthlyIncome) {
      newErrors.monthlyIncome = 'Monthly income is required';
    }

    if (!formData.harassment) {
      newErrors.harassment = 'Harassment status is required';
    }

    if (!formData.creditCardDues) {
      newErrors.creditCardDues = 'Credit card dues are required';
    }

    if (!formData.personalLoanDues) {
      newErrors.personalLoanDues = 'Personal loan dues are required';
    }

    if (!formData.canPay) {
      newErrors.canPay = 'This field is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const contactFaqs = [
    {
      question: "How can I contact CredSettle?",
      answer:
        "You can email us at info@credsettle.com, call +91 8800226635 for customer support, or visit our hub at 4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001."
    },
    {
      question: "Do you provide loans?",
      answer:
        "No. CredSettle does not provide loans; we exclusively help clients settle existing loans through RBI-compliant legal processes."
    },
    {
      question: "What information should I include in the contact form?",
      answer:
        "Please share your basic details including name, mobile number, email address, city, employment status, monthly income, current credit card and personal loan dues, whether you are facing harassment, your ability to pay an initial amount, and any specific queries."
    },
    {
      question: "What happens after I submit the form?",
      answer:
        "Once you submit the form, our experts review the details and get back to you with a call to guide you through the loan settlement process."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.credsettle.com/contact#faq",
    "name": "CredSettle Contact FAQs",
    "description": "Answers to common questions about contacting CredSettle for RBI-compliant debt settlement support.",
    "mainEntity": contactFaqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `https://www.credsettle.com/contact#faq-question-${index + 1}`,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loading) return;

    if (alreadySubmittedToday) {
      alert('You have already submitted a form today. Our team will contact you soon.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setNumberError('');
    setLoading(true);

    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${String(
      today.getMonth() + 1
    ).padStart(2, '0')}-${today.getFullYear()}`;

    const submitData = {
      ...formData,
      created: Date.now(),
      date: formattedDate,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      if (process.env.NODE_ENV !== 'production') {
        console.log('Data Submitted!', result);
      }

      // Save user data for Meta Pixel Advanced Matching
      localStorage.setItem('credsettle:user_email', formData.email.trim().toLowerCase());
      localStorage.setItem('credsettle:user_phone', formData.number.trim());
      localStorage.setItem('credsettle:last_submission_date', formattedDate);
      setAlreadySubmittedToday(true);

      // Explicitly track Lead event with value and currency
      if (typeof window !== 'undefined' && (window as any).fbq) {
        // Re-initialize with user data for Advanced Matching
        (window as any).fbq('init', '477133588597367', {
          em: formData.email.trim().toLowerCase(),
          ph: formData.number.trim(),
          ct: formData.city.trim().toLowerCase(),
        });

        const pixelParams: any = {
          value: 0.00,
          currency: 'INR'
        };
        (window as any).fbq('track', 'Lead', pixelParams);
      }
      
      // Redirect to thank-you page on successful submission
      router.push('/thank-you');
    } catch (error: any) {
      console.error('Error Submitting form:', error);
      alert(error.message || 'Failed to submit the form!');
    } finally {
      setTimeout(() => setLoading(false), 10000); // Enable button after 10 seconds
    }
  };
  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Script id="faq-schema-contact" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      {/* Background Circle Effect - Chrome/Safari */}
      {!isFirefox && (
        <div 
          className="absolute top-0 left-0 w-[240px] h-[240px] md:w-[400px] md:h-[400px] lg:w-[606px] lg:h-[606px] blur-[80px] md:blur-[160px] lg:blur-[320px]"
          style={{
            borderRadius: '50%',
            background: '#007AFF',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.3,
            willChange: 'filter', // Optimize for animations
            backfaceVisibility: 'hidden' // Force hardware acceleration
          }}
        />
      )}
      
      {/* Firefox-specific blur effect */}
      {isFirefox && (
        <div 
          className="absolute top-0 left-0 w-[240px] h-[240px] md:w-[400px] md:h-[400px] lg:w-[606px] lg:h-[606px]"
          style={{
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.9
          }}
        />
      )}
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 pt-12 md:pt-16 lg:pt-[80px] px-3 md:px-5 lg:px-[13px]">
        <div className="w-full max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-start lg:justify-around gap-6 lg:gap-8">
            {/* Left Sidebar - Contact Information */}
            <div className="order-2 lg:order-1 w-full lg:flex-shrink-0 lg:w-[560px] lg:mr-8">
              <div 
                className="inline-block px-3 md:px-5 py-1.5 md:py-2.5 mb-3 md:mb-5"
                style={{
                  borderRadius: '38px',
                  background: '#BFEEFF'
                }}
              >
                <h2 
                  className="text-[9px] md:text-[11px]"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '18px'
                  }}
                >
                  Contact Us
                </h2>
              </div>
              <h1 
                className="mb-2.5 md:mb-3 text-xl md:text-2xl lg:text-[36px] leading-tight md:leading-tight lg:leading-[52px]"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400'
                }}
              >
                Let's Get in Touch
              </h1>
              <p 
                className="mb-3 md:mb-5 text-sm md:text-base lg:text-[16px] leading-5 md:leading-6 lg:leading-[20px]"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400'
                }}
              >
                Or just reach out manually at info@credsettle.com
              </p>
              <h4 
                className="mb-2.5 md:mb-3 text-lg md:text-xl lg:text-[22px] leading-tight"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '500'
                }}
              >
                Reach Out to us
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div 
                  className="relative overflow-hidden flex gap-3 md:gap-4 p-4 md:p-6 rounded-[24px] min-h-[128px]"
                  style={{
                    background: '#EFF7FF',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <div className="absolute right-2 bottom-0 opacity-40 md:opacity-60">
                    <img src="/contact1.png" alt="Email CredSettle for Loan Settlement Consultation" className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <a href="mailto:info@credsettle.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col relative z-10">
                    <span className="text-[10px] md:text-xs text-[rgba(12,39,86,0.70)]">Email Us</span>
                    <span className="text-xs md:text-sm text-[#0C2756] font-medium">General Inquiries</span>
                    <span className="text-[10px] md:text-xs text-[#0C2756] underline-offset-2 hover:underline mt-1.5">
                      info@credsettle.com
                    </span>
                  </div>
                  </a>
                </div>
                <div 
                  className="relative overflow-hidden flex gap-3 md:gap-4 p-4 md:p-6 rounded-[24px] min-h-[128px]"
                  style={{
                    background: '#EFF7FF',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <div className="absolute right-2 bottom-0 opacity-40 md:opacity-60">
                    <img src="/contact2.png" alt="Call CredSettle for Loan Settlement Support" className="w-16 h-16 md:w-20 md:h-20 rotate-90" />
                  </div>
                  <a href="tel:+918800226635" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col relative z-10">
                    <span className="text-[10px] md:text-xs text-[rgba(12,39,86,0.70)]">Call Us</span>
                    <span className="text-xs md:text-sm text-[#0C2756] font-medium">Customer Support</span>
                    <span className="text-[10px] md:text-xs text-[#0C2756] underline-offset-2 hover:underline mt-1.5">
                      +91 8800226635
                    </span>
                  </div>
                  </a>
                </div>
                <div 
                  className="relative overflow-hidden flex gap-3 md:gap-4 p-4 md:p-6 rounded-[24px] sm:col-span-2 min-h-[128px]"
                  style={{
                    background: '#EFF7FF',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <div className="absolute right-2 bottom-0 opacity-40 md:opacity-60">
                    <img src="/contact3.png" alt="CredSettle Office Address in Gurugram" className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <a href="https://maps.app.goo.gl/JCgKrU6LZSb2BDpS8" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col relative z-10 max-w-[288px]">
                    <span className="text-[10px] md:text-xs text-[rgba(12,39,86,0.70)]">Our Address</span>
                    <span className="text-xs md:text-sm text-[#0C2756] font-medium">Visit Our Hub</span>
                    <p className="text-[10px] md:text-xs text-[#0C2756] leading-relaxed mt-1.5">
                      4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
                    </p>
                  </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="order-1 lg:order-2 w-full lg:flex-shrink-0 lg:w-[480px]">
              <div 
                className="flex flex-col p-3 md:p-6 lg:p-[42px_32px] gap-3 md:gap-4 lg:gap-[8px] rounded-xl md:rounded-2xl lg:rounded-[32px]"
                style={{
                  background: '#EFF7FF',
                  boxShadow: '0 3px 8.2px 0 rgba(255, 255, 255, 0.25) inset, 3px 3px 12.3px 0 rgba(0, 0, 0, 0.10)',
                  width: '100%',
                  maxWidth: '480px'
                }}
              >
                <div className="lg:hidden flex flex-col gap-2 mb-2">
                  <h2
                    className="text-2xl font-semibold leading-snug"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins'
                    }}
                  >
                    Contact Our Experts Now
                  </h2>
                  <p
                    className="text-sm leading-5"
                    style={{
                      color: 'rgba(12, 39, 86, 0.70)',
                      fontFamily: 'Poppins'
                    }}
                  >
                    Submit the details below to get a call back from our team.
                  </p>
                  <p
                    className="text-xs leading-4"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 500
                    }}
                  >
                   <span className="text-red-500">*</span> We do not provide Loans. We only help in Loan Settlement.
                  </p>
                </div>
                <div className="hidden lg:flex justify-between items-center mb-3 px-2">
                  <span
                    className="text-sm leading-5 -ml-2"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      fontSize: '20px'
                    }}
                  >
                   <span className="text-red-500">*</span> We do not provide Loans. We only help in Loan Settlement.
                  </span>
                </div>
                <form onSubmit={onSubmit} className="space-y-3 md:space-y-4 w-full">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> Name
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleNameInput}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 placeholder-[rgba(12,39,86,0.70)] text-black text-xs md:text-sm"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="number" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> Number
                    </label>
                    <input 
                      type="text"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleNumberInput}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 placeholder-[rgba(12,39,86,0.70)] text-black text-xs md:text-sm"
                      placeholder="Number"
                    />
                    {errors.number && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.number}</p>
                    )}
                    {numberError && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{numberError}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> Email ID
                    </label>
                    <input 
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleEmailInput}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 placeholder-[rgba(12,39,86,0.70)] text-black text-xs md:text-sm"
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="city" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> City
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 text-black text-xs md:text-sm"
                    >
                      <option value="">Select City</option>
                      {[
                        'Andaman and Nicobar Islands',
                        'Andhra Pradesh',
                        'Arunachal Pradesh',
                        'Assam',
                        'Bihar',
                        'Chandigarh',
                        'Chhattisgarh',
                        'Dadra and Nagar Haveli and Daman and Diu',
                        'Delhi',
                        'Goa',
                        'Gujarat',
                        'Haryana',
                        'Himachal Pradesh',
                        'Jharkhand',
                        'Karnataka',
                        'Kerala',
                        'Lakshadweep',
                        'Madhya Pradesh',
                        'Maharashtra',
                        'Manipur',
                        'Meghalaya',
                        'Mizoram',
                        'Nagaland',
                        'Odisha',
                        'Puducherry',
                        'Punjab',
                        'Rajasthan',
                        'Sikkim',
                        'Tamil Nadu',
                        'Telangana',
                        'Tripura',
                        'Uttar Pradesh',
                        'Uttarakhand',
                        'West Bengal',
                        'Mumbai',
                        'Pune',
                        'Bangalore',
                        'Chennai',
                        'Hyderabad',
                        'Other',
                      ].map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="employmentStatus" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> Employment Status
                    </label>
                    <select
                      id="employmentStatus"
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleInputChange}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 text-black text-xs md:text-sm"
                    >
                      <option value="">Select</option>
                      {[
                        'Not employed',
                        'Working as salaried employee',
                        'Self employed',
                        'Business with more than 10 employees',
                      ].map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    {errors.employmentStatus && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.employmentStatus}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="monthlyIncome" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> Monthly Income
                    </label>
                    <select
                      id="monthlyIncome"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleInputChange}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 text-black text-xs md:text-sm"
                    >
                      <option value="">Select</option>
                      {[
                        '₹10,000 - ₹50,000',
                        '₹50,000 - ₹1,00,000',
                        '₹1,00,000 - ₹3,00,000',
                        '₹3,00,000 - ₹5,00,000',
                        '₹5,00,000 or above',
                      ].map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    {errors.monthlyIncome && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.monthlyIncome}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="harassment" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> Facing Harassment?
                    </label>
                    <select
                      id="harassment"
                      name="harassment"
                      value={formData.harassment}
                      onChange={handleInputChange}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 text-black text-xs md:text-sm"
                    >
                      <option value="">Select</option>
                      {['Yes', 'No'].map((harassment) => (
                        <option key={harassment} value={harassment}>
                          {harassment}
                        </option>
                      ))}
                    </select>
                    {errors.harassment && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.harassment}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="creditCardDues" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> Total Credit Card Dues?
                    </label>
                    <select
                      id="creditCardDues"
                      name="creditCardDues"
                      value={formData.creditCardDues}
                      onChange={handleInputChange}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 text-black text-xs md:text-sm"
                    >
                      <option value="">Select</option>
                      {[
                        '₹1,00,000 - ₹2,00,000',
                        '₹2,00,000 - ₹3,00,000',
                        '₹3,00,000 - ₹4,00,000',
                        '₹4,00,000 - ₹5,00,000',
                        '₹5,00,000 - ₹10,00,000',
                        '₹10,00,000 or above',
                      ].map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    {errors.creditCardDues && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.creditCardDues}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="personalLoanDues" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> Total Personal Loan Dues?
                    </label>
                    <select
                      id="personalLoanDues"
                      name="personalLoanDues"
                      value={formData.personalLoanDues}
                      onChange={handleInputChange}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 text-black text-xs md:text-sm"
                    >
                      <option value="">Select</option>
                      {[
                        '₹1,00,000 - ₹2,00,000',
                        '₹2,00,000 - ₹3,00,000',
                        '₹3,00,000 - ₹4,00,000',
                        '₹4,00,000 - ₹5,00,000',
                        '₹5,00,000 - ₹10,00,000',
                        '₹10,00,000 or above',
                      ].map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    {errors.personalLoanDues && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.personalLoanDues}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="canPay" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      <span style={{ color: 'red' }}>*</span> Can you pay ₹2,000 to ₹5,000 to start the process?
                    </label>
                    <select
                      id="canPay"
                      name="canPay"
                      value={formData.canPay}
                      onChange={handleInputChange}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 text-black text-xs md:text-sm"
                    >
                      <option value="">Select</option>
                      {['Yes', 'No'].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.canPay && (
                      <p className="text-[10px] md:text-xs mt-1 md:mt-[4px]" style={{ color: 'red' }}>{errors.canPay}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="queries" className="block mb-1 text-xs md:text-sm" style={{ color: '#0C2756' }}>
                      Your Queries
                    </label>
                    <textarea 
                      id="queries"
                      name="queries"
                      value={formData.queries}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-1 py-1 md:py-1.5 bg-transparent border-0 border-b-2 border-[#0C2756] focus:outline-none focus:ring-0 resize-none placeholder-[rgba(12,39,86,0.70)] text-black text-xs md:text-sm"
                      placeholder="Your Queries"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || alreadySubmittedToday}
                    className="w-full text-white font-medium py-2 md:py-2.5 px-3 md:px-4 text-xs md:text-sm hover:bg-[#0056CC] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-[30px]"
                    style={{
                      background: '#007AFF',
                      boxShadow: '0 0.8px 5.4px 0 rgba(0, 0, 0, 0.35), 0 -3.2px 3.2px 0 rgba(255, 255, 255, 0.25) inset, 0 3.2px 3.2px 0 rgba(255, 255, 255, 0.25) inset'
                    }}
                  >
                    {loading ? 'Submitting...' : alreadySubmittedToday ? 'SUBMITTED TODAY' : 'SUBMIT'}
                  </button>
                  {alreadySubmittedToday && (
                    <p className="text-center text-[10px] md:text-xs mt-2 text-[#0C2756] font-medium">
                      You've already submitted today. We'll be in touch!
                    </p>
                  )}
                  <div className="flex items-center justify-center gap-2 mt-4 md:mt-5">
                    
                    <span className="text-xs md:text-sm lg:text-base font-medium tracking-wide" style={{ color: '#0C2756', fontFamily: 'Poppins' }}>
                      Powered by
                    </span>
                    <img src="/payu.png" alt="PayU" className="w-24 h-24f md:w-24 md:h-20 object-contain -ml-7" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Additional Content Section: Office & FAQs */}
      <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
          {/* Left Column: Office Details */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-6 font-poppins">Visit Our Headquarters & Speak to Experts</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Our main office is strategically located in Gurugram's bustling business district, making it easily accessible for clients seeking in-person assistance. 
              Whether you are currently facing intense harassment from aggressive recovery agents, struggling with mounting credit card dues, or simply need professional legal advice on navigating a complex loan settlement, our dedicated team of financial and legal experts is available for comprehensive, face-to-face consultations. 
              We know that dealing with overwhelming debt can be incredibly stressful and isolating. Taking that very first step to reach out for professional help is often the hardest part of the journey. At CredSettle, we are deeply committed to providing a safe, completely secure, and judgment-free environment where you can openly discuss the specifics of your financial situation without fear.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our specialized advisory team brings years of proven expertise in effectively negotiating with prominent banks and Non-Banking Financial Companies (NBFCs) across India. 
              We strictly employ a 100% RBI-compliant, legally robust approach to help you potentially reduce your principal outstanding amount by up to 50%, immediately stop unwanted harassment calls, and ultimately close your loans with proper legal documentation and No Dues Certificates (NDCs). 
              When you visit our Gurugram office or contact us through our online portal, we conduct a thorough, customized evaluation of your accounts—whether they involve unmanageable personal loans, credit card debt, or business loans. Based on this thorough assessment, we tailor a personalized, actionable settlement strategy that realistically fits your current repayment capacity and long-term financial goals. Regain your peace of mind, protect your legal rights, and start your journey towards total financial freedom by getting in touch with CredSettle today.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <h3 className="font-semibold text-xl text-[#0C2756] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Office Hours
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between border-b border-gray-50 pb-2"><span>Monday - Friday</span> <span className="font-medium text-[#0C2756]">10:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between border-b border-gray-50 pb-2"><span>Saturday</span> <span className="font-medium text-[#0C2756]">10:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="font-medium text-red-500">Closed</span></li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-semibold text-lg text-[#0C2756] mb-2">Why Visit Us?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Face-to-face consultation with legal experts</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Document verification and analysis</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span> Confidential and secure environment</li>
              </ul>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-6 font-poppins">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {contactFaqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300">
                  <h3 className="font-semibold text-[#0C2756] mb-2 text-lg">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-8 bg-gradient-to-r from-[#0C2756] to-[#1a3b75] rounded-2xl text-white text-center shadow-lg">
              <h3 className="font-bold text-xl mb-2">Need Immediate Assistance?</h3>
              <p className="text-blue-100 mb-6">Our legal team is ready to assist you with your loan settlement journey.</p>
              <a href="tel:+918800226635" className="inline-flex items-center bg-white text-[#0C2756] font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors shadow-md">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Call +91 8800226635
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-10 md:mt-12 lg:mt-[80px]">
        <Footer />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007AFF]"></div>
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}
