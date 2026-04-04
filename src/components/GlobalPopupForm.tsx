'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function GlobalPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numberError, setNumberError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [alreadySubmittedToday, setAlreadySubmittedToday] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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
    // Check if user has already submitted today
    const lastSubmissionDate = localStorage.getItem('credsettle:last_submission_date');
    const today = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');

    if (lastSubmissionDate === today) {
      setAlreadySubmittedToday(true);
      return; 
    }

    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('credsettle:popup_shown');
    if (popupShown) return;

    const timer = setTimeout(() => {
      const excludedPaths = ['/contact', '/nullify', '/authority', '/login', '/thank-you', '/success'];
      const isExcluded = excludedPaths.some(path => window.location.pathname.startsWith(path));
      
      if (!isExcluded) {
        setIsOpen(true);
        sessionStorage.setItem('credsettle:popup_shown', 'true');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const excludedPaths = ['/contact', '/nullify', '/authority', '/login', '/thank-you', '/success'];
    const isExcluded = excludedPaths.some(path => pathname?.startsWith(path));
    
    if (isExcluded && isOpen) {
      setIsOpen(false);
    }
  }, [pathname, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, name: value }));
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: '' }));
    }
  };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); 
    
    if (value.startsWith('0')) {
      value = value.slice(1);
    }

    if (value.length > 10) {
      value = value.slice(0, 10);
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

      // Save user data for Meta Pixel Advanced Matching
      localStorage.setItem('credsettle:user_email', formData.email.trim().toLowerCase());
      localStorage.setItem('credsettle:user_phone', formData.number.trim());
      localStorage.setItem('credsettle:last_submission_date', formattedDate);
      setAlreadySubmittedToday(true);

      // Track Lead event
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('init', '477133588597367', {
          em: formData.email.trim().toLowerCase(),
          ph: formData.number.trim(),
          ct: formData.city.trim().toLowerCase(),
        });

        (window as any).fbq('track', 'Lead', {
          value: 0.00,
          currency: 'INR'
        });
      }
      
      setIsOpen(false);
      router.push('/thank-you');
    } catch (error: any) {
      console.error('Error Submitting form:', error);
      alert(error.message || 'Failed to submit the form!');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-[32px] p-6 md:p-8 shadow-2xl animate-in zoom-in-95 duration-300"
        style={{
          background: '#EFF7FF',
          boxShadow: '0 3px 8.2px 0 rgba(255, 255, 255, 0.25) inset, 3px 3px 12.3px 0 rgba(0, 0, 0, 0.10)',
        }}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-6 p-2 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark text-xl text-[#0C2756]"></i>
        </button>

        <div className="flex flex-col gap-2 mb-6">
          <h2
            className="text-2xl md:text-3xl font-semibold leading-tight pr-8"
            style={{
              color: '#0C2756',
              fontFamily: 'Poppins'
            }}
          >
            Get Expert Help Today
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed opacity-80"
            style={{
              color: '#0C2756',
              fontFamily: 'Poppins'
            }}
          >
            Fill the form below to get a callback from our loan settlement experts.
          </p>
          <p className="text-xs font-medium text-[#0C2756]">
            <span className="text-red-500">*</span> We do not provide loans. We only help in settlement.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pname" className="block mb-1 text-xs font-medium text-[#0C2756]">
                <span className="text-red-500">*</span> Name
              </label>
              <input 
                type="text"
                id="pname"
                name="name"
                value={formData.name}
                onChange={handleNameInput}
                className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="pnumber" className="block mb-1 text-xs font-medium text-[#0C2756]">
                <span className="text-red-500">*</span> Mobile Number
              </label>
              <input 
                type="text"
                id="pnumber"
                name="number"
                value={formData.number}
                onChange={handleNumberInput}
                className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm"
                placeholder="10-digit mobile number"
              />
              {errors.number && <p className="text-[10px] text-red-500 mt-1">{errors.number}</p>}
              {numberError && <p className="text-[10px] text-red-500 mt-1">{numberError}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="pemail" className="block mb-1 text-xs font-medium text-[#0C2756]">
              <span className="text-red-500">*</span> Email ID
            </label>
            <input 
              type="email"
              id="pemail"
              name="email"
              value={formData.email}
              onChange={handleEmailInput}
              className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm"
              placeholder="example@email.com"
            />
            {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pcity" className="block mb-1 text-xs font-medium text-[#0C2756]">
                <span className="text-red-500">*</span> City
              </label>
              <select
                id="pcity"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm appearance-none"
              >
                <option value="">Select City</option>
                {[
                  'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
                  'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa',
                  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep',
                  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
                  'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
                  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Mumbai', 'Pune', 'Bangalore', 'Chennai',
                  'Hyderabad', 'Other',
                ].map((city) => <option key={city} value={city}>{city}</option>)}
              </select>
              {errors.city && <p className="text-[10px] text-red-500 mt-1">{errors.city}</p>}
            </div>

            <div>
              <label htmlFor="pemployment" className="block mb-1 text-xs font-medium text-[#0C2756]">
                <span className="text-red-500">*</span> Employment Status
              </label>
              <select
                id="pemployment"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleInputChange}
                className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm appearance-none"
              >
                <option value="">Select</option>
                {[
                  'Not employed', 'Working as salaried employee', 'Self employed', 'Business with more than 10 employees',
                ].map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
              {errors.employmentStatus && <p className="text-[10px] text-red-500 mt-1">{errors.employmentStatus}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pincome" className="block mb-1 text-xs font-medium text-[#0C2756]">
                <span className="text-red-500">*</span> Monthly Income
              </label>
              <select
                id="pincome"
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleInputChange}
                className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm appearance-none"
              >
                <option value="">Select</option>
                {[
                  '₹10,000 - ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 - ₹3,00,000', '₹3,00,000 - ₹5,00,000', '₹5,00,000 or above',
                ].map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
              {errors.monthlyIncome && <p className="text-[10px] text-red-500 mt-1">{errors.monthlyIncome}</p>}
            </div>

            <div>
              <label htmlFor="pharassment" className="block mb-1 text-xs font-medium text-[#0C2756]">
                <span className="text-red-500">*</span> Facing Harassment?
              </label>
              <select
                id="pharassment"
                name="harassment"
                value={formData.harassment}
                onChange={handleInputChange}
                className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm appearance-none"
              >
                <option value="">Select</option>
                {['Yes', 'No'].map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
              {errors.harassment && <p className="text-[10px] text-red-500 mt-1">{errors.harassment}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pccdues" className="block mb-1 text-xs font-medium text-[#0C2756]">
                <span className="text-red-500">*</span> Credit Card Dues
              </label>
              <select
                id="pccdues"
                name="creditCardDues"
                value={formData.creditCardDues}
                onChange={handleInputChange}
                className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm appearance-none"
              >
                <option value="">Select</option>
                {[
                  '₹1,00,000 - ₹2,00,000', '₹2,00,000 - ₹3,00,000', '₹3,00,000 - ₹4,00,000', '₹4,00,000 - ₹5,00,000', '₹5,00,000 - ₹10,00,000', '₹10,00,000 or above',
                ].map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
              {errors.creditCardDues && <p className="text-[10px] text-red-500 mt-1">{errors.creditCardDues}</p>}
            </div>

            <div>
              <label htmlFor="ppldues" className="block mb-1 text-xs font-medium text-[#0C2756]">
                <span className="text-red-500">*</span> Personal Loan Dues
              </label>
              <select
                id="ppldues"
                name="personalLoanDues"
                value={formData.personalLoanDues}
                onChange={handleInputChange}
                className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm appearance-none"
              >
                <option value="">Select</option>
                {[
                  '₹1,00,000 - ₹2,00,000', '₹2,00,000 - ₹3,00,000', '₹3,00,000 - ₹4,00,000', '₹4,00,000 - ₹5,00,000', '₹5,00,000 - ₹10,00,000', '₹10,00,000 or above',
                ].map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
              {errors.personalLoanDues && <p className="text-[10px] text-red-500 mt-1">{errors.personalLoanDues}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="pcanpay" className="block mb-1 text-xs font-medium text-[#0C2756]">
              <span className="text-red-500">*</span> Can pay ₹2,000 to ₹5,000 to start?
            </label>
            <select
              id="pcanpay"
              name="canPay"
              value={formData.canPay}
              onChange={handleInputChange}
              className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm appearance-none"
            >
              <option value="">Select</option>
              {['Yes', 'No'].map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            {errors.canPay && <p className="text-[10px] text-red-500 mt-1">{errors.canPay}</p>}
          </div>

          <div>
            <label htmlFor="pqueries" className="block mb-1 text-xs font-medium text-[#0C2756]">
              Your Queries
            </label>
            <textarea 
              id="pqueries"
              name="queries"
              value={formData.queries}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-[#0C2756]/30 focus:border-[#0C2756] focus:outline-none transition-colors text-black text-sm resize-none"
              placeholder="Any specific questions?"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: '#007AFF',
              boxShadow: '0 4px 14px 0 rgba(0, 122, 255, 0.39)',
            }}
          >
            {loading ? 'Processing...' : 'Submit Now'}
          </button>
        </form>
      </div>
    </div>
  );
}
