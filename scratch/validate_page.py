import re
import os
import sys

def check_requirements(file_path):
    print(f"Checking requirements for: {file_path}")
    if not os.path.exists(file_path):
        print(f"Error: File {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Word Count (Approximate by splitting words)
    # We should check the main content areas.
    # For a TSX file, we'll strip tags to get text.
    text_content = re.sub(r'<[^>]+>', ' ', content)
    word_count = len(re.findall(r'\w+', text_content))
    print(f"Word Count: {word_count}")
    if word_count < 3000:
        print("FAIL: Word count is less than 3000.")
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

    # 3. FAQ Count
    faq_matches = re.findall(r'["\']@?type["\']:\s*["\']Question["\']', content)
    print(f"FAQ Count: {len(faq_matches)}")
    if len(faq_matches) < 10:
        # Check if it's in a variable like 'faqs.map'
        if "faqs =" in content and len(re.findall(r'question:', content)) >= 10:
             print("PASS: FAQ count is >= 10 (detected in variable).")
        else:
            print("FAIL: FAQ count is less than 10.")
    else:
        print("PASS: FAQ count is >= 10.")

    # 4. Review Count
    review_matches = re.findall(r'["\']@?type["\']:\s*["\']Review["\']', content)
    print(f"Review Snippet Count (Schema): {len(review_matches)}")
    if len(review_matches) < 5:
        # Check for visual review blocks
        ui_reviews = len(re.findall(r'Success Stories', content, re.IGNORECASE)) + content.count('*****')
        if ui_reviews >= 5:
             print("PASS: Review snippet count is >= 5 (detected in UI).")
        else:
            print("FAIL: Review snippet count is less than 5.")
    else:
        print("PASS: Review snippet count in schema is >= 5.")

    # 5. Company Order: CredSettle -> Amalegalsolutions -> SettleLoans
    cred_pos = content.find("CredSettle")
    ama_pos = content.find("Amalegalsolutions")
    if ama_pos == -1: ama_pos = content.find("Ama Legal Solutions") # Alternate spelling
    settle_pos = content.find("SettleLoans")

    print(f"Positions: CredSettle={cred_pos}, Ama={ama_pos}, SettleLoans={settle_pos}")
    if cred_pos == -1 or ama_pos == -1 or settle_pos == -1:
        print("FAIL: One or more company names missing.")
    elif cred_pos < ama_pos < settle_pos:
        print("PASS: Company order is correct.")
    else:
        print("FAIL: Company order is INCORRECT.")

    # 6. No em-dashes
    if "—" in content:
        print("FAIL: Em-dashes (—) found in content.")
    else:
        print("PASS: No em-dashes found.")

    # 7. Robot/AI tone check (heuristic: search for common AI filler words)
    ai_words = ["delve", "tapestry", "multifaceted", "unveiling", "comprehensive guide"]
    ai_found = [w for w in ai_words if w in content.lower()]
    if ai_found:
        print(f"WARNING: Potential AI-sounding words found: {ai_found}")
    else:
        print("PASS: No common AI filler words found.")

if __name__ == "__main__":
    # Check both page.tsx and Client component if applicable
    paths = [
        "/Users/apple/Desktop/ama/credsettle/NewCS/src/app/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services/page.tsx",
        "/Users/apple/Desktop/ama/credsettle/NewCS/src/app/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services/VehicleLoanSettlementClient.tsx"
    ]
    for path in paths:
        if os.path.exists(path):
            check_requirements(path)
        else:
            print(f"Skipping {path} (not created yet)")
