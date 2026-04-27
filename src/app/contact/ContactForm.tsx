'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    // Check if user has already submitted (persistent)
    const formSubmitted = localStorage.getItem('credsettle:form_submitted');
    if (formSubmitted === 'true') {
      setAlreadySubmittedToday(true);
      return;
    }

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
      submissionUrl: typeof window !== 'undefined' ? window.location.href : '',
      utmParams: typeof window !== 'undefined' ? (new URLSearchParams(window.location.search).toString() ? Object.fromEntries(new URLSearchParams(window.location.search)) : {}) : {}
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
      localStorage.setItem('credsettle:form_submitted', 'true');
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
  );
}
