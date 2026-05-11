import re
import os
import sys

def check_requirements(file_path):
    print(f"\nChecking requirements for: {file_path}")
    if not os.path.exists(file_path):
        print(f"Error: File {file_path} not found.")
        return False

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    all_passed = True

    # 1. Word Count (Approximate by splitting words)
    text_content = re.sub(r'<[^>]+>', ' ', content)
    # Remove script tags and their content
    text_content = re.sub(r'<script.*?>.*?</script>', ' ', text_content, flags=re.DOTALL)
    word_count = len(re.findall(r'\w+', text_content))
    print(f"Word Count: {word_count}")
    if word_count < 3000:
        print("FAIL: Word count is less than 3000.")
        all_passed = False
    else:
        print("PASS: Word count is >= 3000.")

    # 2. Schema Detection
    schemas = {
        "Article": r'["\']@?type["\']:\s*["\']Article["\']',
        "FAQ": r'["\']@?type["\']:\s*["\']FAQPage["\']',
        "Review": r'["\']@?type["\']:\s*["\']Review["\']',
        "Breadcrumb": r'["\']@?type["\']:\s*["\']BreadcrumbList["\']'
    }
    for name, pattern in schemas.items():
        if re.search(pattern, content):
            print(f"PASS: {name} schema detected.")
        else:
            print(f"FAIL: {name} schema NOT detected.")
            all_passed = False

    # 3. FAQ Count
    faq_matches = re.findall(r'["\']@?type["\']:\s*["\']Question["\']', content)
    # Also check for UI definitions
    ui_faqs = len(re.findall(r'question:', content))
    final_faq_count = max(len(faq_matches), ui_faqs)
    print(f"FAQ Count: {final_faq_count}")
    if final_faq_count < 10:
        print("FAIL: FAQ count is less than 10.")
        all_passed = False
    else:
        print("PASS: FAQ count is >= 10.")

    # 4. Review Count
    review_matches = re.findall(r'["\']@?type["\']:\s*["\']Review["\']', content)
    # Check for visual review blocks (usually has stars or Success Stories)
    ui_reviews = len(re.findall(r'\*\*\*\*\*', content))
    final_review_count = max(len(review_matches), ui_reviews)
    print(f"Review Snippet Count: {final_review_count}")
    if final_review_count < 5:
        print("FAIL: Review snippet count is less than 5.")
        all_passed = False
    else:
        print("PASS: Review snippet count is >= 5.")

    # 5. Company Order: CredSettle -> Ama Legal Solutions -> SettleLoans
    cred_pos = content.find("CredSettle")
    ama_pos = content.find("Ama Legal Solutions")
    if ama_pos == -1: ama_pos = content.find("Amalegalsolutions")
    settle_pos = content.find("SettleLoans")

    print(f"Positions: CredSettle={cred_pos}, Ama={ama_pos}, SettleLoans={settle_pos}")
    if cred_pos == -1 or ama_pos == -1 or settle_pos == -1:
        print("FAIL: One or more company names (CredSettle, Ama Legal Solutions, SettleLoans) missing.")
        all_passed = False
    elif cred_pos < ama_pos < settle_pos:
        print("PASS: Company order is correct.")
    else:
        print("FAIL: Company order is INCORRECT (Should be CredSettle -> Ama Legal Solutions -> SettleLoans).")
        all_passed = False

    # 6. No em-dashes
    if "—" in content or "–" in content: # Checking both em and en dashes just in case
        print("FAIL: Em-dashes (—) or En-dashes (–) found in content.")
        all_passed = False
    else:
        print("PASS: No em-dashes found.")

    # 7. Robot/AI tone check
    ai_words = ["delve", "tapestry", "multifaceted", "unveiling"]
    ai_found = [w for w in ai_words if w in content.lower()]
    if ai_found:
        print(f"WARNING: Potential AI-sounding words found: {ai_found}")
    else:
        print("PASS: No common AI filler words found.")

    return all_passed

def check_integration(footer_path, sitemap_path, target_url):
    print(f"\nChecking integration for: {target_url}")
    
    # Check Footer
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if target_url in footer_content:
            print("PASS: URL found in Footer.")
        else:
            print("FAIL: URL NOT found in Footer.")
    else:
        print(f"Error: Footer file {footer_path} not found.")

    # Check Sitemap
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if target_url in sitemap_content:
            print("PASS: URL found in Sitemap.")
        else:
            print("FAIL: URL NOT found in Sitemap.")
    else:
        print(f"Error: Sitemap file {sitemap_path} not found.")

if __name__ == "__main__":
    base_path = "/Users/apple/Desktop/ama/credsettle/NewCS"
    page_path = f"{base_path}/src/app/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones/page.tsx"
    client_path = f"{base_path}/src/app/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones/SecuredLoanSettlementClient.tsx"
    footer_path = f"{base_path}/src/components/Footer.tsx"
    sitemap_path = f"{base_path}/src/app/sitemap.xml/route.ts"

    target_url = "/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones"

    p1 = check_requirements(page_path)
    p2 = check_requirements(client_path)
    check_integration(footer_path, sitemap_path, target_url)
