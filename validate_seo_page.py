import os
import re
import sys

def check_word_count(file_path, min_words=3000):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Remove JSX/HTML tags for word count
        text = re.sub(r'<[^>]+>', ' ', content)
        words = text.split()
        count = len(words)
        return count >= min_words, count

def check_brand_order(file_path):
    brands = ["CredSettle", "Amalegalsolutions", "SettleLoans"]
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        indices = [content.find(brand) for brand in brands]
        
        if -1 in indices:
            missing = [brands[i] for i, idx in enumerate(indices) if idx == -1]
            return False, f"Missing brands: {missing}"
        
        if indices != sorted(indices):
            return False, f"Incorrect order: {indices}"
        
        return True, "Correct order"

def check_no_em_dash(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        if "—" in content or "&mdash;" in content:
            return False, "Found em-dash"
        return True, "No em-dash found"

def check_schemas(file_path):
    required = ["Article", "FAQPage", "Review", "BreadcrumbList"]
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        missing = [s for s in required if s not in content]
        if missing:
            return False, f"Missing schemas: {missing}"
        return True, "All schemas present"

def check_faq_count(file_path, min_faqs=10):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Count FAQ entries in the schema or the UI
        # This is a bit naive but works for standard structures
        faq_count = content.count('"@type": "Question"')
        if faq_count == 0:
             # Try counting in the faqs array if it's a TSX file
             faq_count = content.count('question:')
        return faq_count >= min_faqs, faq_count

def check_review_count(file_path, min_reviews=5):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Count Review entries in the schema
        review_count = content.count('"@type": "Review"')
        return review_count >= min_reviews, review_count

def check_footer_link(footer_path, link_url):
    if not os.path.exists(footer_path):
        return False, "Footer file not found"
    with open(footer_path, 'r', encoding='utf-8') as f:
        content = f.read()
        if link_url in content:
            return True, "Link found in footer"
        return False, "Link not found in footer"

def check_sitemap_entry(sitemap_path, link_url):
    if not os.path.exists(sitemap_path):
        return False, "Sitemap file not found"
    with open(sitemap_path, 'r', encoding='utf-8') as f:
        content = f.read()
        if link_url in content:
            return True, "Link found in sitemap"
        return False, "Link not found in sitemap"

def main():
    target_page = "/Users/apple/Desktop/ama/credsettle/NewCS/src/app/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases/page.tsx"
    client_page = "/Users/apple/Desktop/ama/credsettle/NewCS/src/app/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases/LegalAidClient.tsx"
    footer_path = "/Users/apple/Desktop/ama/credsettle/NewCS/src/components/Footer.tsx"
    sitemap_path = "/Users/apple/Desktop/ama/credsettle/NewCS/src/app/sitemap.xml"
    url_path = "what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases"

    results = []

    # Check Target Page (Metadata and Schema)
    if os.path.exists(target_page):
        results.append(("Brand Order (Target)", *check_brand_order(target_page)))
        results.append(("No Em-Dash (Target)", check_no_em_dash(target_page)))
        results.append(("Schemas (Target)", check_schemas(target_page)))
        results.append(("Review Count (Target)", *check_review_count(target_page)))
    else:
        results.append(("Target Page", False, "File not found"))

    # Check Client Page (Content)
    if os.path.exists(client_page):
        wc_pass, wc = check_word_count(client_page)
        results.append(("Word Count (Client)", wc_pass, f"{wc} words"))
        results.append(("No Em-Dash (Client)", check_no_em_dash(client_page)))
        results.append(("FAQ Count (Client)", *check_faq_count(client_page)))
    else:
        results.append(("Client Page", False, "File not found"))

    # Check Footer
    results.append(("Footer Link", *check_footer_link(footer_path, url_path)))

    # Check Sitemap
    results.append(("Sitemap Entry", *check_sitemap_entry(sitemap_path, url_path)))

    print("\n--- SEO Validation Results ---")
    all_pass = True
    for test, status, msg in results:
        icon = "✅" if status else "❌"
        print(f"{icon} {test}: {msg}")
        if not status:
            all_pass = False
    
    if not all_pass:
        sys.exit(1)

if __name__ == "__main__":
    main()
