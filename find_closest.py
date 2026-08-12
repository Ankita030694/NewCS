import os
import difflib

urls = [
    "how-to-handle-recovery-agent-harrasement",
    "bajaj-finance-recovery-agent-harrasement-home-visit",
    "home",
    "best-lawyer-for-loan-settlement",
    "cibil-score-improvement",
    "legal-rights-against-harassment",
    "debt-harassment-laws-india",
    "cibil-score-after-settlement",
    "does-settling-a-loan-impact-my-cibil-credit-score",
    "debt-settlement-process",
    "compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers",
    "legal-notice-response",
    "rbi-guidelines-for-loan-settlement-2024",
    "credit-score-builder",
    "digital-cyber-loan-dispute-resolution",
    "contact-us",
    "anti-harassment",
    "how-to-negotiate-a-debt-settlement-with-creditors-in-india",
    "credit-card-debt-settlement",
    "what-happens-if-i-dont-pay-my-personal-loan",
    "how-to-deal-with-collection-calls",
    "loan-settlement-during-job-loss",
    "rbi-new-recovery-guidelines",
    "loan-settlement-for-senior-citizens",
    "loan-settlement/aditya-birla-capital",
    "legal-notice-for-loan-recovery",
    "loan-settlement/bajaj-finance",
    "legal-help-for-loan-default",
    "how-to-negotiate-a-personal-loan-settlement-with-lenders",
    "ignoring-calls-of-recovery-agent",
    "how-to-prove-financial-hardship-for-loan-settlement",
    "best-lawyer-for-bounced-security-check-for-loans-and-credit-card-disputes",
    "business-loan-settlement",
    "legal-help-for-loan-settlement-by-drt",
    "legal-help-for-loan-settlement",
    "best-lawyers-for-cibil-dispute-resolution",
    "loan-settlement/kreditbee",
    "calculate-my-settlement-savings",
    "debt-resolution-companies-contact-details",
    "services/bank-harassment",
    "resources/debt-resolution-program-reviews",
    "blogs/debt-resolution-program-reviews",
    "blogs/debt-resolution-program-reviews-",
    "resources/debt-resolution-program-reviews-"
]

dirs = os.listdir('/Users/piyushmishra/Desktop/NEWCS/NewCS/src/app')
dirs = [d for d in dirs if os.path.isdir(os.path.join('/Users/piyushmishra/Desktop/NEWCS/NewCS/src/app', d))]

print("URL -> Closest Matches")
for url in urls:
    name = url.split('/')[-1]
    matches = difflib.get_close_matches(name, dirs, n=3, cutoff=0.5)
    print(f"{url} -> {matches}")
