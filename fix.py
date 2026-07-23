import sys

file_path = 'src/app/auction-settlement-process-loan-recovery-explained/AuctionSettlementProcessClient.tsx'

with open(file_path, 'r') as f:
    content = f.read()

# Replace red classes with blue classes
content = content.replace('bg-red-50', 'bg-blue-50')
content = content.replace('bg-red-100', 'bg-blue-100')
content = content.replace('bg-red-600', 'bg-blue-600')
content = content.replace('bg-red-700', 'bg-blue-600')
content = content.replace('bg-red-800', 'bg-blue-700')
content = content.replace('bg-red-900', 'bg-blue-800')

content = content.replace('border-red-100', 'border-blue-100')
content = content.replace('border-red-300', 'border-blue-300')
content = content.replace('border-red-600', 'border-blue-600')
content = content.replace('border-red-700', 'border-green-700')

content = content.replace('text-red-300', 'text-blue-300')
content = content.replace('text-red-600', 'text-blue-600')
content = content.replace('text-red-700', 'text-blue-600')
content = content.replace('text-red-800', 'text-blue-800')
content = content.replace('text-red-900', 'text-blue-900')

# Specific Hero gradient
content = content.replace(
    "background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #8B0000 0%, #300000 100%)'",
    "background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)'"
)

# Specific active states
content = content.replace("? 'bg-blue-600 text-white shadow-md'", "? 'bg-blue-600 text-white shadow-md'")

# Sidebar height and sticky spacing
content = content.replace('sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide', 'sticky top-14')
content = content.replace("offset = 120", "offset = 100")
content = content.replace("offset = 140", "offset = 80")

# article exact class
content = content.replace(
    '<article className="prose prose-lg max-w-none prose-headings:font-black prose-a:text-red-600">', 
    '<article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">'
)
content = content.replace(
    '<article className="prose prose-lg max-w-none prose-headings:font-black prose-a:text-blue-600">', 
    '<article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">'
)

# Breadcrumb
breadcrumb = """
            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4 font-sans">
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
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2">
                                        Auction Settlement Process
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
"""

if "Breadcrumb Section" not in content:
    content = content.replace('            {/* 3-Column Layout */}', breadcrumb)

with open(file_path, 'w') as f:
    f.write(content)
