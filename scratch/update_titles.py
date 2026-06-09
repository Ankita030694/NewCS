import os

base_dir = "/Users/amalegalsolutions/Desktop/AMAWORK/credsettlefigma/credsettle/src/app"
replacements = {
    "can-i-settle-my-loan-without-a-lawyer": {
        "old": "Can I Settle My Loan Without a Lawyer in India? | 2025 Guide | CredSettle",
        "new": "Settle Loan Without a Lawyer in India | CredSettle"
    },
    "cred-settle-plan-for-building-debt-free-future-after-settlement": {
        "old": "CredSettle Plan for Building Debt-Free Future After Settlement | 2026 Guide",
        "new": "Debt-Free Future Plan After Settlement | CredSettle"
    },
    "cred-settle-support-for-avoiding-aggressive-recovery-practices": {
        "old": "CredSettle Support for Avoiding Aggressive Recovery Practices | Stop Harassment 2026",
        "new": "Avoid Recovery Agent Harassment | CredSettle"
    },
    "debt-settlement-options-for-freelancers-and-self-employed-individuals": {
        "old": "Debt Settlement Options for Freelancers & Self-Employed in India | CredSettle",
        "new": "Debt Settlement for Freelancers in India | CredSettle"
    },
    "explain-the-difference-between-a-loan-write-off-and-a-loan-settlement": {
        "old": "Difference Between Loan Write-Off and Loan Settlement in India | 2025 Guide",
        "new": "Loan Write-Off vs. Loan Settlement | CredSettle"
    },
    "find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement": {
        "old": "Certified Financial Planners for Debt Restructuring and Settlement in India | Expert Guide 2025",
        "new": "Financial Planners for Debt Restructuring | CredSettle"
    },
    "handle-loan-default-without-panicking": {
        "old": "How to Handle Loan Default Without Panicking: A 2025 Step-by-Step Guide",
        "new": "How to Handle Loan Default Without Panicking | CredSettle"
    },
    "how-do-peer-to-peer-lending-platforms-handle-loan-settlements": {
        "old": "How do Peer-to-Peer (P2P) Lending Platforms Handle Loan Settlements in India? (2025)",
        "new": "P2P Lending & Loan Settlements in India | CredSettle"
    },
    "how-to-check-active-loan-on-your-name-in-india-stepbystep-guide": {
        "old": "How to Check Active Loan on Your Name in India | 2026 Step-by-Step Guide",
        "new": "Check Active Loans on Your Name | CredSettle"
    },
    "is-loan-settlement-in-installments-possible": {
        "old": "Is Loan Settlement in Installments Possible in India? | 2025 Expert Guide | CredSettle",
        "new": "Loan Settlement in Installments in India | CredSettle"
    },
    "is-there-a-government-portal-for-debt-collection-complaints": {
        "old": "Government Portal for Debt Collection Complaints India | Official Channels",
        "new": "Govt Portal for Debt Complaints in India | CredSettle"
    },
    "loan-settlement-for-borrowers-planning-financial-reset": {
        "old": "Loan Settlement for Borrowers Planning Financial Reset | 2026 Fresh Start Guide",
        "new": "Loan Settlement for Financial Reset | CredSettle"
    },
    "p2p-crypto-scam-unfreeze-bank-account": {
        "old": "P2P Crypto Scam: How to Unfreeze Bank Account in India (2025 Legal Guide)",
        "new": "Unfreeze Bank Account After P2P Crypto Scam | CredSettle"
    },
    "rbi-guidelines-calling-after-7pm": {
        "old": "RBI Guidelines: Recovery Agent Calling Hours 2025 | No Calls After 7 PM",
        "new": "RBI Recovery Agent Calling Hours | CredSettle"
    },
    "smart-ways-to-manage-emi-payment": {
        "old": "15+ Smart Ways to Manage EMI Payments in India: 2026 Ultimate Guide",
        "new": "Manage EMI Payments in India | CredSettle"
    },
    "what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms": {
        "old": "What are the Eligibility Criteria for Loan Settlement Programs by Lending Platforms?",
        "new": "Loan Settlement Eligibility Criteria | CredSettle"
    },
    "what-customer-support-options-do-loan-settlement-companies-provide": {
        "old": "Customer Support Options Provided by Loan Settlement Companies in India | 2025 Guide",
        "new": "Loan Settlement Company Support Options | CredSettle"
    },
    "what-documents-are-required-for-loan-settlement-with-a-professional-service": {
        "old": "Documents Required for Loan Settlement with Professional Service | CredSettle",
        "new": "Documents Required for Loan Settlement | CredSettle"
    },
    "where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai": {
        "old": "Government-Approved Credit Counseling in Chennai | RBI Recognized Centers",
        "new": "Credit Counseling in Chennai | CredSettle"
    }
}

for url, reps in replacements.items():
    path = os.path.join(base_dir, url, "page.tsx")
    if not os.path.exists(path):
        print(f"Path not found: {path}")
        continue
    
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check both single and double quotes
    old_title_single = f"title: '{reps['old']}'"
    old_title_double = f'title: "{reps["old"]}"'
    new_title = f"title: '{reps['new']}'"
    
    modified = False
    if old_title_single in content:
        content = content.replace(old_title_single, new_title)
        modified = True
    elif old_title_double in content:
        content = content.replace(old_title_double, new_title)
        modified = True
    else:
        # Try direct string replacement for the title value itself just in case formatting is slightly different
        if reps['old'] in content:
            content = content.replace(reps['old'], reps['new'])
            modified = True
            
    if modified:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"UPDATED: {url} -> {reps['new']}")
    else:
        print(f"FAILED to update: {url}")
