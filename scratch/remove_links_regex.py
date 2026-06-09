import os
import re

broken_links = [
    "/services/bank-harassment",
    "/business-loan-settlement",
    "/cibil-score-improvement",
    "/legal-notice-response",
    "/debt-settlement-process",
    "/credit-card-debt-settlement",
    "/debt-harassment-laws-india",
    "/cibil-score-after-settlement",
    "/what-is-ots",
    "/anti-harassment",
    "/credit-score-builder",
    "/credit-card-settlement",
    "/personal-loan-settlement",
    "/does-settling-a-loan-impact-my-cibil-credit-score",
    "/legal-notice-for-loan-recovery",
    "/how-to-handle-recovery-agent-harrasement",
    "/ignoring-calls-of-recovery-agent",
    "/legal-rights-against-harassment",
    "/services/anti-harassment",
    "/best-apps-for-managing-loan-settlement-offers-in-India",
    "/digital-cyber-loan-dispute-resolution",
    "/how-to-prove-financial-hardship-for-loan-settlement",
    "/legal-help-for-loan-settlement-by-drt",
    "/legal-services-near-me",
    "/api/rss",
    "/about-us",
    "/loan-settlement-process",
    "/faq",
    "/legal-help-for-loan-settlement",
    "/best-lawyer-for-loan-settlement",
    "/services/loan-settlement",
    "/best-lawyers-for-cibil-dispute-resolution"
]

files = [
    "src/app/cred-settle-support-for-avoiding-aggressive-recovery-practices/AggressiveRecoverySupportClient.tsx",
    "src/app/mudra-loan-settlement-legal-help/MudraLoanSettlementClient.tsx",
    "src/app/do-banks-file-fir-for-credit-card-dues/CreditCardFIRClient.tsx",
    "src/app/can-i-settle-my-debts-without-using-a-third-party-company/SettleSelfClient.tsx",
    "src/app/what-is-the-best-way-to-negotiate-loan-settlement/NegotiationGuideClient.tsx",
    "src/app/1-debt-management-services-in-india/DebtManagementClient.tsx",
    "src/app/how-to-document-evidence-of-debt-collector-harassment/DocumentEvidenceClient.tsx",
    "src/app/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents/IsThereAnyMobileSoftwareClient.tsx",
    "src/app/what-is-the-success-rate-of-debt-settlement-programs/SuccessRateClient.tsx",
    "src/app/loan-default-recovery-freeze-defense/LoanDefaultRecoveryFreezeDefenseClient.tsx",
    "src/app/bank-calling-references-and-family-members/BankCallingReferencesClient.tsx",
    "src/app/get-a-free-consultation-for-debt-settlement-options/ConsultationClient.tsx",
    "src/app/bajaj-finance-recovery-agent-harassment-home-visit/BajajHomeVisitClient.tsx",
    "src/app/how-to-protect-family-members-from-debt-collector-calls/ProtectFamilyClient.tsx",
    "src/app/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india/DebtReliefClient.tsx",
    "src/app/debt-management-services/DebtManagementClient.tsx",
    "src/app/what-are-the-consequences-of-not-paying-emi/EMIConsequencesClient.tsx",
    "src/app/dispute-over-forged-loan-signatures/DisputeForgedSignaturesClient.tsx",
    "src/app/SME-loan-dispute-resolution/SmeLoanDisputeResolutionClient.tsx",
    "src/app/legal-case-for-loan-sanction-without-consent/LoanSanctionWithoutConsentClient.tsx",
    "src/app/cheque-bounce-case-in-noida/ChequeBounceNoidaClient.tsx",
    "src/app/authority/blogs/page.tsx",
    "src/app/how-to-avoid-scams-in-the-debt-settlement-industry/ScamAvoidanceClient.tsx",
    "src/app/what-are-my-rights-when-dealing-with-loan-recovery-agents/RightsClient.tsx",
    "src/app/legal-help-for-non-closure-of-settled-loan/LegalHelpNonClosureClient.tsx",
    "src/app/find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement/CertifiedFinancialPlannersClient.tsx",
    "src/app/what-kind-of-loans-can-not-be-settled/LoansNotSettledClient.tsx",
    "src/app/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt/LoanSettlementAgenciesClient.tsx",
    "src/app/digital-online-cyber-loan-disputes/DigitalOnlineCyberLoanDisputesClient.tsx"
]

def clean_file(filepath):
    if not os.path.exists(filepath):
        return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. First, let's remove any <li> containing a link to a broken route
    # Matches: <li>...<Link href="broken">...</Link>...</li> including multi-line
    for link in broken_links:
        pattern = r'<li>\s*<Link\s+[^>]*href=["\']' + re.escape(link) + r'["\'][^>]*>.*?</Link>\s*</li>'
        content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Matches: <Link href="broken">...</Link> where it's a standalone block or in lists (like in sidebar)
        # e.g., <Link href="/services/bank-harassment" className="...">...</Link>
        # We can replace them with a div or span if they are block elements, or remove if they are list items
        # Let's check if they have block/group class, if so, turn to div/span:
        def link_replacer(match):
            full_tag = match.group(0)
            tag_content = match.group(2)
            attributes = match.group(1)
            
            # If the Link tag wraps complex content, let's change to a div or span
            if 'className=' in attributes:
                # Extract className
                class_match = re.search(r'className=["\']([^"\']+)["\']', attributes)
                if class_match:
                    classes = class_match.group(1)
                    # Remove hover or pointer classes, change text color to neutral gray-400 or slate-400
                    classes_neutral = classes.replace('text-blue-600', 'text-gray-400').replace('hover:underline', '').replace('hover:text-blue-600', '').replace('text-blue-800', 'text-gray-400').replace('hover:bg-blue-50', '')
                    if 'flex' in classes or 'block' in classes:
                        return f'<div className="{classes_neutral}">{tag_content}</div>'
                    else:
                        return f'<span className="{classes_neutral}">{tag_content}</span>'
            return f'<span className="text-gray-400">{tag_content}</span>'
            
        link_pattern = r'<Link\s+([^>]*href=["\']' + re.escape(link) + r'["\'][^>]*)>(.*?)</Link>'
        content = re.sub(link_pattern, link_replacer, content, flags=re.DOTALL)
        
        # Also match standard <a> tags
        def a_replacer(match):
            tag_content = match.group(2)
            attributes = match.group(1)
            if 'className=' in attributes:
                class_match = re.search(r'className=["\']([^"\']+)["\']', attributes)
                if class_match:
                    classes = class_match.group(1)
                    classes_neutral = classes.replace('text-blue-600', 'text-gray-400').replace('hover:underline', '').replace('hover:text-blue-600', '')
                    return f'<span className="{classes_neutral}">{tag_content}</span>'
            return f'<span className="text-gray-400">{tag_content}</span>'
            
        a_pattern = r'<a\s+([^>]*href=["\']' + re.escape(link) + r'["\'][^>]*)>(.*?)</a>'
        content = re.sub(a_pattern, a_replacer, content, flags=re.DOTALL)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Cleaned links in: {filepath}")

for f in files:
    clean_file(f)
print("Finished cleaning links with Regex!")
