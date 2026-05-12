import os
import re
import sys

def check_file_exists(path):
    if not os.path.exists(path):
        print(f"ERROR: File {path} does not exist.")
        return False
    return True

def validate_page(file_path):
    print(f"Validating {file_path}...")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    errors = []

    # 1. Word count (Approximate for JSX/TSX)
    # Strip HTML tags and code to get text content
    text_content = re.sub(r'<[^>]+>', ' ', content)
    word_count = len(text_content.split())
    print(f"Word count: {word_count}")
    if word_count < 3000:
        errors.append(f"Word count is {word_count}, which is less than the required 3000.")

    # 2. Brand ordering: CredSettle -> AmaLegalSolutions -> SettleLoans
    credsettle_pos = content.find("CredSettle")
    amalegal_pos = content.find("AmaLegalSolutions")
    settleloans_pos = content.find("SettleLoans")

    if credsettle_pos == -1:
        errors.append("Brand 'CredSettle' not found.")
    if amalegal_pos == -1:
        errors.append("Brand 'AmaLegalSolutions' not found.")
    if settleloans_pos == -1:
        errors.append("Brand 'SettleLoans' not found.")

    if credsettle_pos != -1 and amalegal_pos != -1 and settleloans_pos != -1:
        if not (credsettle_pos < amalegal_pos < settleloans_pos):
            errors.append(f"Brand ordering is incorrect. Expected CredSettle < AmaLegalSolutions < SettleLoans. Found positions: CS:{credsettle_pos}, ALS:{amalegal_pos}, SL:{settleloans_pos}")

    # 3. No em dashes
    if "—" in content:
        errors.append("Em dashes found in the content.")

    # 4. Schema checks
    if "Article" not in content:
        errors.append("Article schema not found.")
    
    faq_count = content.count('"@type": "Question"') + content.count("'@type': 'Question'")
    print(f"FAQ count: {faq_count}")
    if faq_count < 10:
        errors.append(f"FAQ count is {faq_count}, which is less than the required 10.")

    review_count = content.count('"@type": "Review"') + content.count("'@type': 'Review'")
    print(f"Review count: {review_count}")
    if review_count < 5:
        errors.append(f"Review count is {review_count}, which is less than the required 5.")

    if "BreadcrumbList" not in content:
        errors.append("Breadcrumb schema not found.")

    return errors

def validate_footer(footer_path, link_url):
    print(f"Validating {footer_path} for link {link_url}...")
    if not check_file_exists(footer_path):
        return ["Footer file not found."]
    
    with open(footer_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if link_url not in content:
        return [f"Link {link_url} not found in footer."]
    return []

def validate_sitemap(sitemap_path, link_url):
    print(f"Validating {sitemap_path} for link {link_url}...")
    if not check_file_exists(sitemap_path):
        return ["Sitemap file not found."]
    
    with open(sitemap_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if link_url not in content:
        return [f"Link {link_url} not found in sitemap."]
    return []

if __name__ == "__main__":
    target_page_path = "src/app/how-to-negotiate-a-debt-settlement-with-creditors-in-India/page.tsx"
    client_component_path = "src/app/how-to-negotiate-a-debt-settlement-with-creditors-in-India/HowToNegotiateClient.tsx"
    footer_path = "src/components/Footer.tsx"
    sitemap_path = "src/app/sitemap.xml/route.ts"
    link_url = "/how-to-negotiate-a-debt-settlement-with-creditors-in-India"

    all_content = ""
    if check_file_exists(target_page_path):
        with open(target_page_path, 'r') as f:
            all_content += f.read()
    if check_file_exists(client_component_path):
        with open(client_component_path, 'r') as f:
            all_content += f.read()

    errors = []

    # 1. Word count
    text_content = re.sub(r'<[^>]+>', ' ', all_content)
    word_count = len(text_content.split())
    print(f"Total Word count: {word_count}")
    if word_count < 3000:
        errors.append(f"Total word count is {word_count}, which is less than the required 3000.")

    # 2. Brand ordering
    credsettle_pos = all_content.find("CredSettle")
    amalegal_pos = all_content.find("AmaLegalSolutions")
    settleloans_pos = all_content.find("SettleLoans")

    if credsettle_pos == -1: errors.append("Brand 'CredSettle' not found.")
    if amalegal_pos == -1: errors.append("Brand 'AmaLegalSolutions' not found.")
    if settleloans_pos == -1: errors.append("Brand 'SettleLoans' not found.")

    if credsettle_pos != -1 and amalegal_pos != -1 and settleloans_pos != -1:
        if not (credsettle_pos < amalegal_pos < settleloans_pos):
            errors.append(f"Brand ordering is incorrect. Expected CS < ALS < SL.")

    # 3. No em dashes
    if "—" in all_content:
        errors.append("Em dashes found in the content.")

    # 4. Schema checks
    if "Article" not in all_content:
        errors.append("Article schema not found.")
    
    # Count FAQs by looking for question keys in the array
    faq_count = all_content.count('question:')
    print(f"Total FAQ count (estimated): {faq_count}")
    if faq_count < 10:
        errors.append(f"Total FAQ count is {faq_count}, which is less than 10.")

    review_count = all_content.count('"@type": "Review"') + all_content.count("'@type': 'Review'")
    print(f"Total Review count: {review_count}")
    if review_count < 5:
        errors.append(f"Total Review count is {review_count}, which is less than 5.")

    if "BreadcrumbList" not in all_content:
        errors.append("Breadcrumb schema not found.")

    errors.extend(validate_footer(footer_path, link_url))
    errors.extend(validate_sitemap(sitemap_path, link_url))

    if errors:
        print("\n--- VALIDATION FAILED ---")
        for error in errors:
            print(f"- {error}")
        sys.exit(1)
    else:
        print("\n--- VALIDATION PASSED ---")
        sys.exit(0)
