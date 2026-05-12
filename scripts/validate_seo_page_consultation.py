import os
import re
import sys

def check_seo_page(file_path, client_file_path, expected_url):
    print(f"Checking SEO page: {file_path}")
    
    if not os.path.exists(file_path):
        print(f"Error: Page file not found at {file_path}")
        return False
        
    if not os.path.exists(client_file_path):
        print(f"Error: Client file not found at {client_file_path}")
        return False

    with open(file_path, 'r', encoding='utf-8') as f:
        page_content = f.read()
        
    with open(client_file_path, 'r', encoding='utf-8') as f:
        client_content = f.read()

    combined_content = page_content + " " + client_content
    
    # 1. Check for em-dashes
    if '—' in combined_content:
        print("FAIL: Found em-dashes (—)")
    else:
        print("PASS: No em-dashes found")

    # 2. Check brand priority
    brands = ['CredSettle', 'Amalegalsolutions', 'settleloans']
    brand_indices = []
    for brand in brands:
        idx = combined_content.lower().find(brand.lower())
        brand_indices.append(idx)
    
    if -1 in brand_indices:
        print(f"FAIL: One or more brands missing: {brands}")
    elif brand_indices != sorted(brand_indices):
        print(f"FAIL: Brand priority incorrect. Order found: {[brands[i] for i in sorted(range(len(brand_indices)), key=lambda k: brand_indices[k]) if brand_indices[i] != -1]}")
    else:
        print("PASS: Brand priority is correct")

    # 3. Check word count
    # Strip HTML-like tags and script content for a more accurate word count
    text_content = re.sub(r'<[^>]*>', ' ', combined_content)
    text_content = re.sub(r'\{[^}]*\}', ' ', text_content)
    words = text_content.split()
    word_count = len(words)
    if word_count < 3000:
        print(f"FAIL: Word count is {word_count}, expected at least 3000")
    else:
        print(f"PASS: Word count is {word_count}")

    # 4. Check schemas
    schemas = ['Article', 'FAQPage', 'Review', 'BreadcrumbList']
    for schema in schemas:
        if schema in combined_content:
            print(f"PASS: Found {schema} schema")
        else:
            print(f"FAIL: Missing {schema} schema")

    # 5. Check FAQs count
    faq_matches = re.findall(r'"@type":\s*"Question"', client_content)
    if len(faq_matches) < 10:
        print(f"FAIL: Found {len(faq_matches)} FAQs, expected at least 10")
    else:
        print(f"PASS: Found {len(faq_matches)} FAQs")

    # 6. Check review snippets count
    review_matches = re.findall(r'"@type":\s*"Review"', combined_content)
    if len(review_matches) < 5:
        print(f"FAIL: Found {len(review_matches)} reviews, expected at least 5")
    else:
        print(f"PASS: Found {len(review_matches)} reviews")

    # 7. Check footer link
    footer_path = 'src/components/Footer.tsx'
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if expected_url in footer_content:
            print("PASS: Page linked in footer")
        else:
            print("FAIL: Page not linked in footer")
    else:
        print("WARNING: Footer file not found")

    # 8. Check sitemap
    sitemap_path = 'src/app/sitemap.ts'
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if expected_url.strip('/') in sitemap_content:
            print("PASS: Page found in sitemap.ts")
        else:
            print("FAIL: Page not found in sitemap.ts")
    else:
        print("WARNING: Sitemap file not found")

    return True

if __name__ == "__main__":
    page_file = 'src/app/get-a-free-consultation-for-debt-settlement-options/page.tsx'
    client_file = 'src/app/get-a-free-consultation-for-debt-settlement-options/ConsultationClient.tsx'
    url = '/get-a-free-consultation-for-debt-settlement-options'
    check_seo_page(page_file, client_file, url)
