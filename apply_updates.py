import re

client_file = "src/app/icici-credit-card-settlement/IciciCreditCardSettlementClient.tsx"

with open(client_file, "r") as f:
    content = f.read()

# 1. Change Author to Rohan Sharma and use IG generic avatar
content = content.replace('Anuj Bhiya', 'Rohan Sharma')
content = content.replace('/anujbhiya.png', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg')

# 2. Make font styling clean
classes_to_remove = [r'\bitalic\b', r'\buppercase\b', r'\btracking-tighter\b', r'\bfont-light\b', r'\btracking-wider\b', r'\btracking-tight\b']
for cls in classes_to_remove:
    content = re.sub(cls, '', content)

# 3. Insert TLDR section at the top of the article
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

# Insert right after <article ...>
article_tag_end = content.find('border-gray-100">') + len('border-gray-100">')
content = content[:article_tag_end] + "\n" + tldr_html + content[article_tag_end:]

with open(client_file, "w") as f:
    f.write(content)

page_file = "src/app/icici-credit-card-settlement/page.tsx"
with open(page_file, "r") as f:
    page_content = f.read()

page_content = page_content.replace('Anuj Bhiya', 'Rohan Sharma')

with open(page_file, "w") as f:
    f.write(page_content)

print("Updates applied")
