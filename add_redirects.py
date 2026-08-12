import os

path = '/Users/piyushmishra/Desktop/NEWCS/NewCS/next.config.ts'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the existing typo
content = content.replace(
    'destination: "/how-to-handle-recovery-agent-harrasement"',
    'destination: "/how-to-handle-recovery-agent-harrasment"'
)

# New redirects to add
redirects = [
    {"source": "/how-to-handle-recovery-agent-harrasement", "destination": "/how-to-handle-recovery-agent-harrasment", "permanent": "true"},
    {"source": "/bajaj-finance-recovery-agent-harrasement-home-visit", "destination": "/bajaj-finance-recovery-agent-harassment-home-visit", "permanent": "true"},
    {"source": "/home", "destination": "/", "permanent": "true"},
    {"source": "/best-lawyer-for-loan-settlement", "destination": "/loan-settlement", "permanent": "true"},
    {"source": "/cibil-score-improvement", "destination": "/how-to-improve-cibil-score", "permanent": "true"},
    {"source": "/legal-rights-against-harassment", "destination": "/how-to-handle-recovery-agent-harrasment", "permanent": "true"},
    {"source": "/debt-harassment-laws-india", "destination": "/resources", "permanent": "true"},
    {"source": "/cibil-score-after-settlement", "destination": "/how-to-improve-cibil-score-after-loan-settlement", "permanent": "true"},
    {"source": "/does-settling-a-loan-impact-my-cibil-credit-score", "destination": "/how-does-settling-a-loan-impact-my-cibil-credit-score", "permanent": "true"},
    {"source": "/debt-settlement-process", "destination": "/loan-settlement-process-in-hindi", "permanent": "true"},
    {"source": "/compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers", "destination": "/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers", "permanent": "true"},
    {"source": "/legal-notice-response", "destination": "/bank-sent-legal-notice-for-loan-what-to-do", "permanent": "true"},
    {"source": "/rbi-guidelines-for-loan-settlement-2024", "destination": "/rbi-rules-for-recovery-agents", "permanent": "true"},
    {"source": "/credit-score-builder", "destination": "/services/credit-score-builder", "permanent": "true"},
    {"source": "/digital-cyber-loan-dispute-resolution", "destination": "/digital-online-cyber-loan-disputes", "permanent": "true"},
    {"source": "/contact-us", "destination": "/contact", "permanent": "true"},
    {"source": "/anti-harassment", "destination": "/services/anti-harassment", "permanent": "true"},
    {"source": "/how-to-negotiate-a-debt-settlement-with-creditors-in-india", "destination": "/how-to-negotiate-a-debt-settlement-with-creditors-in-India", "permanent": "true"},
    {"source": "/credit-card-debt-settlement", "destination": "/credit-card-settlement", "permanent": "true"},
    {"source": "/what-happens-if-i-dont-pay-my-personal-loan", "destination": "/punishment-for-non-payment-of-personal-loan-in-india", "permanent": "true"},
    {"source": "/how-to-deal-with-collection-calls", "destination": "/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program", "permanent": "true"},
    {"source": "/loan-settlement-during-job-loss", "destination": "/loan-settlement-for-borrowers-facing-economic-downturn", "permanent": "true"},
    {"source": "/rbi-new-recovery-guidelines", "destination": "/rbi-new-recovery-guidelines-july-2026", "permanent": "true"},
    {"source": "/loan-settlement-for-senior-citizens", "destination": "/loan-settlement-for-senior-citizens-pension-holders-india", "permanent": "true"},
    {"source": "/loan-settlement/aditya-birla-capital", "destination": "/loan-settlement", "permanent": "true"},
    {"source": "/legal-notice-for-loan-recovery", "destination": "/bank-sent-legal-notice-for-loan-what-to-do", "permanent": "true"},
    {"source": "/loan-settlement/bajaj-finance", "destination": "/loan-settlement", "permanent": "true"},
    {"source": "/legal-help-for-loan-default", "destination": "/loan-settlement", "permanent": "true"},
    {"source": "/how-to-negotiate-a-personal-loan-settlement-with-lenders", "destination": "/how-can-I-negotiate-a-personal-loan-settlement-with-lenders", "permanent": "true"},
    {"source": "/how-to-prove-financial-hardship-for-loan-settlement", "destination": "/how-to-ask-bank-for-settlement", "permanent": "true"},
    {"source": "/best-lawyer-for-bounced-security-check-for-loans-and-credit-card-disputes", "destination": "/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes", "permanent": "true"},
    {"source": "/business-loan-settlement", "destination": "/services/business-loan-settlement", "permanent": "true"},
    {"source": "/legal-help-for-loan-settlement-by-drt", "destination": "/best-lawyer-for-loan-settlement-by-drt", "permanent": "true"},
    {"source": "/legal-help-for-loan-settlement", "destination": "/loan-settlement", "permanent": "true"},
    {"source": "/best-lawyers-for-cibil-dispute-resolution", "destination": "/resources", "permanent": "true"},
    {"source": "/loan-settlement/kreditbee", "destination": "/loan-settlement", "permanent": "true"},
    {"source": "/calculate-my-settlement-savings", "destination": "/personal-loan-settlement-calculator", "permanent": "true"},
    {"source": "/debt-resolution-companies-contact-details", "destination": "/contact", "permanent": "true"},
    {"source": "/services/bank-harassment", "destination": "/services/anti-harassment", "permanent": "true"},
    {"source": "/resources/debt-resolution-program-reviews", "destination": "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers", "permanent": "true"},
    {"source": "/blogs/debt-resolution-program-reviews", "destination": "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers", "permanent": "true"},
    {"source": "/blogs/debt-resolution-program-reviews-", "destination": "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers", "permanent": "true"},
    {"source": "/resources/debt-resolution-program-reviews-", "destination": "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers", "permanent": "true"}
]

# Generate string
redirects_str = ""
for r in redirects:
    redirects_str += f"""      {{
        source: "{r['source']}",
        destination: "{r['destination']}",
        permanent: true,
      }},
"""

# Insert redirects right before the end of the array `    ];\n  },\n};`
insertion_point = content.rfind("    ];")
if insertion_point != -1:
    content = content[:insertion_point] + redirects_str + content[insertion_point:]
else:
    print("Could not find insertion point!")
    
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated next.config.ts")
