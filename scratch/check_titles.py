import os
import re

base_dir = "/Users/amalegalsolutions/Desktop/AMAWORK/credsettlefigma/credsettle/src/app"
urls = [
    "best-companies-for-debt-settlement-services-in-india",
    "can-i-settle-my-loan-without-a-lawyer",
    "cred-settle-plan-for-building-debt-free-future-after-settlement",
    "cred-settle-support-for-avoiding-aggressive-recovery-practices",
    "debt-settlement-options-for-freelancers-and-self-employed-individuals",
    "explain-the-difference-between-a-loan-write-off-and-a-loan-settlement",
    "find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement",
    "handle-loan-default-without-panicking",
    "how-do-peer-to-peer-lending-platforms-handle-loan-settlements",
    "how-to-check-active-loan-on-your-name-in-india-stepbystep-guide",
    "is-loan-settlement-in-installments-possible",
    "is-there-a-government-portal-for-debt-collection-complaints",
    "loan-settlement-for-borrowers-planning-financial-reset",
    "p2p-crypto-scam-unfreeze-bank-account",
    "rbi-guidelines-calling-after-7pm",
    "smart-ways-to-manage-emi-payment",
    "what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms",
    "what-customer-support-options-do-loan-settlement-companies-provide",
    "what-documents-are-required-for-loan-settlement-with-a-professional-service",
    "where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai"
]

for url in urls:
    path = os.path.join(base_dir, url, "page.tsx")
    if not os.path.exists(path):
        print(f"NOT FOUND: {url} -> {path}")
        continue
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    match = re.search(r"title:\s*['\"`]([^'\"`]+)['\"`]", content)
    if match:
        print(f"{url}: {match.group(1)} (len: {len(match.group(1))})")
    else:
        print(f"{url}: Title NOT matched")
