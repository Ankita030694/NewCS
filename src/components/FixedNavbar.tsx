'use client';

export default function FixedNavbar() {
  return (
    <div
      style={{

        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9999,
        pointerEvents: 'auto'
      }}
    >
    <nav 
      className="w-full bg-transparent"
    >
      <div className="container mx-auto px-24 py-4">
        <div className="flex justify-between items-center">
          {/* Left Column - Logo */}
          <div className="flex-shrink-0">
            <img src="/credsettle-logo.svg" alt="CredSettle Logo" className="h-12" />
          </div>
          
          {/* Middle Column - Navigation Links */}
          <div className="hidden md:flex space-x-16">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-lg" style={{ fontWeight: 500 }}>Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-lg" style={{ fontWeight: 500 }}>Services</a>
            <a href="/resources" className="text-white hover:text-gray-300 transition-colors duration-200 text-lg" style={{ fontWeight: 500 }}>Resources</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-lg" style={{ fontWeight: 500 }}>About Us</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-lg" style={{ fontWeight: 500 }}>Contact Us</a>
          </div>
          
          {/* Right Column - Register Button */}
          <div className="flex-shrink-0">
            <button
              className="bg-[#FFFFFF] text-[#0C2756] px-5 py-2.5 text-lg rounded-3xl font-medium transition-colors duration-200 hover:bg-gray-100"
              style={{
                boxShadow:
                  "0 -5.2px 13.4px 0 rgba(9, 9, 9, 0.30) inset, 0 5.2px 13.4px 0 rgba(9, 9, 9, 0.30) inset"
              }}
              onClick={() => {
                const element = document.querySelector('a[href="#"] + a[href="#"] + a[href="#"] + a[href="#"] + a[href="#"]');
                if (element) {
                  (element as HTMLElement).click();
                }
              }}
            >
              Register now
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
