import os
import re
import sys

def validate_page(page_path, client_path, footer_path, sitemap_path):
    files_to_check = [page_path, client_path]
    combined_content = ""
    for f_path in files_to_check:
        if os.path.exists(f_path):
            with open(f_path, 'r', encoding='utf-8') as f:
                combined_content += f.read() + "\n"
        else:
            print(f"Warning: File {f_path} not found.")

    if not combined_content:
        print("Error: No content found to validate.")
        return False

    errors = []

    # 1. Word Count (Approximate, removing tags and code)
    # Removing common code and schema to count actual content words
    text_only = re.sub(r'const\s+\w+\s*=\s*({.*?}|\[.*?\]);', '', combined_content, flags=re.DOTALL)
    text_only = re.sub(r'<[^>]+>', ' ', text_only)
    text_only = re.sub(r'import.*?;', ' ', text_only)
    text_only = re.sub(r'export.*?;', ' ', text_only)
    word_count = len(re.findall(r'\w+', text_only))
    if word_count < 3000:
        errors.append(f"Word count is too low: {word_count} words (Target: 3000+).")
    else:
        print(f"Success: Word count is {word_count}")

    # 2. Schema Presence
    schemas = ['Article', 'FAQPage', 'Review', 'BreadcrumbList']
    for schema in schemas:
        if schema not in combined_content:
            errors.append(f"Missing schema: {schema}")
        else:
            print(f"Success: Found {schema} schema")

    # 3. FAQ Count
    faq_count = len(re.findall(r'question[\'"]?\s*:', combined_content, re.IGNORECASE))
    if faq_count < 10:
        errors.append(f"FAQ count is too low: {faq_count} (Target: 10+)")
    else:
        print(f"Success: Found {faq_count} FAQs")

    # 4. Review Snippet Count
    review_count = len(re.findall(r'[\'"]?@type[\'"]?\s*:\s*[\'"]?Review[\'"]?', combined_content))
    if review_count < 5:
        errors.append(f"Review count is too low: {review_count} (Target: 5+)")
    else:
        print(f"Success: Found {review_count} Reviews")

    # 5. No Em Dashes
    if '—' in combined_content:
        errors.append("Found em dashes (—). Please remove them.")
    else:
        print("Success: No em dashes found.")

    # 6. Crawler Readability (Check for semantic tags)
    semantic_tags = ['<article', '<h1', '<h2', '<nav', '<footer']
    for tag in semantic_tags:
        if tag not in combined_content.lower():
             print(f"Warning: Semantic tag {tag} might be missing or differently formatted.")

    # 7. Link in Footer
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if '/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances' not in footer_content:
            errors.append("Page link not found in Footer.")
        else:
            print("Success: Page link found in Footer.")
    else:
        errors.append(f"Footer file not found at {footer_path}")

    # 8. Entry in Sitemap
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if 'what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances' not in sitemap_content:
            errors.append("Page not found in Sitemap route.")
        else:
            print("Success: Page found in Sitemap.")
    else:
        errors.append(f"Sitemap file not found at {sitemap_path}")

    # 9. Helpful Resources Check
    resources_match = re.search(r'id=["\']helpful-resources["\'].*?(<ul.*?</ul>)', combined_content, re.DOTALL | re.IGNORECASE)
    if resources_match:
        # Broader regex to handle any href content
        resource_links = re.findall(r'href=["\']([^"\']+)["\']', resources_match.group(1))
        if not resource_links:
             errors.append("Helpful Resources section found but no links detected.")
        else:
            if os.path.exists(sitemap_path):
                with open(sitemap_path, 'r', encoding='utf-8') as f:
                    sitemap_content = f.read()
                for link in resource_links:
                    clean_link = link.strip('/')
                    if clean_link and clean_link not in sitemap_content:
                        errors.append(f"Helpful Resource link '{link}' not found in sitemap.")
                print(f"Success: Checked {len(resource_links)} Helpful Resource links.")
    else:
        print("Warning: No 'Helpful Resources' section found to validate.")

    if errors:
        print("\n--- Validation Failed ---")
        for error in errors:
            print(f" - {error}")
        return False
    else:
        print("\n--- Validation Passed! ---")
        return True

if __name__ == "__main__":
    base_dir = "/Users/apple/Desktop/ama/credsettle/NewCS"
    target_page = f"{base_dir}/src/app/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances/page.tsx"
    client_page = f"{base_dir}/src/app/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances/BestLoanSettlementClient.tsx"
    footer = f"{base_dir}/src/components/Footer.tsx"
    sitemap = f"{base_dir}/src/app/sitemap.xml/route.ts"
    validate_page(target_page, client_page, footer, sitemap)
