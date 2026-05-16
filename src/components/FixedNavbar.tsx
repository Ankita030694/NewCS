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
      
        </div>
      </div>
    </nav>
    </div>
  );
}
