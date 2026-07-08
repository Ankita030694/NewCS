import re

file_path = "src/app/icici-credit-card-settlement/IciciCreditCardSettlementClient.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Make the layout 3 columns
left_aside = """          <aside className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
                  {navLinks.map((link) => (
                    <a 
                      key={link.id}
                      href={`#${link.id}`} 
                      className={getLinkClass(link.id, false)}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveId(link.id);
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>"""

right_aside = """
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="/anujbhiya.png" alt="Anuj Bhiya Legal Expert" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50" />
                <h4 className="font-bold text-gray-900">Anuj Bhiya</h4>
                <p className="text-sm text-gray-500 mb-4">Senior Legal Advocate & Financial Strategist</p>
                <p className="text-xs text-gray-400 italic">Expert in dealing with banking regulations, recovery agent harassment, and complex debt restructuring matters.</p>
              </div>
            </div>
          </aside>"""

# Find the old left aside and replace it
# The old aside spans from <aside className="lg:w-1/6 hidden lg:block"> down to </aside> before <article
aside_start = content.find('<aside className="lg:w-1/6 hidden lg:block">')
article_start = content.find('<article', aside_start)

content = content[:aside_start] + left_aside + "\n\n" + content[article_start:]

# Now change the <article width class
content = content.replace('<article className="lg:w-2/3 w-full', '<article className="lg:w-3/5 w-full')

# Insert the right aside after the article
article_end = content.rfind('</article>')
content = content[:article_end + 10] + right_aside + content[article_end + 10:]

# Now decrease text sizes in the article area only, or globally?
# We'll just replace globally because it's a page-wide request.
content = content.replace('prose-lg', 'prose')
content = content.replace('text-7xl', 'text-5xl')
content = content.replace('text-5xl', 'text-4xl')
content = content.replace('text-4xl', 'text-3xl')
content = content.replace('text-3xl', 'text-2xl')
content = content.replace('text-2xl', 'text-xl')
content = content.replace('text-xl', 'text-lg')
# For 'text-lg' we might replace it with 'text-base' but it might ruin small things. Let's do it for paragraph text sizes.
content = content.replace('text-lg', 'text-base')

with open(file_path, "w") as f:
    f.write(content)

print("Done")
