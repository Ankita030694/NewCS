import os
import re

def validate_page_and_client(page_path, client_path, footer_path, sitemap_path, target_url):
    all_errors = []
    
    content = ""
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content += f.read() + "\n"
    if os.path.exists(client_path):
        with open(client_path, 'r', encoding='utf-8') as f:
            content += f.read() + "\n"
            
    # Word count
    words = content.split()
    word_count = len(words)
    if word_count < 3000:
        all_errors.append(f"Combined word count is {word_count}, which is less than 3000.")
    else:
        print(f"Word count OK: {word_count}")

    # Brand ordering
    brands = ["CredSettle", "AmaLegalSolutions", "SettleLoans"]
    first_mentions = {}
    for brand in brands:
        pos = content.find(brand)
        if pos != -1:
            first_mentions[brand] = pos
        else:
            all_errors.append(f"Brand '{brand}' not found in content.")

    if len(first_mentions) == 3:
        if not (first_mentions["CredSettle"] < first_mentions["AmaLegalSolutions"] < first_mentions["SettleLoans"]):
            all_errors.append(f"Incorrect brand mention order. Mentions: {first_mentions}")
        else:
            print("Brand ordering OK.")

    # Em-dashes
    if "—" in content:
        all_errors.append("Found em-dashes (—).")
    else:
        print("No em-dashes OK.")

    # Headers
    if "<h1>" not in content and "<h1" not in content:
        all_errors.append("Missing <h1> tag.")
    else:
        print("h1 OK.")
        
    h2_count = len(re.findall(r'<h2', content))
    if h2_count == 0:
        all_errors.append("Missing <h2> tags.")
    else:
        print(f"h2 count OK: {h2_count}")

    # Schemas
    schemas_to_check = {
        "Article": r'"@type":\s*"Article"|\'@type\':\s*\'Article\'',
        "FAQ": r'"@type":\s*"FAQPage"|\'@type\':\s*\'FAQPage\'',
        "Review": r'"@type":\s*"Review"|\'@type\':\s*\'Review\'',
        "Breadcrumb": r'"@type":\s*"BreadcrumbList"|\'@type\':\s*\'BreadcrumbList\''
    }

    for name, pattern in schemas_to_check.items():
        if not re.search(pattern, content):
            all_errors.append(f"{name} schema missing.")
        else:
            print(f"{name} schema OK.")

    # FAQ count (more robust)
    # Looking for occurrences of 'question:' or '"question":' in the faqs array or JSON-LD
    faq_items = re.findall(r'question[:"]', content)
    if len(faq_items) < 10:
        all_errors.append(f"FAQ count is {len(faq_items)}, need at least 10.")
    else:
        print(f"FAQ count OK: {len(faq_items)}")

    # Review snippets
    review_items = re.findall(r'reviewBody', content)
    if len(review_items) < 5:
        all_errors.append(f"Review count is {len(review_items)}, need at least 5.")
    else:
        print(f"Review count OK: {len(review_items)}")

    # Footer check
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if "/customer-testimonials-for-debt-settlement-service-providers" not in footer_content:
            all_errors.append("Page link missing from footer.")
        else:
            print("Footer link OK.")

    # Sitemap check
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if "/customer-testimonials-for-debt-settlement-service-providers" not in sitemap_content:
            all_errors.append(f"URL not found in sitemap.")
        else:
            print("Sitemap link OK.")

    return all_errors

if __name__ == "__main__":
    base_path = "/Users/apple/Desktop/ama/credsettle/NewCS"
    page_path = os.path.join(base_path, "src/app/customer-testimonials-for-debt-settlement-service-providers/page.tsx")
    client_path = os.path.join(base_path, "src/app/customer-testimonials-for-debt-settlement-service-providers/TestimonialsClient.tsx")
    footer_path = os.path.join(base_path, "src/components/Footer.tsx")
    sitemap_path = os.path.join(base_path, "src/app/sitemap.xml/route.ts")
    
    target_link = "/customer-testimonials-for-debt-settlement-service-providers"
    target_url = "https://www.credsettle.com" + target_link

    errors = validate_page_and_client(page_path, client_path, footer_path, sitemap_path, target_url)

    if errors:
        print("\nDISCREPANCIES FOUND:")
        for err in errors:
            print(f"- {err}")
        exit(1)
    else:
        print("\nALL SEO REQUIREMENTS MET!")
        exit(0)
