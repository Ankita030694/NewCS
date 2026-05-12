import os
import re
import sys

def check_integration(footer_path, sitemap_path, url_slug):
    success = True
    
    # Footer check
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if url_slug in footer_content:
            print(f"PASS: URL {url_slug} found in footer.")
        else:
            print(f"FAIL: URL {url_slug} NOT found in footer.")
            success = False
    else:
        print(f"Error: Footer file {footer_path} not found.")
        success = False

    # Sitemap check
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if url_slug in sitemap_content:
            print(f"PASS: URL {url_slug} found in sitemap.")
        else:
            print(f"FAIL: URL {url_slug} NOT found in sitemap.")
            success = False
    else:
        print(f"Error: Sitemap file {sitemap_path} not found.")
        success = False

    return success

if __name__ == "__main__":
    client_file = "/Users/apple/Desktop/ama/credsettle/NewCS/src/app/what-is-the-success-rate-of-debt-settlement-programs/SuccessRateClient.tsx"
    page_file = "/Users/apple/Desktop/ama/credsettle/NewCS/src/app/what-is-the-success-rate-of-debt-settlement-programs/page.tsx"
    
    if not os.path.exists(client_file) or not os.path.exists(page_file):
        print("Error: One or both files missing.")
        sys.exit(1)

    with open(client_file, 'r', encoding='utf-8') as f:
        client_content = f.read()
    with open(page_file, 'r', encoding='utf-8') as f:
        page_content = f.read()
    
    combined_content = client_content + page_content

    print(f"Checking requirements for combined content...")
    
    success = True

    # 1. Word count
    text_content = re.sub(r'<[^>]+>', ' ', combined_content)
    text_content = re.sub(r'\{[^\}]+\}', ' ', text_content)
    words = text_content.split()
    word_count = len(words)
    print(f"Word count: {word_count}")
    if word_count < 3000:
        print("FAIL: Word count is less than 3000.")
        success = False
    else:
        print("PASS: Word count is 3000 or more.")

    # 2. Brand order
    brands = ["credsettle", "amalegalsolutions", "settleloans"]
    brand_positions = []
    # Check order in SuccessRateClient.tsx specifically
    for brand in brands:
        pos = client_content.lower().find(brand)
        brand_positions.append(pos)
    
    print(f"Brand positions in Client: {brand_positions}")
    if -1 in brand_positions:
        print(f"FAIL: One or more brands missing in Client. Found: {brand_positions}")
        success = False
    elif brand_positions != sorted(brand_positions):
        print("FAIL: Brands are not in the correct order in Client.")
        success = False
    else:
        print("PASS: Brands are in the correct order.")

    # 3. No em-dashes
    if "—" in combined_content:
        print("FAIL: Content contains em-dashes (—).")
        success = False
    else:
        print("PASS: No em-dashes found.")

    # 5. Schema presence
    schemas = ["Article", "FAQPage", "Review", "BreadcrumbList"]
    for schema in schemas:
        if schema in combined_content:
            print(f"PASS: {schema} schema found.")
        else:
            print(f"FAIL: {schema} schema missing.")
            success = False

    # 6. FAQ count
    faq_matches = re.findall(r'question:', combined_content)
    faq_count = len(faq_matches)
    print(f"FAQ count: {faq_count}")
    if faq_count < 10:
        print("FAIL: FAQ count is less than 10.")
        success = False
    else:
        print("PASS: FAQ count is 10 or more.")

    # 7. Review count
    review_schema_matches = re.findall(r"'@type': 'Review'", combined_content)
    review_block_matches = re.findall(r'tracking-wide', combined_content)
    review_count = max(len(review_schema_matches), len(review_block_matches))
    print(f"Review count: {review_count}")
    if review_count < 5:
        print("FAIL: Review count is less than 5.")
        success = False
    else:
        print("PASS: Review count is 5 or more.")

    footer_file = "/Users/apple/Desktop/ama/credsettle/NewCS/src/components/Footer.tsx"
    sitemap_file = "/Users/apple/Desktop/ama/credsettle/NewCS/src/app/sitemap.xml/route.ts"
    slug = "/what-is-the-success-rate-of-debt-settlement-programs"

    integration_success = check_integration(footer_file, sitemap_file, slug)

    if success and integration_success:
        print("\nALL CHECKS PASSED!")
        sys.exit(0)
    else:
        print("\nSOME CHECKS FAILED!")
        sys.exit(1)
