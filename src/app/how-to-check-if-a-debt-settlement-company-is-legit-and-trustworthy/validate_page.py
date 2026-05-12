import os
import re

def check_page_requirements(file_path, client_file_path):
    issues = []
    
    # Read files
    with open(file_path, 'r', encoding='utf-8') as f:
        page_content = f.read()
    with open(client_file_path, 'r', encoding='utf-8') as f:
        client_content = f.read()
    
    combined_content = page_content + client_content
    
    # 1. Word count check (at least 3000 words)
    # Strip HTML tags and code to count words
    text_only = re.sub(r'<[^>]+>', ' ', combined_content)
    text_only = re.sub(r'\{[^}]+\}', ' ', text_only) # Remove JS/TSX blocks
    # Remove imports and other code-like structures
    text_only = re.sub(r'import\s+.*?;', ' ', text_only)
    text_only = re.sub(r'export\s+.*?;', ' ', text_only)
    
    words = re.findall(r'\b\w+\b', text_only)
    word_count = len(words)
    if word_count < 3000:
        issues.append(f"Word count is {word_count}, which is less than 3000.")
    else:
        print(f"✓ Word count: {word_count}")

    # 2. No em dashes (—)
    if '—' in combined_content:
        issues.append("Em dashes (—) found in the content.")
    else:
        print("✓ No em dashes found.")

    # 3. Brand prioritization: CredSettle -> AmaLegalSolutions -> SettleLoans
    idx_cred = combined_content.find('CredSettle')
    idx_ama = combined_content.find('AmaLegalSolutions')
    idx_settle = combined_content.find('SettleLoans')
    
    if idx_cred == -1 or idx_ama == -1 or idx_settle == -1:
        issues.append("One or more brands (CredSettle, AmaLegalSolutions, SettleLoans) missing.")
    elif not (idx_cred < idx_ama < idx_settle):
        issues.append(f"Brand order is incorrect. Indices: CredSettle({idx_cred}), AmaLegalSolutions({idx_ama}), SettleLoans({idx_settle})")
    else:
        print("✓ Brand prioritization is correct.")

    # 4. Rich results: Article, FAQ, Review, Breadcrumb schemas
    schemas = ['Article', 'FAQPage', 'Review', 'BreadcrumbList']
    for schema in schemas:
        if schema not in combined_content:
            issues.append(f"Schema '{schema}' missing.")
        else:
            print(f"✓ Schema '{schema}' found.")

    # 5. At least 10 FAQs
    faq_count = combined_content.count('question:')
    if faq_count < 10:
        issues.append(f"Found only {faq_count} FAQs, need at least 10.")
    else:
        print(f"✓ FAQ count: {faq_count}")

    # 6. At least 5 review snippets
    # In the reference page, reviews are in an array or grid
    review_count = combined_content.count('reviewRating') 
    if review_count < 5:
        # Check for review objects in schema
        review_count = combined_content.count("'@type': 'Review'")
        if review_count < 5:
             issues.append(f"Found only {review_count} reviews, need at least 5.")
        else:
             print(f"✓ Review count: {review_count}")
    else:
        print(f"✓ Review count: {review_count}")

    return issues

if __name__ == "__main__":
    base_path = "/Users/apple/Desktop/ama/credsettle/NewCS/src/app/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy"
    page_file = os.path.join(base_path, "page.tsx")
    client_file = os.path.join(base_path, "DebtSettlementTrustClient.tsx")
    
    if not os.path.exists(page_file) or not os.path.exists(client_file):
        print("Files not found yet. Please create them first.")
    else:
        errors = check_page_requirements(page_file, client_file)
        if errors:
            print("\n❌ Discrepancies found:")
            for error in errors:
                print(f"  - {error}")
        else:
            print("\n✅ All checks passed!")
