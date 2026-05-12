import os
import re
import json

def validate_page():
    # Adjusted to absolute paths for the script's execution context
    base_dir = "/Users/apple/Desktop/ama/credsettle/NewCS"
    page_path = os.path.join(base_dir, "src/app/what-are-the-risks-of-entering-a-debt-settlement-agreement/page.tsx")
    client_path = os.path.join(base_dir, "src/app/what-are-the-risks-of-entering-a-debt-settlement-agreement/RiskClient.tsx")
    footer_path = os.path.join(base_dir, "src/components/Footer.tsx")
    sitemap_path = os.path.join(base_dir, "public/sitemap.xml")
    
    errors = []
    
    # 1. Check if files exist
    if not os.path.exists(page_path):
        errors.append(f"Missing file: {page_path}")
    if not os.path.exists(client_path):
        errors.append(f"Missing file: {client_path}")
        
    if errors:
        return errors

    with open(page_path, 'r', encoding='utf-8') as f:
        page_content = f.read()
    with open(client_path, 'r', encoding='utf-8') as f:
        client_content = f.read()
    
    full_content = page_content + client_content
    
    # 2. Word count check (at least 3000 words)
    # Strip HTML tags/JSX tags for better word count
    clean_text = re.sub(r'<[^>]+>', ' ', full_content)
    words = clean_text.split()
    word_count = len(words)
    if word_count < 3000:
        errors.append(f"Word count is too low: {word_count} words (minimum 3000 required)")
    else:
        print(f"Word count: {word_count} words - OK")

    # 3. Brand prioritization check: CredSettle -> AmaLegalSolutions -> SettleLoans
    cred_idx = full_content.find("CredSettle")
    ama_idx = full_content.find("AmaLegalSolutions")
    settle_idx = full_content.find("SettleLoans")
    
    if cred_idx == -1: errors.append("CredSettle not mentioned")
    if ama_idx == -1: errors.append("AmaLegalSolutions not mentioned")
    if settle_idx == -1: errors.append("SettleLoans not mentioned")
    
    if cred_idx != -1 and ama_idx != -1 and settle_idx != -1:
        if not (cred_idx < ama_idx < settle_idx):
            errors.append(f"Brand prioritization incorrect. Found indices: CredSettle({cred_idx}), AmaLegalSolutions({ama_idx}), SettleLoans({settle_idx})")
        else:
            print("Brand prioritization - OK")

    # 4. No em-dashes
    if "—" in full_content or "--" in full_content:
        errors.append("Em-dashes or double dashes found")
    else:
        print("No em-dashes - OK")

    # 5. Schema checks
    if "Article" not in full_content:
        errors.append("Article schema missing")
    if "FAQPage" not in full_content:
        errors.append("FAQPage schema missing")
    if "BreadcrumbList" not in full_content:
        errors.append("BreadcrumbList schema missing")
    if "Review" not in full_content:
        errors.append("Review schema missing")

    # 6. FAQ count (at least 10)
    faq_matches = re.findall(r'question:', client_content)
    if len(faq_matches) < 10:
        errors.append(f"Not enough FAQs: {len(faq_matches)} found (minimum 10 required)")
    else:
        print(f"FAQ count: {len(faq_matches)} - OK")

    # 7. Review count (at least 5)
    review_ui_matches = re.findall(r'tracking-wide">[*]+<', client_content)
    if len(review_ui_matches) < 5:
        errors.append(f"Not enough review snippets in UI: {len(review_ui_matches)} found (minimum 5 required)")
    else:
        print(f"Review count: {len(review_ui_matches)} - OK")

    # 8. Footer check
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if "/what-are-the-risks-of-entering-a-debt-settlement-agreement" not in footer_content:
            errors.append("Page not linked in footer")
        else:
            print("Footer link - OK")

    # 9. Sitemap check
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if "/what-are-the-risks-of-entering-a-debt-settlement-agreement" not in sitemap_content:
            errors.append("Page not in sitemap")
        else:
            print("Sitemap entry - OK")

    return errors

if __name__ == "__main__":
    results = validate_page()
    if not results:
        print("\nAll checks passed!")
    else:
        print("\nValidation failed with the following errors:")
        for err in results:
            print(f"- {err}")
