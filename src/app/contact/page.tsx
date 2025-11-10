'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

export default function ContactPage() {
  const router = useRouter();
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

  useEffect(() => {
    // Detect Firefox browser
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
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
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
    setFormData(prev => ({ ...prev, email: value }));
    
    if (value === '' || gmailRegex.test(value)) {
      setErrors(prev => ({ ...prev, email: '' }));
    } else {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid Gmail address.' }));
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
    } else if (formData.number.length !== 10) {
      setNumberError('Please enter a valid 10-digit number.');
      return false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!gmailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid Gmail address.';
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
        "Please share your basic details including name, mobile number, Gmail address, city, employment status, monthly income, current credit card and personal loan dues, whether you are facing harassment, your ability to pay an initial amount, and any specific queries."
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
    "@id": "https://credsettle.in/contact#faq",
    "name": "CredSettle Contact FAQs",
    "description": "Answers to common questions about contacting CredSettle for RBI-compliant debt settlement support.",
    "mainEntity": contactFaqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `https://credsettle.in/contact#faq-question-${index + 1}`,
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
      date: formattedDate
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
            opacity: 0.6,
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
              <h3 
                className="mb-2.5 md:mb-3 text-xl md:text-2xl lg:text-[36px] leading-tight md:leading-tight lg:leading-[52px]"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400'
                }}
              >
                Let's Get in Touch
              </h3>
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
                    <a href="mailto:info@credsettle.com" className="text-[10px] md:text-xs text-[#0C2756] underline-offset-2 hover:underline mt-1.5">
                      info@credsettle.com
                    </a>
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
                    <a href="tel:+918800226635" className="text-[10px] md:text-xs text-[#0C2756] underline-offset-2 hover:underline mt-1.5">
                      +91 8800226635
                    </a>
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
                  <h1
                    className="text-2xl font-semibold leading-snug"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins'
                    }}
                  >
                    Contact Our Experts Now
                  </h1>
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
                    className="text-sm leading-5"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 500
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
                      placeholder="example@gmail.com"
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
                    disabled={loading}
                    className="w-full text-white font-medium py-2 md:py-2.5 px-3 md:px-4 text-xs md:text-sm hover:bg-[#0056CC] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-[30px]"
                    style={{
                      background: '#007AFF',
                      boxShadow: '0 0.8px 5.4px 0 rgba(0, 0, 0, 0.35), 0 -3.2px 3.2px 0 rgba(255, 255, 255, 0.25) inset, 0 3.2px 3.2px 0 rgba(255, 255, 255, 0.25) inset'
                    }}
                  >
                    {loading ? 'Submitting...' : 'SUBMIT'}
                  </button>
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
      
      <div className="mt-10 md:mt-12 lg:mt-[80px]">
        <Footer />
      </div>
    </div>
  );
}
