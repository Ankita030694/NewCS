import os

replacements = {
    # 1. AggressiveRecoverySupportClient.tsx
    "src/app/cred-settle-support-for-avoiding-aggressive-recovery-practices/AggressiveRecoverySupportClient.tsx": [
        ('                                    <Link href="/services/bank-harassment" className="block text-sm text-blue-600 hover:underline">Harassment Service</Link>\n', '')
    ],
    # 2. MudraLoanSettlementClient.tsx
    "src/app/mudra-loan-settlement-legal-help/MudraLoanSettlementClient.tsx": [
        ('                                    <Link href="/business-loan-settlement" className="block text-sm text-blue-600 hover:underline">Business Loan Info</Link>\n', '')
    ],
    # 3. CreditCardFIRClient.tsx
    "src/app/do-banks-file-fir-for-credit-card-dues/CreditCardFIRClient.tsx": [
        ('                                    <Link href="/cibil-score-improvement" className="block text-sm text-blue-600 hover:font-semibold transition-all">• Rebuilding Credit after Settlement</Link>\n', ''),
        ('                                    <Link href="/legal-notice-response" className="block text-sm text-blue-600 hover:font-semibold transition-all">• How to Respond to Legal Notices</Link>\n', '')
    ],
    # 4. SettleSelfClient.tsx
    "src/app/can-i-settle-my-debts-without-using-a-third-party-company/SettleSelfClient.tsx": [
        ('<Link href="/debt-settlement-process" className="text-blue-600 font-semibold hover:underline">', '<span className="text-gray-500 font-semibold">'),
        ('<Link href="/credit-card-debt-settlement" className="text-blue-600 font-semibold hover:underline">', '<span className="text-gray-500 font-semibold">'),
        ('<Link href="/debt-harassment-laws-india" className="text-blue-600 font-semibold hover:underline">', '<span className="text-gray-500 font-semibold">'),
        ('<Link href="/cibil-score-after-settlement" className="text-blue-600 font-semibold hover:underline">', '<span className="text-gray-500 font-semibold">'),
        # Closing tags for the above
        ('                      Step by Step Debt Settlement Process\n                    </Link>', '                      Step by Step Debt Settlement Process\n                    </span>'),
        ('                      Credit Card Specific Settlement Guide\n                    </Link>', '                      Credit Card Specific Settlement Guide\n                    </span>'),
        ('                      Know Your Rights Against Debt Harassment\n                    </Link>', '                      Know Your Rights Against Debt Harassment\n                    </span>'),
        ('                      Managing Your CIBIL Score Post Settlement\n                    </Link>', '                      Managing Your CIBIL Score Post Settlement\n                    </span>'),
        # Bottom list items
        ('''                  <li>
                    <Link href="/debt-settlement-process" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">The Step by Step Process</span>
                    </Link>
                  </li>''', ''),
        ('''                  <li>
                    <Link href="/credit-card-debt-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Card Settlements</span>
                    </Link>
                  </li>''', '')
    ],
    # 5. NegotiationGuideClient.tsx
    "src/app/what-is-the-best-way-to-negotiate-loan-settlement/NegotiationGuideClient.tsx": [
        ('''                  <Link href="/what-is-ots" className="group block">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-blue-900 mb-2">What is OTS?</h4>
                      <p className="text-sm text-blue-700">Learn about One-Time Settlements and how they differ from regular loan closures.</p>
                    </div>
                  </Link>''', 
         '''                  <div className="group block">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">What is OTS?</h4>
                      <p className="text-sm text-blue-700">Learn about One-Time Settlements and how they differ from regular loan closures.</p>
                    </div>
                  </div>''')
    ],
    # 6. DebtManagementClient.tsx (in 1-debt-management-services-in-india)
    "src/app/1-debt-management-services-in-india/DebtManagementClient.tsx": [
        ('''                  <li>
                    <Link href="/anti-harassment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Anti Harassment Support</span>
                    </Link>
                  </li>''', ''),
        ('''                  <li>
                    <Link href="/credit-score-builder" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Rebuilding Programs</span>
                    </Link>
                  </li>''', '')
    ],
    # 7. DocumentEvidenceClient.tsx
    "src/app/how-to-document-evidence-of-debt-collector-harassment/DocumentEvidenceClient.tsx": [
        ('''                  <li>
                    <Link href="/credit-card-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Card Settlements</span>
                    </Link>
                  </li>''', ''),
        ('''                  <li>
                    <Link href="/personal-loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Personal Loan Settlements</span>
                    </Link>
                  </li>''', '')
    ],
    # 8. IsThereAnyMobileSoftwareClient.tsx
    "src/app/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents/IsThereAnyMobileSoftwareClient.tsx": [
        ('''                  <li>
                    <Link href="/credit-card-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Card Settlements</span>
                    </Link>
                  </li>''', '')
    ],
    # 9. SuccessRateClient.tsx
    "src/app/what-is-the-success-rate-of-debt-settlement-programs/SuccessRateClient.tsx": [
        ('''                  <Link href="/does-settling-a-loan-impact-my-cibil-credit-score" className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors text-blue-800 font-medium border border-gray-100">
                    Does Settlement Ruin Credit Score?
                  </Link>''',
         '''                  <div className="p-4 bg-gray-50 rounded-xl text-gray-500 font-medium border border-gray-100">
                    Does Settlement Ruin Credit Score?
                  </div>''')
    ],
    # 10. LoanDefaultRecoveryFreezeDefenseClient.tsx
    "src/app/loan-default-recovery-freeze-defense/LoanDefaultRecoveryFreezeDefenseClient.tsx": [
        ('                                        <Link href="/legal-notice-for-loan-recovery" className="block text-sm text-blue-600 hover:underline">Notice Defense</Link>\n', '')
    ],
    # 11. BankCallingReferencesClient.tsx
    "src/app/bank-calling-references-and-family-members/BankCallingReferencesClient.tsx": [
        ('                                    <Link href="/how-to-handle-recovery-agent-harrasement" className="block text-blue-600 hover:underline">Harassment Shield</Link>\n', ''),
        ('                                    <Link href="/ignoring-calls-of-recovery-agent" className="block text-blue-600 hover:underline">Ignoring Calls Guide</Link>\n', '')
    ],
    # 12. ConsultationClient.tsx
    "src/app/get-a-free-consultation-for-debt-settlement-options/ConsultationClient.tsx": [
        ('''                  <li>
                    <Link href="/credit-card-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Card Settlements</span>
                    </Link>
                  </li>''', ''),
        ('''                  <li>
                    <Link href="/debt-settlement-process" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">The Step-by-Step Process</span>
                    </Link>
                  </li>''', ''),
        ('''                  <li>
                    <Link href="/legal-rights-against-harassment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Your Rights Against Harassment</span>
                    </Link>
                  </li>''', '')
    ],
    # 13. BajajHomeVisitClient.tsx
    "src/app/bajaj-finance-recovery-agent-harassment-home-visit/BajajHomeVisitClient.tsx": [
        ('''                  <li>
                    <Link href="/how-to-handle-recovery-agent-harrasement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">How to Handle Recovery Harassment</span>
                    </Link>
                  </li>''', '')
    ],
    # 14. ProtectFamilyClient.tsx
    "src/app/how-to-protect-family-members-from-debt-collector-calls/ProtectFamilyClient.tsx": [
        ('<Link href="/anti-harassment" className="text-blue-600 font-bold hover:underline">Anti-Harassment Services</Link>', '<span className="text-gray-700 font-bold">Anti-Harassment Services</span>'),
        ('''                  <li>
                    <Link href="/services/anti-harassment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Anti-Harassment Support</span>
                    </Link>
                  </li>''', '')
    ],
    # 15. DebtReliefClient.tsx
    "src/app/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india/DebtReliefClient.tsx": [
        ('''                  <li>
                    <Link href="/credit-card-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Card Settlements</span>
                    </Link>
                  </li>''', ''),
        ('''                  <li>
                    <Link href="/personal-loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Personal Loan Settlements</span>
                    </Link>
                  </li>''', '')
    ],
    # 16. DebtManagementClient.tsx (in debt-management-services)
    "src/app/debt-management-services/DebtManagementClient.tsx": [
        ('''                  <li>
                    <Link href="/anti-harassment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Anti Harassment Support</span>
                    </Link>
                  </li>''', '')
    ],
    # 17. EMIConsequencesClient.tsx
    "src/app/what-are-the-consequences-of-not-paying-emi/EMIConsequencesClient.tsx": [
        ('''                  <Link href="/what-is-ots" className="group block">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-blue-900 mb-2">What is OTS?</h4>
                      <p className="text-sm text-blue-700">Learn about One-Time Settlements and how they differ from regular loan closures.</p>
                    </div>
                  </Link>''',
         '''                  <div className="group block">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">What is OTS?</h4>
                      <p className="text-sm text-blue-700">Learn about One-Time Settlements and how they differ from regular loan closures.</p>
                    </div>
                  </div>'''),
        ('''                  <Link href="/best-apps-for-managing-loan-settlement-offers-in-India" className="group block">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-blue-900 mb-2">Best Settlement Apps</h4>
                      <p className="text-sm text-blue-700">Track and manage your settlement offers directly on your phone.</p>
                    </div>
                  </Link>''',
         '''                  <div className="group block">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">Best Settlement Apps</h4>
                      <p className="text-sm text-blue-700">Track and manage your settlement offers directly on your phone.</p>
                    </div>
                  </div>''')
    ],
    # 18. DisputeForgedSignaturesClient.tsx
    "src/app/dispute-over-forged-loan-signatures/DisputeForgedSignaturesClient.tsx": [
        ('                                        <Link href="/digital-cyber-loan-dispute-resolution" className="block text-sm text-blue-600 hover:underline">Cyber Loan Dispute Help</Link>\n', ''),
        ('                                        <Link href="/how-to-prove-financial-hardship-for-loan-settlement" className="block text-sm text-blue-600 hover:underline">Hardship Proof Strategy</Link>\n', ''),
        ('                                        <Link href="/legal-help-for-loan-settlement-by-drt" className="block text-sm text-blue-600 hover:underline">DRT Case Defense</Link>\n', '')
    ],
    # 19. SmeLoanDisputeResolutionClient.tsx
    "src/app/SME-loan-dispute-resolution/SmeLoanDisputeResolutionClient.tsx": [
        ('                                        <Link href="/legal-notice-for-loan-recovery" className="block text-sm text-blue-600 hover:underline">Notice Defense</Link>\n', '')
    ],
    # 20. LoanSanctionWithoutConsentClient.tsx
    "src/app/legal-case-for-loan-sanction-without-consent/LoanSanctionWithoutConsentClient.tsx": [
        ('                                        <Link href="/legal-notice-for-loan-recovery" className="block text-sm text-blue-600 hover:underline">Notice Defense</Link>\n', ''),
        ('                                        <Link href="/services/loan-settlement" className="block text-sm text-blue-600 hover:underline">Legitimate Settlement</Link>\n', '')
    ],
    # 21. ChequeBounceNoidaClient.tsx
    "src/app/cheque-bounce-case-in-noida/ChequeBounceNoidaClient.tsx": [
        ('''                  <li>
                    <Link href="/legal-services-near-me" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Legal Services Noida</span>
                    </Link>
                  </li>''', '')
    ],
    # 22. authority/blogs/page.tsx
    "src/app/authority/blogs/page.tsx": [
        ('href="/api/rss"', 'href="#"')
    ],
    # 23. ScamAvoidanceClient.tsx
    "src/app/how-to-avoid-scams-in-the-debt-settlement-industry/ScamAvoidanceClient.tsx": [
        ('''                  <li>
                    <Link href="/about-us" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">About Our Platform</span>
                    </Link>
                  </li>''', ''),
        ('''                  <li>
                    <Link href="/loan-settlement-process" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Standard Settlement Process</span>
                    </Link>
                  </li>''', ''),
        ('''                  <li>
                    <Link href="/faq" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Frequently Asked Questions</span>
                    </Link>
                  </li>''', '')
    ],
    # 24. RightsClient.tsx
    "src/app/what-are-my-rights-when-dealing-with-loan-recovery-agents/RightsClient.tsx": [
        ('''                  <li>
                    <Link href="/credit-card-debt-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Credit Card Debt Settlement</span>
                    </Link>
                  </li>''', '')
    ],
    # 25. LegalHelpNonClosureClient.tsx
    "src/app/legal-help-for-non-closure-of-settled-loan/LegalHelpNonClosureClient.tsx": [
        ('<Link href="/legal-help-for-loan-settlement" className="block text-xs font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Settlement Guide</Link>', '<span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Settlement Guide</span>')
    ],
    # 26. CertifiedFinancialPlannersClient.tsx
    "src/app/find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement/CertifiedFinancialPlannersClient.tsx": [
        ('                                        <Link href="/best-lawyer-for-loan-settlement" className="block text-sm text-blue-600 hover:underline">Best Settlement Lawyers</Link>\n', '')
    ],
    # 27. LoansNotSettledClient.tsx
    "src/app/what-kind-of-loans-can-not-be-settled/LoansNotSettledClient.tsx": [
        ('<Link href="/services/loan-settlement" className="hover:text-blue-600 transition-colors">', '<span>'),
        ('</Link>', '</span>')
    ],
    # 28. LoanSettlementAgenciesClient.tsx
    "src/app/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt/LoanSettlementAgenciesClient.tsx": [
        ('''                  <li>
                    <Link href="/how-to-handle-recovery-agent-harrasement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">How to Handle Harassment</span>
                    </Link>
                  </li>''', '')
    ],
    # 29. DigitalOnlineCyberLoanDisputesClient.tsx
    "src/app/digital-online-cyber-loan-disputes/DigitalOnlineCyberLoanDisputesClient.tsx": [
        ('                                        <Link href="/best-lawyers-for-cibil-dispute-resolution" className="block text-sm text-blue-600 hover:underline">CIBIL Disputes</Link>\n', ''),
        ('                                        <Link href="/legal-notice-for-loan-recovery" className="block text-sm text-blue-600 hover:underline">Notice Defense</Link>\n', '')
    ]
}

for filepath, file_repls in replacements.items():
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    for target, repl in file_repls:
        content = content.replace(target, repl)
        
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully modified: {filepath}")
    else:
        print(f"No changes made to: {filepath} (target not found)")
