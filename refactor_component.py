import re
import sys

def refactor_file(filepath, breadcrumb_name):
    with open(filepath, 'r') as f:
        content = f.read()

    # 1. Add mobileNavRef
    content = content.replace(
        "const [isMobile, setIsMobile] = useState(false);",
        "const [isMobile, setIsMobile] = useState(false);\n  const mobileNavRef = useRef<HTMLDivElement>(null);"
    )

    # 2. Add scroll active item hook and getLinkClass
    hook_insertion = """
  // Scroll active item into view on mobile
  useEffect(() => {
    if (isMobile && activeId && mobileNavRef.current) {
      const activeLink = mobileNavRef.current.querySelector(`[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeId, isMobile]);

  /* 
    Helper class for links 
  */
  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      // Desktop vertical style
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };
"""
    # Insert it right before "const navLinks = ["
    content = content.replace("  const navLinks = [", hook_insertion + "\n  const navLinks = [")

    # 3. Replace layout wrapper
    old_layout_wrapper = """    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Table of Contents</h3>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                      activeId === link.id
                        ? 'bg-blue-50 text-blue-700 font-bold'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:w-2/4">
            <article className="prose prose-lg max-w-none prose-blue">"""
            
    new_layout_wrapper = f"""    <>
      {{/* Breadcrumb Section */}}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    {breadcrumb_name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {{/* Main Content Layout - 3 Column */}}
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        
        {{/* Mobile: Sticky Horizontal Scroll Table of Contents */}}
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={{mobileNavRef}}>
          <nav className="flex gap-6 text-sm font-medium">
            {{navLinks.map((link) => (
              <a 
                key={{link.id}} 
                href={{`#${{link.id}}`}} 
                className={{getLinkClass(link.id, true)}}
                onClick={{(e) => {{
                  e.preventDefault();
                  document.querySelector(`#${{link.id}}`)?.scrollIntoView({{ behavior: 'smooth' }});
                  setActiveId(link.id);
                }}}}
              >
                {{link.label}}
              </a>
            ))}}
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {{/* Left Column: Table of Contents */}}
          <div className="lg:w-1/6 hidden lg:block">
            
            {{/* Desktop: Sticky Vertical Sidebar */}}
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
                  {{navLinks.map((link) => (
                    <a 
                      key={{link.id}}
                      href={{`#${{link.id}}`}} 
                      className={{getLinkClass(link.id, false)}}
                      onClick={{(e) => {{
                        e.preventDefault();
                        document.querySelector(`#${{link.id}}`)?.scrollIntoView({{ behavior: 'smooth' }});
                        setActiveId(link.id);
                      }}}}
                    >
                      {{link.label}}
                    </a>
                  ))}}
                </nav>
              </div>
            </div>
          </div>

          {{/* Middle Column: Main Content */}}
          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">"""
            
    if old_layout_wrapper in content:
        content = content.replace(old_layout_wrapper, new_layout_wrapper)
    else:
        print(f"Failed to find layout wrapper for {filepath}")

    # 4. Replace ending wrappers and add Right Column + Grids
    match = re.search(r'            </article>\n          </div>\n\n          <div className="lg:w-1/4 hidden lg:block">.*?</>\n', content, re.DOTALL)
    if not match:
        match = re.search(r'            </article>\n          </div>.*?</>\n', content, re.DOTALL)

    new_end_wrapper = """            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Don't face the bank alone. Get expert legal support today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v 100% Confidential</p>
                  <p className="mt-1">v RBI Compliant Process</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bank Settlement Directory Grid */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Settlement Services by Bank</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'HDFC Bank', href: '/loan-settlement/hdfc' },
            { name: 'SBI (State Bank of India)', href: '/loan-settlement/sbi' },
            { name: 'ICICI Bank', href: '/loan-settlement/icici' },
            { name: 'IndusInd Bank', href: '/loan-settlement/indusind' },
            { name: 'Axis Bank', href: '/loan-settlement/axis-bank' },
            { name: 'Kotak Mahindra Bank', href: '/loan-settlement/kotak' },
            { name: 'IDFC First Bank', href: '/loan-settlement/idfc' },
            { name: 'Yes Bank', href: '/loan-settlement/yes-bank' },
            { name: 'RBL Bank', href: '/loan-settlement/rbl-bank' },
            { name: 'Bajaj Finserv', href: '/loan-settlement/bajaj-finserv' },
            { name: 'Aditya Birla Capital', href: '/loan-settlement/aditya-birla' },
            { name: 'Hero Fincorp', href: '/loan-settlement/hero-fincorp' },
            { name: 'Union Bank', href: '/loan-settlement/union-bank' },
            { name: 'Federal Bank', href: '/loan-settlement/federal-bank' },
            { name: 'Bank of Baroda', href: '/loan-settlement/bank-of-baroda' },
            { name: 'DMI Finance', href: '/loan-settlement/dmi-finance' },
            { name: 'Kisetsu Saison Finance', href: '/loan-settlement/kisetsu' },
            { name: 'SMFG India Credit', href: '/loan-settlement/smfg-india-credit' },
            { name: 'Fibe (EarlySalary)', href: '/loan-settlement/fibe' },
            { name: 'Poonawalla Fincorp', href: '/loan-settlement/poonawalla' },
            { name: 'Tata Capital', href: '/loan-settlement/tata-capital' },
            { name: 'KrazyBee (KreditBee)', href: '/loan-settlement/krazybee' },
            { name: 'Piramal Finance', href: '/loan-settlement/piramal-finance' },
            { name: 'Stashfin (Akara Capital)', href: '/loan-settlement/stashfin' },
            { name: 'AU Small Finance Bank', href: '/loan-settlement/au-small-finance-bank' },
            { name: 'PayU Finance', href: '/loan-settlement/payu-finance' },
          ].map((bank) => (
            <Link 
              key={bank.href}
              href={bank.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{bank.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Areas We Serve In Grid */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas We Serve In</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'Andhra Pradesh', href: '/loan-settlement/andhra-pradesh' },
            { name: 'Delhi', href: '/loan-settlement/delhi' },
            { name: 'Gujarat', href: '/loan-settlement/gujarat' },
            { name: 'Haryana', href: '/loan-settlement/haryana' },
            { name: 'Karnataka', href: '/loan-settlement/karnataka' },
            { name: 'Maharashtra', href: '/loan-settlement/maharashtra' },
            { name: 'Rajasthan', href: '/loan-settlement/rajasthan' },
            { name: 'Tamil Nadu', href: '/loan-settlement/tamil-nadu' },
            { name: 'Telangana', href: '/loan-settlement/telangana' },
            { name: 'Uttar Pradesh', href: '/loan-settlement/uttar-pradesh' },
            { name: 'West Bengal', href: '/loan-settlement/west-bengal' },
          ].map((area) => (
            <Link 
              key={area.href}
              href={area.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>"""
    
    if match:
        content = content.replace(match.group(0), new_end_wrapper)
    else:
        print(f"Failed to find end wrapper for {filepath}")

    with open(filepath, 'w') as f:
        f.write(content)
        
refactor_file("src/app/bank-froze-salary-account-for-loan-default-how-to-get-salary/SalaryAccountFreezeClient.tsx", "Salary Account Freeze")
refactor_file("src/app/loan-taken-in-spouse-name-without-consent-what-to-do/SpouseLoanConsentClient.tsx", "Spouse Loan Without Consent")
