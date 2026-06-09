import os
import re

broken = [
    ("src/app/cred-settle-support-for-avoiding-aggressive-recovery-practices/AggressiveRecoverySupportClient.tsx", "/services/bank-harassment"),
    ("src/app/mudra-loan-settlement-legal-help/MudraLoanSettlementClient.tsx", "/business-loan-settlement"),
    ("src/app/do-banks-file-fir-for-credit-card-dues/CreditCardFIRClient.tsx", "/cibil-score-improvement"),
    ("src/app/do-banks-file-fir-for-credit-card-dues/CreditCardFIRClient.tsx", "/legal-notice-response"),
    ("src/app/can-i-settle-my-debts-without-using-a-third-party-company/SettleSelfClient.tsx", "/debt-settlement-process"),
    ("src/app/can-i-settle-my-debts-without-using-a-third-party-company/SettleSelfClient.tsx", "/credit-card-debt-settlement"),
    ("src/app/can-i-settle-my-debts-without-using-a-third-party-company/SettleSelfClient.tsx", "/debt-harassment-laws-india"),
    ("src/app/can-i-settle-my-debts-without-using-a-third-party-company/SettleSelfClient.tsx", "/cibil-score-after-settlement"),
    ("src/app/what-is-the-best-way-to-negotiate-loan-settlement/NegotiationGuideClient.tsx", "/what-is-ots"),
    ("src/app/1-debt-management-services-in-india/DebtManagementClient.tsx", "/anti-harassment"),
    ("src/app/1-debt-management-services-in-india/DebtManagementClient.tsx", "/credit-score-builder"),
    ("src/app/how-to-document-evidence-of-debt-collector-harassment/DocumentEvidenceClient.tsx", "/credit-card-settlement"),
    ("src/app/how-to-document-evidence-of-debt-collector-harassment/DocumentEvidenceClient.tsx", "/personal-loan-settlement"),
    ("src/app/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents/IsThereAnyMobileSoftwareClient.tsx", "/credit-card-settlement"),
    ("src/app/what-is-the-success-rate-of-debt-settlement-programs/SuccessRateClient.tsx", "/does-settling-a-loan-impact-my-cibil-credit-score"),
    ("src/app/loan-default-recovery-freeze-defense/LoanDefaultRecoveryFreezeDefenseClient.tsx", "/legal-notice-for-loan-recovery"),
    ("src/app/bank-calling-references-and-family-members/BankCallingReferencesClient.tsx", "/how-to-handle-recovery-agent-harrasement"),
    ("src/app/bank-calling-references-and-family-members/BankCallingReferencesClient.tsx", "/ignoring-calls-of-recovery-agent"),
    ("src/app/get-a-free-consultation-for-debt-settlement-options/ConsultationClient.tsx", "/credit-card-settlement"),
    ("src/app/get-a-free-consultation-for-debt-settlement-options/ConsultationClient.tsx", "/debt-settlement-process"),
    ("src/app/get-a-free-consultation-for-debt-settlement-options/ConsultationClient.tsx", "/legal-rights-against-harassment"),
    ("src/app/bajaj-finance-recovery-agent-harassment-home-visit/BajajHomeVisitClient.tsx", "/how-to-handle-recovery-agent-harrasement"),
    ("src/app/how-to-protect-family-members-from-debt-collector-calls/ProtectFamilyClient.tsx", "/anti-harassment"),
    ("src/app/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india/DebtReliefClient.tsx", "/credit-card-settlement"),
    ("src/app/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india/DebtReliefClient.tsx", "/personal-loan-settlement"),
    ("src/app/debt-management-services/DebtManagementClient.tsx", "/anti-harassment"),
    ("src/app/what-are-the-consequences-of-not-paying-emi/EMIConsequencesClient.tsx", "/what-is-ots"),
    ("src/app/what-are-the-consequences-of-not-paying-emi/EMIConsequencesClient.tsx", "/best-apps-for-managing-loan-settlement-offers-in-India"),
    ("src/app/dispute-over-forged-loan-signatures/DisputeForgedSignaturesClient.tsx", "/digital-cyber-loan-dispute-resolution"),
    ("src/app/dispute-over-forged-loan-signatures/DisputeForgedSignaturesClient.tsx", "/how-to-prove-financial-hardship-for-loan-settlement"),
    ("src/app/dispute-over-forged-loan-signatures/DisputeForgedSignaturesClient.tsx", "/legal-help-for-loan-settlement-by-drt"),
    ("src/app/SME-loan-dispute-resolution/SmeLoanDisputeResolutionClient.tsx", "/legal-notice-for-loan-recovery"),
    ("src/app/legal-case-for-loan-sanction-without-consent/LoanSanctionWithoutConsentClient.tsx", "/legal-notice-for-loan-recovery"),
    ("src/app/legal-case-for-loan-sanction-without-consent/LoanSanctionWithoutConsentClient.tsx", "/services/loan-settlement"),
    ("src/app/cheque-bounce-case-in-noida/ChequeBounceNoidaClient.tsx", "/legal-services-near-me"),
    ("src/app/authority/blogs/page.tsx", "/api/rss"),
    ("src/app/how-to-avoid-scams-in-the-debt-settlement-industry/ScamAvoidanceClient.tsx", "/about-us"),
    ("src/app/how-to-avoid-scams-in-the-debt-settlement-industry/ScamAvoidanceClient.tsx", "/loan-settlement-process"),
    ("src/app/how-to-avoid-scams-in-the-debt-settlement-industry/ScamAvoidanceClient.tsx", "/faq"),
    ("src/app/what-are-my-rights-when-dealing-with-loan-recovery-agents/RightsClient.tsx", "/credit-card-debt-settlement"),
    ("src/app/legal-help-for-non-closure-of-settled-loan/LegalHelpNonClosureClient.tsx", "/legal-help-for-loan-settlement"),
    ("src/app/find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement/CertifiedFinancialPlannersClient.tsx", "/best-lawyer-for-loan-settlement"),
    ("src/app/what-kind-of-loans-can-not-be-settled/LoansNotSettledClient.tsx", "/services/loan-settlement"),
    ("src/app/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt/LoanSettlementAgenciesClient.tsx", "/how-to-handle-recovery-agent-harrasement"),
    ("src/app/digital-online-cyber-loan-disputes/DigitalOnlineCyberLoanDisputesClient.tsx", "/best-lawyers-for-cibil-dispute-resolution"),
    ("src/app/digital-online-cyber-loan-disputes/DigitalOnlineCyberLoanDisputesClient.tsx", "/legal-notice-for-loan-recovery")
]

# De-duplicate files to process
files_to_check = set(f for f, l in broken)
for f in sorted(files_to_check):
    if not os.path.exists(f):
        print(f"File not found: {f}")
        continue
    with open(f, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    print(f"\n=== File: {f} ===")
    for idx, line in enumerate(lines):
        for path, link in broken:
            if path == f and link in line:
                print(f"  Line {idx+1}: {line.strip()}")
