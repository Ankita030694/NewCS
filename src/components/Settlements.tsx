'use client';

import { useState, useEffect, useCallback } from 'react';

const settlementLetters = ['/letter1.png', '/letter2.png', '/letter3.png', '/letter4.png'] as const;

export default function Settlements() {
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [settlementLetter, setSettlementLetter] = useState('');
  const [showLetter, setShowLetter] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 136, y: 174 }); // Center of the container (272/2, 348/2)
  const [isHovering, setIsHovering] = useState(false);

  const bankCards = [
    { id: 'bank1', src: '/banks/7.svg', letter: settlementLetters[0] },
    { id: 'bank2', src: '/banks/40.svg', letter: settlementLetters[1] },
    { id: 'bank3', src: '/banks/37.svg', letter: settlementLetters[2] },
    { id: 'bank4', src: '/banks/74.svg', letter: settlementLetters[3] },
    { id: 'bank5', src: '/banks/65.svg' },
    { id: 'bank6', src: '/banks/55.svg' },
    { id: 'bank7', src: '/banks/46.svg' }
  ];

  const handleBankClick = (bankId: string) => {
    if (isAnimating) return;
    
    const bank = bankCards.find((card) => card.id === bankId);
    const selectedLetter =
      bank?.letter ?? settlementLetters[Math.floor(Math.random() * settlementLetters.length)];

    setSelectedBank(bankId);
    setIsAnimating(true);
    setShowLetter(false); // Hide letter initially

    // Show letter quickly after interaction (reduced to 1000ms for faster feedback)
    setTimeout(() => {
      setSettlementLetter(selectedLetter);
      setShowLetter(true);
    }, 1000);

    // Reset animation after completion
    setTimeout(() => {
      setIsAnimating(false);
    }, 1200);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <section className="w-full py-14 hidden md:block">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-14">
          <h2 
            className="text-center font-semibold text-4xl leading-[34px]"
            style={{ color: '#0C2756', fontWeight: 500 }}
          >
            Loan Settlement Success Stories:
            <br style={{ lineHeight: '44px', marginBottom: '0.1em' }} />
            <span style={{ color: '#007AFF', marginTop: '0.02em', display: 'inline-block', lineHeight: '44px' }}>
              Real Results, Real Proof
            </span>
          </h2>

        <div className="relative w-full max-w-[1146px] h-[426px]" style={{ transform: 'scale(1.1)' }}>
          {/* Animated SVG paths */}
          <svg 
            className="absolute"
            style={{ width: '114px', height: '69px', left: '400px', top: '180px' }}
            width="114" 
            height="74" 
            viewBox="0 0 149 95" 
            fill="none"
          >
            <path 
              d="M0 2.5H50.6128C66.629 2.5 79.6127 15.4837 79.6127 31.5V63.5C79.6127 79.5163 92.5965 92.5 108.613 92.5H149" 
              stroke="#E6E6E6" 
              strokeWidth="3.5"
            />
            <path 
              d="M0 2.5H50.6128C66.629 2.5 79.6127 15.4837 79.6127 31.5V63.5C79.6127 79.5163 92.5965 92.5 108.613 92.5H149" 
              stroke="#3B82F6" 
              strokeWidth="3.5"
              strokeDasharray="200"
              strokeDashoffset={isAnimating && selectedBank ? "0" : "200"}
              style={{
                transition: 'stroke-dashoffset 0.2s ease-in-out, opacity 0.2s ease-in-out',
                transitionDelay: '0s',
                opacity: isAnimating && selectedBank ? 1 : 0
              }}
            />
          </svg>

          <svg 
            className="absolute"
            style={{ width: '114px', height: '75px', left: '400px', top: '250px' }}
            width="114" 
            height="78" 
            viewBox="0 0 149 102" 
            fill="none"
          >
            <path 
              d="M0 99.5H50.6128C66.629 99.5 79.6127 86.5163 79.6127 70.5V31.5C79.6127 15.4837 92.5965 2.5 108.613 2.5H149" 
              stroke="#E6E6E6" 
              strokeWidth="3.5"
            />
            <path 
              d="M0 99.5H50.6128C66.629 99.5 79.6127 86.5163 79.6127 70.5V31.5C79.6127 15.4837 92.5965 2.5 108.613 2.5H149" 
              stroke="#3B82F6" 
              strokeWidth="3.5"
              strokeDasharray="200"
              strokeDashoffset={isAnimating && selectedBank ? "0" : "200"}
              style={{
                transition: 'stroke-dashoffset 0.2s ease-in-out, opacity 0.2s ease-in-out',
                transitionDelay: '0.2s',
                opacity: isAnimating && selectedBank ? 1 : 0
              }}
            />
          </svg>

          <div 
            className="bank-card absolute flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{ 
              width: '113px', 
              height: '113px', 
              left: '143px', 
              top: '25px',
              borderRadius: '20px',
              background: '#FFF',
              boxShadow: '3px 3px 16px 0 rgba(0, 0, 0, 0.20)',
              padding: '30px 9px 30px 4px'
            }}
            onClick={() => handleBankClick('bank1')}
          >
            <img 
              src={bankCards[0].src} 
              alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner" 
              style={{ width: '100px', height: '54px' }}
            />
          </div>

          <div 
            className="bank-card absolute flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{ 
              width: '113px', 
              height: '113px', 
              left: '0px', 
              top: '74px',
              borderRadius: '20px',
              background: '#FFF',
              boxShadow: '3px 3px 16px 0 rgba(0, 0, 0, 0.20)',
              padding: '30px 6px 30px 7px'
            }}
            onClick={() => handleBankClick('bank2')}
          >
            <img 
              src={bankCards[1].src} 
              alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner" 
              style={{ width: '100px', height: '54px' }}
            />
          </div>

          <svg 
            className="absolute"
            style={{ width: '68px', height: '0px', left: '690px', top: '250px' }}
            width="68" 
            height="4" 
            viewBox="0 0 89 5" 
            fill="none"
          >
            <path 
              d="M0 2.5H89" 
              stroke="#E6E6E6" 
              strokeWidth="3.5"
            />
            <path 
              d="M0 2.5H89" 
              stroke="#3B82F6" 
              strokeWidth="3.5"
              strokeDasharray="100"
              strokeDashoffset={isAnimating && selectedBank ? "0" : "100"}
              style={{
                transition: 'stroke-dashoffset 0.2s ease-in-out, opacity 0.2s ease-in-out',
                transitionDelay: '0.4s',
                opacity: isAnimating && selectedBank ? 1 : 0
              }}
            />
          </svg>

          <div 
            className="absolute flex items-center justify-center"
            style={{ 
              width: '113px', 
              height: '113px', 
              left: '521px', 
              top: '193px',
              borderRadius: '20px',
              background: '#FFF',
              boxShadow: '3px 3px 16px 0 rgba(0, 0, 0, 0.20)',
              filter: 'drop-shadow(3px 3px 16px rgba(0, 0, 0, 0.20))'
            }}
          >
            <img 
              src="/credsettle-logo-black.svg" 
              alt="Credsettle Logo" 
              style={{ width: '81px', height: '24px' }}
            />
          </div>

          <svg 
            className="absolute"
            style={{ width: '124px', height: '4px', left: '635px', top: '250px' }}
            width="124" 
            height="4" 
            viewBox="0 0 113 4" 
            fill="none"
          >
            <path 
              d="M0 2H113" 
              stroke="#E6E6E6" 
              strokeWidth="3.5"
            />
            <path 
              d="M0 2H113" 
              stroke="#3B82F6" 
              strokeWidth="3.5"
              strokeDasharray="150"
              strokeDashoffset={isAnimating && selectedBank ? "0" : "150"}
              style={{
                transition: 'stroke-dashoffset 0.2s ease-in-out, opacity 0.2s ease-in-out',
                transitionDelay: '0.6s',
                opacity: isAnimating && selectedBank ? 1 : 0
              }}
            />
          </svg>

          <div 
            className="bank-card absolute flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{ 
              width: '113px', 
              height: '113px', 
              left: '0px', 
              top: '218px',
              borderRadius: '20px',
              background: '#FFF',
              boxShadow: '3px 3px 16px 0 rgba(0, 0, 0, 0.20)',
              padding: '29px 6px 30px 7px'
            }}
            onClick={() => handleBankClick('bank3')}
          >
            <img 
              src={bankCards[2].src} 
              alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner" 
              style={{ width: '100px', height: '54px' }}
            />
          </div>

          <div 
            className="bank-card absolute flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{ 
              width: '113px', 
              height: '113px', 
              left: '287px', 
              top: '267px',
              borderRadius: '20px',
              background: '#FFF',
              boxShadow: '3px 3px 16px 0 rgba(0, 0, 0, 0.20)',
              padding: '0 11px 0 10px'
            }}
            onClick={() => handleBankClick('bank4')}
          >
            <img 
              src={bankCards[3].src} 
              alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner" 
              style={{ width: '92px', height: '18px' }}
            />
          </div>

          <div 
            className="bank-card absolute flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{ 
              width: '113px', 
              height: '113px', 
              left: '143px', 
              top: '168px',
              borderRadius: '20px',
              background: '#FFF',
              boxShadow: '3px 3px 16px 0 rgba(0, 0, 0, 0.20)',
              padding: '30px 7px 30px 7px'
            }}
            onClick={() => handleBankClick('bank5')}
          >
            <img 
              src={bankCards[4].src} 
              alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner" 
              style={{ width: '100px', height: '54px' }}
            />
          </div>

          <div 
            className="bank-card absolute flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{ 
              width: '113px', 
              height: '113px', 
              left: '143px', 
              top: '312px',
              borderRadius: '20px',
              background: '#FFF',
              boxShadow: '3px 3px 16px 0 rgba(0, 0, 0, 0.20)',
              padding: '30px 7px 30px 7px'
            }}
            onClick={() => handleBankClick('bank6')}
          >
            <img 
              src={bankCards[5].src} 
              alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner" 
              style={{ width: '100px', height: '54px' }}
            />
          </div>

          <svg 
            className="absolute"
            style={{ width: '68px', height: '0px', left: '508px', top: '250px' }}
            width="68" 
            height="4" 
            viewBox="0 0 89 5" 
            fill="none"
          >
            <path 
              d="M0 2.5H89" 
              stroke="#E6E6E6" 
              strokeWidth="3.5"
            />
            <path 
              d="M0 2.5H89" 
              stroke="#3B82F6" 
              strokeWidth="3.5"
              strokeDasharray="100"
              strokeDashoffset={isAnimating && selectedBank ? "0" : "100"}
              style={{
                transition: 'stroke-dashoffset 0.2s ease-in-out, opacity 0.2s ease-in-out',
                transitionDelay: '0.8s',
                opacity: isAnimating && selectedBank ? 1 : 0
              }}
            />
          </svg>

          <div 
            className="bank-card absolute flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{ 
              width: '113px', 
              height: '113px', 
              left: '287px', 
              top: '124px',
              borderRadius: '20px',
              background: '#FFF',
              boxShadow: '3px 3px 16px 0 rgba(0, 0, 0, 0.20)',
              padding: '21px 0 11px 0'
            }}
            onClick={() => handleBankClick('bank7')}
          >
            <img 
              src={bankCards[6].src} 
              alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner" 
              style={{ width: '151px', height: '81px', marginLeft: '8px', marginTop: '0' }}
            />
          </div>

          <div 
            className="settlement-letter-container absolute flex items-center justify-center group"
            style={{ 
              width: '272px', 
              height: '348px', 
              left: '759px', 
              top: '76px',
              borderRadius: '31px',
              background: '#FFF',
              padding: '8px',
              transform: showLetter ? 'scale(1.05)' : 'scale(0.95)',
              boxShadow: showLetter ? '0 11px 44px rgba(0, 0, 0, 0.3)' : '3px 3px 35px 0 rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
              cursor: 'none',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease-out'
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showLetter ? (
              <>
                <img 
                  draggable={false}
                  src={settlementLetter} 
                  alt="Settlement Letter" 
                  className="letter-image"
                  style={{ 
                    width: '256px', 
                    height: '332px',
                    borderRadius: '23px',
                    boxShadow: '3px 3px 35px 0 rgba(0, 0, 0, 0.15)',
                    animation: 'fadeInLetter 0.3s ease-out forwards',
                    transition: isHovering ? 'transform 0.08s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: isHovering ? `scale(2.2)` : 'scale(1)',
                    transformOrigin: mousePosition.x > 0 && mousePosition.y > 0 ? `${mousePosition.x}px ${mousePosition.y}px` : 'center',
                    willChange: 'transform',
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }}
                />
                <div 
                  className="liquid-glass-bubble"
                  style={{
                    position: 'absolute',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: `radial-gradient(circle at ${mousePosition.x > 136 ? '40' : '60'}% ${mousePosition.y > 174 ? '35' : '45'}%, 
                      rgba(255, 255, 255, 0.05) 0%, 
                      rgba(255, 255, 255, 0.02) 40%, 
                      transparent 100%)`,
                    boxShadow: `
                      0 0 80px rgba(255, 255, 255, 0.08),
                      inset -10px -10px 40px rgba(255, 255, 255, 0.06),
                      inset 10px 10px 40px rgba(0, 0, 0, 0.01)`,
                    pointerEvents: 'none',
                    opacity: isHovering ? 1 : 0,
                    transition: isHovering ? 'opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)' : 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(0px)',
                    WebkitBackdropFilter: 'blur(0px)',
                    transform: 'translate(-50%, -50%)',
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    willChange: 'left, top'
                  }}
                />
              </>
            ) : (
              <div 
                className="flex flex-col items-center justify-center text-center p-8"
                style={{ 
                  width: '256px', 
                  height: '332px',
                  borderRadius: '23px',
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                  border: '2px dashed #cbd5e1'
                }}
              >
                <div 
                  className="text-2xl mb-4"
                  style={{ color: '#0C2756' }}
                >
                  💳
                </div>
                <h3 
                  className="font-semibold text-lg mb-2"
                  style={{ color: '#0C2756' }}
                >
                  View Settlement
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#64748b' }}
                >
                  Click any bank logo to view its settlement letter
                </p>
              </div>
            )}
          </div>

          <div 
            className="success-card absolute flex flex-col items-center justify-center gap-6"
            style={{ 
              width: '176px', 
              height: '227px', 
              left: '970px', 
              top: '0px',
              borderRadius: '23px',
              background: '#FFF',
              boxShadow: '3px 3px 16px 0 rgba(0, 0, 0, 0.20)',
              padding: '31px 37px'
            }}
          >
            <svg 
              width="100" 
              height="100" 
              viewBox="0 0 130 130" 
              fill="none"
            >
              <defs>
                <style>
                  {`
                    @keyframes spin {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                  `}
                </style>
              </defs>
              <path 
                d="M130 65C130 100.899 100.899 130 65 130C29.1015 130 0 100.899 0 65C0 29.1015 29.1015 0 65 0C100.899 0 130 29.1015 130 65ZM7.71987 65C7.71987 96.6349 33.3651 122.28 65 122.28C96.6349 122.28 122.28 96.6349 122.28 65C122.28 33.3651 96.6349 7.71987 65 7.71987C33.3651 7.71987 7.71987 33.3651 7.71987 65Z" 
                fill="#D9D9D9"
              />
              <path 
                d="M65 0C73.5359 1.0179e-07 81.9883 1.68128 89.8745 4.94784C97.7606 8.2144 104.926 13.0023 110.962 19.0381C116.998 25.0739 121.786 32.2395 125.052 40.1256C128.319 48.0118 130 56.4642 130 65.0001L122.28 65.0001C122.28 57.478 120.799 50.0295 117.92 43.0799C115.041 36.1303 110.822 29.8158 105.503 24.4969C100.184 19.1779 93.8697 14.9587 86.9202 12.0801C79.9706 9.20147 72.5221 7.71987 65 7.71987V0Z" 
                fill="#0C2756"
                style={{ animation: 'spin 3s linear infinite', transformOrigin: '65px 65px' }}
              />
              <path 
                d="M37 66.3333L55.6667 85L93 45" 
                stroke="#1DFC00" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <p 
              className="text-center font-normal text-lg leading-4"
              style={{ color: 'rgba(0, 0, 0, 0.70)' }}
            >
              Successful Settlement
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Mobile Version */}
      <section className="w-full py-8 px-5 md:hidden overflow-x-hidden">
        <div className="w-full mx-auto flex flex-col items-center gap-8 overflow-x-hidden">
          <h2
            className="text-center font-semibold leading-tight"
            style={{ color: '#0C2756', fontSize: '25px', lineHeight: '25px' }}
          >
            Settled & Debt-Free: Client Proof
          </h2>

          <div
            className="relative w-full max-w-[400px] mx-auto overflow-x-hidden"
            style={{ height: '635px', overflow: 'hidden' }}
          >
            {/* Bank Logo 1 - Top Left */}
            <div
              className="bank-card-mobile absolute flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-200"
              style={{
                width: '100px',
                height: '100px',
                left: '0px',
                top: '8px',
                borderRadius: '25px',
                background: '#FFF',
                boxShadow: '4px 4px 20.7px 0 rgba(0, 0, 0, 0.20)',
                padding: '24px 3px 25px 3px'
              }}
              onClick={() => handleBankClick('bank1')}
            >
              <img
                src={bankCards[0].src}
                alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner"
                style={{ width: '94px', height: '51px' }}
              />
            </div>

            {/* Bank Logo 2 - Center Top */}
            <div
              className="bank-card-mobile absolute flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-200"
              style={{
                width: '100px',
                height: '100px',
                left: '110px',
                top: '58px',
                borderRadius: '25px',
                background: '#FFF',
                boxShadow: '4px 4px 20.7px 0 rgba(0, 0, 0, 0.20)',
                padding: '30px 13px'
              }}
              onClick={() => handleBankClick('bank2')}
            >
              <img
                src={bankCards[1].src}
                alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner"
                style={{ width: '74px', height: '40px' }}
              />
            </div>

            {/* Bank Logo 3 - Top Right */}
            <div
              className="bank-card-mobile absolute flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-200"
              style={{
                width: '100px',
                height: '100px',
                left: '220px',
                top: '0px',
                borderRadius: '25px',
                background: '#FFF',
                boxShadow: '4px 4px 20.7px 0 rgba(0, 0, 0, 0.20)',
                padding: '30px 12px 30px 13px'
              }}
              onClick={() => handleBankClick('bank3')}
            >
              <img
                src={bankCards[2].src}
                alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner"
                style={{ width: '75px', height: '40px' }}
              />
            </div>

            {/* Bank Logo 4 - Middle Left */}
            <div
              className="bank-card-mobile absolute flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-200"
              style={{
                width: '100px',
                height: '100px',
                left: '0px',
                top: '118px',
                borderRadius: '25px',
                background: '#FFF',
                boxShadow: '4px 4px 20.7px 0 rgba(0, 0, 0, 0.20)',
                padding: '0 12px 0 13px'
              }}
              onClick={() => handleBankClick('bank4')}
            >
              <img
                src={bankCards[3].src}
                alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner"
                style={{ width: '75px', height: '14px' }}
              />
            </div>

            {/* Bank Logo 5 - Center Middle */}
            <div
              className="bank-card-mobile absolute flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-200"
              style={{
                width: '100px',
                height: '100px',
                left: '110px',
                top: '168px',
                borderRadius: '25px',
                background: '#FFF',
                boxShadow: '4px 4px 20.7px 0 rgba(0, 0, 0, 0.20)',
                padding: '30px 12px 30px 13px'
              }}
              onClick={() => handleBankClick('bank5')}
            >
              <img
                src={bankCards[4].src}
                alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner"
                style={{ width: '75px', height: '40px' }}
              />
            </div>

            {/* Bank Logo 6 - Middle Right */}
            <div
              className="bank-card-mobile absolute flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-200"
              style={{
                width: '100px',
                height: '100px',
                left: '220px',
                top: '110px',
                borderRadius: '25px',
                background: '#FFF',
                boxShadow: '4px 4px 20.7px 0 rgba(0, 0, 0, 0.20)',
                padding: '25px 4px'
              }}
              onClick={() => handleBankClick('bank6')}
            >
              <img
                src={bankCards[5].src}
                alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner"
                style={{ width: '92px', height: '50px' }}
              />
            </div>

          {/* Bank Logo 7 - Bottom Right */}
          <div
            className="bank-card-mobile absolute flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-200"
            style={{
              width: '100px',
              height: '100px',
              left: '220px',
              top: '210px',
              borderRadius: '25px',
              background: '#FFF',
              boxShadow: '4px 4px 20.7px 0 rgba(0, 0, 0, 0.20)',
              padding: '24px 8px'
            }}
            onClick={() => handleBankClick('bank7')}
          >
            <img
              src={bankCards[6].src}
              alt="Bank or NBFC Logo - CredSettle Loan Settlement Partner"
              style={{ width: '85px', height: '48px' }}
            />
          </div>

            {/* SVG Lines - Right Side */}
            <svg
              className="absolute"
              style={{ width: '48px', height: '289px', left: '308px', top: '50px' }}
              width="51"
              height="292"
              viewBox="0 0 51 292"
              fill="none"
            >
              <path
                d="M0 2.50023H19C35.0163 2.50023 48 15.484 48 31.5002V156.941"
                stroke="#E6E6E6"
                strokeWidth="5"
              />
              <path
                d="M0 120.498H19C35.0163 120.498 48 133.481 48 149.498V291.253"
                stroke="#E6E6E6"
                strokeWidth="5"
              />
              <path
                d="M0 2.50023H19C35.0163 2.50023 48 15.484 48 31.5002V156.941"
                stroke="#3B82F6"
                strokeWidth="5"
                strokeDasharray="200"
                strokeDashoffset={isAnimating && selectedBank ? "0" : "200"}
                style={{
                  transition: 'stroke-dashoffset 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  transitionDelay: '0s',
                  opacity: isAnimating && selectedBank ? 1 : 0
                }}
              />
              <path
                d="M0 120.498H19C35.0163 120.498 48 133.481 48 149.498V291.253"
                stroke="#3B82F6"
                strokeWidth="5"
                strokeDasharray="200"
                strokeDashoffset={isAnimating && selectedBank ? "0" : "200"}
                style={{
                  transition: 'stroke-dashoffset 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  transitionDelay: '0.35s',
                  opacity: isAnimating && selectedBank ? 1 : 0
                }}
              />
            </svg>

            {/* CredSettle Logo */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                width: '100px',
                height: '100px',
                left: '260px',
                top: '318px',
                borderRadius: '25px',
                background: '#FFF',
                boxShadow: '4px 4px 20.7px 0 rgba(0, 0, 0, 0.20)',
                padding: '0 12px 0 13px'
              }}
            >
              <img
                src="/credsettle-logo-black.svg"
                alt="Credsettle Logo"
                style={{ width: '75px', height: '23px' }}
              />
            </div>

            {/* SVG Line - Bottom */}
            <svg
              className="absolute"
              style={{ width: '148px', height: '95px', left: '195px', top: '417px' }}
              width="148"
              height="95"
              viewBox="0 0 148 95"
              fill="none"
            >
              <path
                d="M145 0V63.4472C145 79.4635 132.016 92.4472 116 92.4472L0 92.4472"
                stroke="#E6E6E6"
                strokeWidth="5"
              />
              <path
                d="M145 0V63.4472C145 79.4635 132.016 92.4472 116 92.4472L0 92.4472"
                stroke="#3B82F6"
                strokeWidth="5"
                strokeDasharray="300"
                strokeDashoffset={isAnimating && selectedBank ? "0" : "300"}
                style={{
                  transition: 'stroke-dashoffset 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  transitionDelay: '0.7s',
                  opacity: isAnimating && selectedBank ? 1 : 0
                }}
              />
            </svg>

            {/* Settlement Letter Container */}
            <div
              className="settlement-letter-mobile absolute"
              style={{
                width: '205px',
                height: '265px',
                left: '0px',
                top: '370px',
                borderRadius: '30px',
                boxShadow: '4px 4px 45.5px 0 rgba(0, 0, 0, 0.15)',
                overflow: 'hidden',
                transform: showLetter ? 'scale(1.02)' : 'scale(0.98)',
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease-out'
              }}
            >
              {showLetter ? (
                <>
                  <img
                    draggable={false}
                    src={settlementLetter}
                    alt="Settlement Letter"
                    className="w-full h-full object-cover"
                    style={{
                      borderRadius: '30px',
                      animation: 'fadeInLetter 0.3s ease-out forwards',
                      pointerEvents: 'none',
                      userSelect: 'none'
                    }}
                  />
                  <div
                    className="white-bar absolute"
                    style={{
                      width: '41px',
                      height: '7px',
                      left: '32px',
                      top: '46px',
                      borderRadius: '30px',
                      background: '#FFF'
                    }}
                  />
                </>
              ) : (
                <div
                  className="flex flex-col items-center justify-center text-center w-full h-full"
                  style={{
                    borderRadius: '30px',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                    border: '2px dashed #cbd5e1',
                    padding: '20px'
                  }}
                >
                  <div
                    className="text-2xl mb-3"
                    style={{ color: '#0C2756' }}
                  >
                    💳
                  </div>
                  <h3
                    className="font-semibold text-sm mb-2"
                    style={{ color: '#0C2756' }}
                  >
                    View Settlement
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: '#64748b' }}
                  >
                    Tap any bank logo
                  </p>
                </div>
              )}
            </div>

            {/* Successful Settlement Card */}
            <div
              className="success-card-mobile absolute flex flex-col items-center justify-center"
              style={{
                width: '102px',
                height: '132px',
                left: '158px',
                top: '501px',
                borderRadius: '15px',
                background: '#FFF',
                boxShadow: '4px 4px 20.7px 0 rgba(0, 0, 0, 0.20)',
                padding: '12px 18px 15.606px 18px',
                gap: '26px'
              }}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <style>
                    {`
                      @keyframes rotateCircle {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }
                    `}
                  </style>
                </defs>
                <path
                  d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM2.96918 25C2.96918 37.1673 12.8327 47.0308 25 47.0308C37.1673 47.0308 47.0308 37.1673 47.0308 25C47.0308 12.8327 37.1673 2.96918 25 2.96918C12.8327 2.96918 2.96918 12.8327 2.96918 25Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M25 0C28.2831 3.915e-08 31.534 0.646645 34.5671 1.90302C37.6002 3.15939 40.3562 5.00088 42.6777 7.32234C44.9991 9.64381 46.8406 12.3998 48.097 15.4329C49.3534 18.4661 50 21.717 50 25L47.0308 25C47.0308 22.1069 46.461 19.2421 45.3538 16.5692C44.2467 13.8963 42.6239 11.4676 40.5782 9.42187C38.5324 7.37612 36.1037 5.75333 33.4308 4.64618C30.7579 3.53902 27.8931 2.96918 25 2.96918V0Z"
                  fill="#0C2756"
                  style={{
                    animation: 'rotateCircle 3s linear infinite',
                    transformOrigin: '25px 25px'
                  }}
                />
                <path
                  d="M14.2307 25.5127L21.4102 32.6922L35.7692 17.3076"
                  stroke="#1DFC00"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                className="text-center font-normal leading-tight"
                style={{
                  color: 'rgba(0, 0, 0, 0.70)',
                  fontSize: '12px',
                  lineHeight: '14px'
                }}
              >
                Successful Settlement
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
