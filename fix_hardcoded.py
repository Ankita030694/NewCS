import os
import glob

directory = '/Users/piyushmishra/Desktop/NEWCS/NewCS/src'

replacements = {
    "/how-to-handle-recovery-agent-harrasement": "/how-to-handle-recovery-agent-harrasment",
    "/bajaj-finance-recovery-agent-harrasement-home-visit": "/bajaj-finance-recovery-agent-harassment-home-visit",
    "/best-lawyer-for-loan-settlement": "/loan-settlement",
    "/cibil-score-improvement": "/how-to-improve-cibil-score",
    "/legal-rights-against-harassment": "/how-to-handle-recovery-agent-harrasment",
    "/debt-harassment-laws-india": "/resources",
    "/cibil-score-after-settlement": "/how-to-improve-cibil-score-after-loan-settlement",
    "/does-settling-a-loan-impact-my-cibil-credit-score": "/how-does-settling-a-loan-impact-my-cibil-credit-score",
    "/debt-settlement-process": "/loan-settlement-process-in-hindi",
    "/compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers": "/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers",
    "/legal-notice-response": "/bank-sent-legal-notice-for-loan-what-to-do",
    "/rbi-guidelines-for-loan-settlement-2024": "/rbi-rules-for-recovery-agents",
    "/credit-score-builder": "/services/credit-score-builder",
    "/digital-cyber-loan-dispute-resolution": "/digital-online-cyber-loan-disputes",
    "/anti-harassment": "/services/anti-harassment",
    "/how-to-negotiate-a-debt-settlement-with-creditors-in-india": "/how-to-negotiate-a-debt-settlement-with-creditors-in-India",
    "/credit-card-debt-settlement": "/credit-card-settlement",
    "/what-happens-if-i-dont-pay-my-personal-loan": "/punishment-for-non-payment-of-personal-loan-in-india",
    "/how-to-deal-with-collection-calls": "/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program",
    "/loan-settlement-during-job-loss": "/loan-settlement-for-borrowers-facing-economic-downturn",
    "/rbi-new-recovery-guidelines": "/rbi-new-recovery-guidelines-july-2026",
    "/loan-settlement-for-senior-citizens": "/loan-settlement-for-senior-citizens-pension-holders-india",
    "/loan-settlement/aditya-birla-capital": "/loan-settlement",
    "/legal-notice-for-loan-recovery": "/bank-sent-legal-notice-for-loan-what-to-do",
    "/loan-settlement/bajaj-finance": "/loan-settlement",
    "/legal-help-for-loan-default": "/loan-settlement",
    "/how-to-negotiate-a-personal-loan-settlement-with-lenders": "/how-can-I-negotiate-a-personal-loan-settlement-with-lenders",
    "/ignoring-calls-of-recovery-agent": "/how-to-handle-recovery-agent-harrasment",
    "/how-to-prove-financial-hardship-for-loan-settlement": "/how-to-ask-bank-for-settlement",
    "/best-lawyer-for-bounced-security-check-for-loans-and-credit-card-disputes": "/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes",
    "/business-loan-settlement": "/services/business-loan-settlement",
    "/legal-help-for-loan-settlement-by-drt": "/best-lawyer-for-loan-settlement-by-drt",
    "/legal-help-for-loan-settlement": "/loan-settlement",
    "/best-lawyers-for-cibil-dispute-resolution": "/resources",
    "/loan-settlement/kreditbee": "/loan-settlement",
    "/calculate-my-settlement-savings": "/personal-loan-settlement-calculator",
    "/debt-resolution-companies-contact-details": "/contact",
    "/services/bank-harassment": "/services/anti-harassment",
    "/resources/debt-resolution-program-reviews": "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers",
    "/blogs/debt-resolution-program-reviews": "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers",
    "/blogs/debt-resolution-program-reviews-": "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers",
    "/resources/debt-resolution-program-reviews-": "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers"
}

modified = 0
for root, _, files in os.walk(directory):
    for f in files:
        if not (f.endswith('.tsx') or f.endswith('.ts') or f.endswith('.jsx') or f.endswith('.js')):
            continue
        path = os.path.join(root, f)
        try:
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            original_content = content
            for old, new in replacements.items():
                content = content.replace(f'"{old}"', f'"{new}"')
                content = content.replace(f"'{old}'", f"'{new}'")
                content = content.replace(f'href="{old}"', f'href="{new}"')
                
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f"Updated {path}")
                modified += 1
        except Exception as e:
            print(f"Error reading {path}: {e}")

print(f"Total files updated: {modified}")
