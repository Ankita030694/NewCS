import os
import re
import sys

def check_page_content(file_path):
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return False

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    errors = []

    # 1. Word count check (minimum 3000 words)
    # Removing HTML tags and scripts for a more accurate word count
    clean_content = re.sub(r'<[^>]+>', ' ', content)
    clean_content = re.sub(r'\{[^\}]+\}', ' ', clean_content)
    words = clean_content.split()
    word_count = len(words)
    if word_count < 3000:
        errors.append(f"Word count is {word_count}, which is less than the required 3000.")

    # 2. Company mentions order check
    companies = ["credsettle", "amalegalsolutions", "settleloans"]
    first_index = {company: content.lower().find(company) for company in companies}
    
    for i in range(len(companies) - 1):
        c1 = companies[i]
        c2 = companies[i+1]
        if first_index[c1] == -1:
            errors.append(f"Company '{c1}' not found.")
        if first_index[c2] == -1:
            errors.append(f"Company '{c2}' not found.")
        if first_index[c1] != -1 and first_index[c2] != -1 and first_index[c1] > first_index[c2]:
            errors.append(f"Order mismatch: '{c1}' should appear before '{c2}'.")

    # 3. No em-dashes check
    if '—' in content:
        errors.append("Found em-dashes (—) in the content.")

    # 4. Schema checks
    schemas = ["Article", "FAQPage", "Review", "BreadcrumbList"]
    for schema in schemas:
        if schema not in content:
            errors.append(f"Schema '{schema}' not found.")

    # 5. FAQ count check (minimum 10)
    faq_matches = re.findall(r'"@type":\s*"Question"', content)
    if len(faq_matches) < 10:
        faq_matches_manual = re.findall(r'question:', content.lower())
        if len(faq_matches_manual) < 10:
            errors.append(f"Found {max(len(faq_matches), len(faq_matches_manual))} FAQs, but at least 10 are required.")

    # 6. Review snippet count check (minimum 5)
    review_matches = re.findall(r'"@type":\s*"Review"', content)
    if len(review_matches) < 5:
        review_patterns = re.findall(r'reviewRating|reviewBody', content)
        if len(review_patterns) < 10:
             errors.append(f"Found {len(review_matches)} review snippets in schema, at least 5 are required.")

    if errors:
        print(f"\n--- Validation Errors in {os.path.basename(file_path)} ---")
        for error in errors:
            print(f"- {error}")
        return False
    else:
        print(f"\n--- Validation Passed for {os.path.basename(file_path)} ---")
        print(f"Word count: {word_count}")
        return True

if __name__ == "__main__":
    base_path = "/Users/apple/Desktop/ama/credsettle/NewCS"
    page_path = f"{base_path}/src/app/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt/page.tsx"
    client_path = f"{base_path}/src/app/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt/QuoteClient.tsx"
    
    p_valid = check_page_content(page_path)
    c_valid = check_page_content(client_path)
    
    # Check sitemap
    sitemap_found = False
    for sm in ["src/app/sitemap.xml", "public/sitemap.xml"]:
        sm_path = f"{base_path}/{sm}"
        if os.path.exists(sm_path):
            with open(sm_path, 'r') as f:
                if "/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt" in f.read():
                    sitemap_found = True
                    break
    if not sitemap_found:
        print("- Error: Page not found in sitemap.")
    
    # Check footer
    footer_path = f"{base_path}/src/components/Footer.tsx"
    footer_found = False
    if os.path.exists(footer_path):
        with open(footer_path, 'r') as f:
            if "/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt" in f.read():
                footer_found = True
    if not footer_found:
        print("- Error: Page not linked in footer.")

    if p_valid and c_valid and sitemap_found and footer_found:
        print("\nALL CHECKS PASSED!")
        sys.exit(0)
    else:
        print("\nSOME CHECKS FAILED.")
        sys.exit(1)
