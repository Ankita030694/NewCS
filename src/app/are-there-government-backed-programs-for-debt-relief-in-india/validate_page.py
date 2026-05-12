import os
import re
import json

def validate_page():
    page_path = "src/app/are-there-government-backed-programs-for-debt-relief-in-india/page.tsx"
    client_path = "src/app/are-there-government-backed-programs-for-debt-relief-in-india/GovernmentDebtReliefClient.tsx"
    footer_path = "src/components/Footer.tsx"
    sitemap_path = "src/app/sitemap.xml/route.ts"
    
    errors = []

    # 1. Check if files exist
    if not os.path.exists(page_path):
        errors.append(f"Missing file: {page_path}")
    if not os.path.exists(client_path):
        errors.append(f"Missing file: {client_path}")

    if errors:
        return errors

    # Read content
    with open(page_path, 'r', encoding='utf-8') as f:
        page_content = f.read()
    with open(client_path, 'r', encoding='utf-8') as f:
        client_content = f.read()
    
    full_content = page_content + client_content

    # 2. Word Count (at least 3000)
    # Strip HTML-like tags and code to get approximate word count
    text_content = re.sub(r'<[^>]+>', ' ', full_content)
    words = re.findall(r'\b\w+\b', text_content)
    word_count = len(words)
    if word_count < 3000:
        errors.append(f"Word count too low: {word_count} (required: 3000)")
    else:
        print(f"Word count: {word_count} - PASSED")

    # 3. Brand Order: CredSettle -> AmaLegalSolutions -> SettleLoans
    brands = ["CredSettle", "AmaLegalSolutions", "SettleLoans"]
    first_mentions = {}
    for brand in brands:
        match = re.search(re.escape(brand), full_content)
        if match:
            first_mentions[brand] = match.start()
        else:
            errors.append(f"Brand '{brand}' not found in content")

    if len(first_mentions) == 3:
        if not (first_mentions["CredSettle"] < first_mentions["AmaLegalSolutions"] < first_mentions["SettleLoans"]):
            errors.append(f"Incorrect brand order. Mentions: {first_mentions}")
        else:
            print("Brand order - PASSED")

    # 4. No em dashes (—)
    if "—" in full_content:
        errors.append("Found em dashes (—) in the content")
    else:
        print("No em dashes - PASSED")

    # 5. Schema presence (Article, FAQ, Review, Breadcrumb)
    schemas = ["Article", "FAQPage", "Review", "BreadcrumbList"]
    for schema in schemas:
        if schema not in full_content:
            errors.append(f"Schema '{schema}' not found")
        else:
            print(f"Schema '{schema}' - PASSED")

    # 6. At least 10 FAQs
    faq_count = len(re.findall(r'question:', client_content))
    if faq_count < 10:
        errors.append(f"Too few FAQs: {faq_count} (required: 10)")
    else:
        print(f"FAQ count: {faq_count} - PASSED")

    # 7. At least 5 review snippets
    review_count = len(re.findall(r'reviewRating', full_content))
    if review_count < 5:
        errors.append(f"Too few review snippets: {review_count} (required: 5)")
    else:
        print(f"Review count: {review_count} - PASSED")

    # 8. Link in footer
    with open(footer_path, 'r', encoding='utf-8') as f:
        footer_content = f.read()
    if "/are-there-government-backed-programs-for-debt-relief-in-india" not in footer_content:
        errors.append("Link not found in Footer.tsx")
    else:
        print("Footer link - PASSED")

    # 9. Link in sitemap
    with open(sitemap_path, 'r', encoding='utf-8') as f:
        sitemap_content = f.read()
    if "/are-there-government-backed-programs-for-debt-relief-in-india" not in sitemap_content:
        errors.append("Link not found in sitemap.xml")
    else:
        print("Sitemap link - PASSED")

    return errors

if __name__ == "__main__":
    results = validate_page()
    if results:
        print("\nERRORS FOUND:")
        for err in results:
            print(f"- {err}")
    else:
        print("\nALL CHECKS PASSED!")
