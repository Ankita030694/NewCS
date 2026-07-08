client_file = "src/app/icici-credit-card-settlement/IciciCreditCardSettlementClient.tsx"

with open(client_file, "r") as f:
    content = f.read()

tldr_html = """
            <section className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-3">TL;DR (Summary)</h2>
              <ul className="list-disc pl-5 text-base text-gray-800 space-y-2">
                <li><strong>Policy:</strong> ICICI offers One-Time Settlement (OTS) usually after 90+ days of delinquency when the account is an NPA.</li>
                <li><strong>Process:</strong> Save a lump sum, write a hardship letter with proof (medical/job loss), and negotiate firmly without accepting the first offer.</li>
                <li><strong>Rights:</strong> RBI rules forbid recovery agents from harassing you, calling outside 8 AM - 7 PM, or contacting third parties.</li>
                <li><strong>Impact:</strong> Settlement stops legal action but marks your CIBIL as "Settled", lowering your score and affecting future borrowing for 3-7 years.</li>
              </ul>
            </section>
"""

# Remove the incorrectly placed TLDR block
# Using string replace with exactly what we expect there
wrong_placement_start = content.find('<section className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">')
wrong_placement_end = content.find('</section>', wrong_placement_start) + len('</section>')

if wrong_placement_start != -1:
    content = content[:wrong_placement_start] + content[wrong_placement_end:]

# Add it correctly to the article block
article_start = content.find('<article className="lg:w-3/5')
article_end_tag = content.find('>', article_start) + 1

content = content[:article_end_tag] + "\n" + tldr_html + content[article_end_tag:]

with open(client_file, "w") as f:
    f.write(content)

print("TLDR Fixed")
