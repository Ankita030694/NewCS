'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function ThankYouPage() {
  // Timer state - starting with 3 minutes (180 seconds)
  const [timeLeft, setTimeLeft] = useState(180);
  const [showCard, setShowCard] = useState(true);

  // Start countdown when component mounts
  useEffect(() => {
    if (timeLeft > 0 && showCard) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            setShowCard(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, showCard]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      
      <div className="relative z-10 pt-12 md:pt-14 lg:pt-[70px] px-4 md:px-6 lg:px-[16.2px]">
        <div className="w-full max-w-8xl mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[50vh] py-6 md:py-8">
            {/* Main Thank You Content */}
            <div className="text-center mb-4 md:mb-6">
              <h1
                className="mb-2 md:mb-3 text-2xl md:text-3xl lg:text-[35px] leading-tight -mt-15"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400'
                }}
              >
                Thank You for Submitting the form
              </h1>
              <p
                className="text-sm md:text-base lg:text-[14px] leading-4 md:leading-5 lg:leading-[18px] px-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400'
                }}
              >
                We have received your form, and our team is currently reviewing the information provided. Our team will connect with you within 24 hours.
              </p>
            </div>

            {/* Priority Processing Card - only show if timer hasn't expired */}
            {showCard && (
              <div className="w-full max-w-[392px] mx-auto mb-6 md:mb-8">
                <div
                  className="rounded-[14px] p-4 md:p-5"
                  style={{
                    background: '#F5F2E8',
                    boxShadow: '0 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  {/* Lightning bolt and title */}
                  <div className="text-center mb-3 md:mb-4">
                    <h2
                      className="text-xl md:text-2xl lg:text-[28px] font-bold mb-3 md:mb-4 leading-tight flex items-center justify-center gap-2"
                      style={{
                        color: '#2D2D2D',
                        fontFamily: 'Poppins'
                      }}
                    >
                      <span className="text-xl md:text-2xl lg:text-[25px]">⚡</span>
                      Need Help Fast?
                    </h2>
                  </div>

                  {/* Subtitle */}
                  <p
                    className="text-center mb-3 md:mb-4 text-sm md:text-base leading-relaxed"
                    style={{
                      color: '#2D2D2D',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400'
                    }}
                  >
                    Jump the queue and get a response in just<br />
                    4 hours instead of <strong>24 hours</strong> - for only <strong>₹11!</strong>
                  </p>

                  {/* Benefits with checkmarks and Priority processing box side by side */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3 md:mb-4 gap-3 md:gap-4">
                    {/* Benefits with checkmarks */}
                    <div className="flex-grow-1 w-full md:w-auto">
                      <div className="flex items-center mb-1.5">
                        <span
                          className="text-base md:text-lg mr-1.5 md:mr-2 font-bold"
                          style={{ color: '#28a745' }}
                        >
                          ✓
                        </span>
                        <span
                          className="text-xs md:text-sm font-medium"
                          style={{
                            color: '#2D2D2D',
                            fontFamily: 'Poppins'
                          }}
                        >
                          Priority support
                        </span>
                      </div>
                      <div className="flex items-center mb-1.5">
                        <span
                          className="text-base md:text-lg mr-1.5 md:mr-2 font-bold"
                          style={{ color: '#28a745' }}
                        >
                          ✓
                        </span>
                        <span
                          className="text-xs md:text-sm font-medium"
                          style={{
                            color: '#2D2D2D',
                            fontFamily: 'Poppins'
                          }}
                        >
                          Early access to experts
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span
                          className="text-base md:text-lg mr-1.5 md:mr-2 font-bold"
                          style={{ color: '#28a745' }}
                        >
                          ✓
                        </span>
                        <span
                          className="text-xs md:text-sm font-medium"
                          style={{
                            color: '#2D2D2D',
                            fontFamily: 'Poppins'
                          }}
                        >
                          Peace of mind, faster
                        </span>
                      </div>
                    </div>

                    {/* Priority processing available box with countdown */}
                    <div className="w-full md:w-auto">
                      <div
                        className="p-2 md:p-3 rounded-lg text-center"
                        style={{
                          backgroundColor: '#F0E68C',
                          fontFamily: 'Poppins'
                        }}
                      >
                        <div
                          className="text-[10px] md:text-xl font-medium"
                          style={{ color: '#2D2D2D' }}
                        >
                          Priority processing<br />
                          available for<br />
                          the next <strong style={{ color: 'red', fontSize: '22px' }}>{formatTime(timeLeft)}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-3 md:mb-4">
                    <h1
                      className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-none"
                      style={{
                        color: '#2D2D2D',
                        fontFamily: 'Poppins'
                      }}
                    >
                      Just ₹11
                    </h1>
                  </div>

                  {/* Pay Now Button */}
                  <div className="text-center mb-3 md:mb-4">
                    <div>
                      <a
                        href="https://u.payu.in/VrqKjNFWqiOB"
                        style={{
                          width: '135px',
                          backgroundColor: '#1065B7',
                          textAlign: 'center',
                          fontWeight: 800,
                          padding: '11px 0px',
                          color: 'white',
                          fontSize: '12px',
                          display: 'inline-block',
                          textDecoration: 'none',
                          borderRadius: '3.229px'
                        }}
                      >
                        Pay Now
                      </a>
                    </div>
                  </div>

                  {/* 100% Secure Payment */}
                  <div className="text-center mb-3 md:mb-4">
                    <div className="flex items-center justify-center">
                      <span
                        className="text-[10px] md:text-xs mr-1"
                        style={{ color: '#6c757d' }}
                      >
                        ✓
                      </span>
                      <span
                        className="text-[10px] md:text-xs font-medium"
                        style={{
                          color: '#6c757d',
                          fontFamily: 'Poppins'
                        }}
                      >
                        100% Secure Payment
                      </span>
                    </div>
                  </div>

                  {/* Payment logos */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                      {/* UPI Logo */}
                      <img
                        src="/upi.svg"
                        alt="UPI"
                        className="h-4 md:h-5 opacity-70"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />

                      {/* Mastercard Logo */}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                        alt="Mastercard"
                        className="h-3 md:h-4 opacity-70"
                      />

                      {/* Paytm Logo */}
                      <img
                        src="https://logos-world.net/wp-content/uploads/2020/11/Paytm-Logo.png"
                        alt="Paytm"
                        className="h-4 md:h-5 opacity-70"
                      />

                      {/* Google Pay Logo */}
                      <img
                        src="/gpay.svg"
                        alt="Google Pay"
                        className="h-4 md:h-5 opacity-70"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <a
                href="https://x.com/Credsettle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C2756] hover:opacity-70 transition-opacity"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.instagram.com/credsettle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C2756] hover:opacity-70 transition-opacity"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/12DnnQSV4iP/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C2756] hover:opacity-70 transition-opacity"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/credsettle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C2756] hover:opacity-70 transition-opacity"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>

            {/* Guidelines and Media Coverage Section */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10 -mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Guidelines Section */}
                <div>
                  <h3
                    className="text-center mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400'
                    }}
                  >
                    We work with guidelines of:
                  </h3>
                  <div className="marquee-container">
                    <div className="marquee-content">
                      <a href="https://msme.gov.in/" target="_blank" rel="noopener noreferrer" className="marquee-item">
                        <img src="/guideline1.svg" alt="MSME" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://nhrc.nic.in/" target="_blank" rel="noopener noreferrer" className="marquee-item">
                        <img src="/guideline2.svg" alt="NHRC" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://www.barcouncilofindia.org/home" target="_blank" rel="noopener noreferrer" className="marquee-item">
                        <img src="/guideline3.svg" alt="Bar Council" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="http://www.trai.gov.in/" target="_blank" rel="noopener noreferrer" className="marquee-item">
                        <img src="/guideline4.svg" alt="TRAI" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://www.iba.org.in/index.html" target="_blank" rel="noopener noreferrer" className="marquee-item">
                        <img src="/guideline5.svg" alt="IBA" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://lawmin.gov.in/" target="_blank" rel="noopener noreferrer" className="marquee-item">
                        <img src="/guideline6.svg" alt="Law Ministry" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      {/* Duplicate for seamless loop */}
                      <a href="https://msme.gov.in/" target="_blank" rel="noopener noreferrer" className="marquee-item">
                        <img src="/guideline1.svg" alt="MSME" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://nhrc.nic.in/" target="_blank" rel="noopener noreferrer" className="marquee-item">
                        <img src="/guideline2.svg" alt="NHRC" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://www.barcouncilofindia.org/home" target="_blank" rel="noopener noreferrer" className="marquee-item">
                        <img src="/guideline3.svg" alt="Bar Council" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Media Coverage Section */}
                <div>
                  <h3
                    className="text-center mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400'
                    }}
                  >
                    Our media coverages:
                  </h3>
                  <div className="marquee-container">
                    <div className="marquee-content marquee-reverse">
                      <a href="https://yourstory.com/companies/credsettle" target="_blank" rel="noopener noreferrer" className="marquee-item" aria-label="CredSettle on YourStory">
                        <img src="/media/media1.svg" alt="CredSettle on YourStory" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://medium.com/@credsettle/" target="_blank" rel="noopener noreferrer" className="marquee-item" aria-label="CredSettle on Medium">
                        <img src="/media/media2.svg" alt="CredSettle on Medium" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://yourstory.com/companies/credsettle" target="_blank" rel="noopener noreferrer" className="marquee-item" aria-label="CredSettle on YourStory">
                        <img src="/media/media3.svg" alt="CredSettle on YourStory" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://medium.com/@credsettle/" target="_blank" rel="noopener noreferrer" className="marquee-item" aria-label="CredSettle on Medium">
                        <img src="/media/media4.svg" alt="CredSettle on Medium" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      {/* Duplicate for seamless loop */}
                      <a href="https://yourstory.com/companies/credsettle" target="_blank" rel="noopener noreferrer" className="marquee-item" aria-label="CredSettle on YourStory">
                        <img src="/media/media1.svg" alt="CredSettle on YourStory" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://medium.com/@credsettle/" target="_blank" rel="noopener noreferrer" className="marquee-item" aria-label="CredSettle on Medium">
                        <img src="/media/media2.svg" alt="CredSettle on Medium" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://yourstory.com/companies/credsettle" target="_blank" rel="noopener noreferrer" className="marquee-item" aria-label="CredSettle on YourStory">
                        <img src="/media/media3.svg" alt="CredSettle on YourStory" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="https://medium.com/@credsettle/" target="_blank" rel="noopener noreferrer" className="marquee-item" aria-label="CredSettle on Medium">
                        <img src="/media/media4.svg" alt="CredSettle on Medium" className="h-9 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 lg:mt-[70px]">
        <Footer />
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          height: 56px;
        }

        .marquee-content {
          display: flex;
          gap: 1.4rem;
          animation: slide 30s linear infinite;
          width: fit-content;
        }

        .marquee-reverse {
          animation: slide-reverse 30s linear infinite;
        }

        .marquee-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .marquee-container {
            height: 42px;
          }
        }
      `}</style>
    </div>
  );
}

