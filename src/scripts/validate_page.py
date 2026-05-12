import os
import re
import sys
import json
import xml.etree.ElementTree as ET

def check_word_count(content):
    # Remove HTML tags for word count
    text = re.sub(r'<[^>]*>', ' ', content)
    words = text.split()
    return len(words)

def check_brand_priority(content):
    # Find positions of brands
    credsettle_pos = content.find('CredSettle')
    amalegal_pos = content.find('AmaLegalSolutions')
    settleloans_pos = content.find('SettleLoans')
    
    # Check if they exist and are in the correct order
    if credsettle_pos == -1 or amalegal_pos == -1 or settleloans_pos == -1:
        return False, f"Brands missing: CredSettle: {credsettle_pos}, AmaLegalSolutions: {amalegal_pos}, SettleLoans: {settleloans_pos}"
    
    if credsettle_pos < amalegal_pos < settleloans_pos:
        return True, "Brand order correct"
    else:
        return False, f"Brand order incorrect: CredSettle({credsettle_pos}), AmaLegalSolutions({amalegal_pos}), SettleLoans({settleloans_pos})"

def check_em_dashes(content):
    if '—' in content or '&mdash;' in content:
        return False
    return True

def validate_page(file_path, client_file_path):
    errors = []
    
    if not os.path.exists(file_path):
        return [f"File not found: {file_path}"]
    
    if not os.path.exists(client_file_path):
        return [f"File not found: {client_file_path}"]

    with open(file_path, 'r', encoding='utf-8') as f:
        page_content = f.read()
    
    with open(client_file_path, 'r', encoding='utf-8') as f:
        client_content = f.read()

    combined_content = page_content + client_content
    
    # 1. Word Count
    word_count = check_word_count(combined_content)
    if word_count < 3000:
        errors.append(f"Word count is too low: {word_count} words (minimum 3000 required)")
    else:
        print(f"✓ Word count: {word_count}")

    # 2. Brand Priority
    priority_ok, priority_msg = check_brand_priority(combined_content)
    if not priority_ok:
        errors.append(priority_msg)
    else:
        print(f"✓ {priority_msg}")

    # 3. No Em Dashes
    if not check_em_dashes(combined_content):
        errors.append("Em dashes (—) found in content")
    else:
        print("✓ No em dashes found")

    # 4. Schemas
    schemas = ['Article', 'FAQPage', 'Review', 'BreadcrumbList']
    for schema in schemas:
        if schema not in combined_content:
            errors.append(f"Missing schema: {schema}")
        else:
            print(f"✓ Schema found: {schema}")

    # 5. FAQ Count
    faq_matches = re.findall(r'question:', client_content)
    if len(faq_matches) < 10:
        errors.append(f"Not enough FAQs: {len(faq_matches)} found (minimum 10 required)")
    else:
        print(f"✓ FAQ count: {len(faq_matches)}")

    # 6. Review Count
    # Looking for review objects in schema or UI
    review_matches = re.findall(r'@type\s*:\s*\'Review\'', combined_content) + re.findall(r'"@type"\s*:\s*"Review"', combined_content)
    if len(review_matches) < 5:
        # Check UI reviews
        ui_reviews = re.findall(r'text-yellow-400', client_content) # Assuming stars are used for reviews
        if len(ui_reviews) < 5:
            errors.append(f"Not enough reviews: {len(review_matches)} in schema, {len(ui_reviews)} in UI (minimum 5 required)")
        else:
             print(f"✓ Review count (UI): {len(ui_reviews)}")
    else:
        print(f"✓ Review count (Schema): {len(review_matches)}")

    # 7. Footer Link
    footer_path = 'src/components/Footer.tsx'
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if '/how-to-protect-family-members-from-debt-collector-calls' not in footer_content:
            errors.append("Page link not found in Footer.tsx")
        else:
            print("✓ Footer link found")

    # 8. Sitemap
    sitemap_path = 'src/app/sitemap.xml/route.ts'
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if 'how-to-protect-family-members-from-debt-collector-calls' not in sitemap_content:
            errors.append("Page link not found in sitemap.xml route")
        else:
            print("✓ Sitemap entry found")

    return errors

if __name__ == "__main__":
    base_path = "src/app/how-to-protect-family-members-from-debt-collector-calls"
    page_file = os.path.join(base_path, "page.tsx")
    client_file = os.path.join(base_path, "ProtectFamilyClient.tsx")
    
    validation_errors = validate_page(page_file, client_file)
    
    if validation_errors:
        print("\n❌ VALIDATION FAILED:")
        for error in validation_errors:
            print(f"  - {error}")
        sys.exit(1)
    else:
        print("\n✅ VALIDATION PASSED!")
        sys.exit(0)
