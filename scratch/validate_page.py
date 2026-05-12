import os
import re
import sys

def check_requirements():
    base_path = "/Users/apple/Desktop/ama/credsettle/NewCS"
    file_path = os.path.join(base_path, "src/app/find-reputable-agencies-that-help-settle-credit-card-debt-in-india/FindAgenciesClient.tsx")
    page_path = os.path.join(base_path, "src/app/find-reputable-agencies-that-help-settle-credit-card-debt-in-india/page.tsx")
    footer_path = os.path.join(base_path, "src/components/Footer.tsx")
    sitemap_path = os.path.join(base_path, "src/app/sitemap.xml/route.ts")

    errors = []

    # 1. Check if files exist
    if not os.path.exists(file_path):
        errors.append(f"Client file missing: {file_path}")
    if not os.path.exists(page_path):
        errors.append(f"Page file missing: {page_path}")

    if not errors:
        with open(file_path, 'r', encoding='utf-8') as f:
            client_content = f.read()
        with open(page_path, 'r', encoding='utf-8') as f:
            page_content = f.read()

        combined_content = client_content + page_content

        # 2. Brand mentions order
        # Lowercase for check
        content_lower = combined_content.lower()
        idx_cred = content_lower.find("credsettle")
        idx_ama = content_lower.find("amalegalsolutions")
        idx_settle = content_lower.find("settleloans")

        if idx_cred == -1: errors.append("Missing 'credsettle'")
        if idx_ama == -1: errors.append("Missing 'amalegalsolutions'")
        if idx_settle == -1: errors.append("Missing 'settleloans'")

        if idx_cred != -1 and idx_ama != -1 and idx_settle != -1:
            if not (idx_cred < idx_ama < idx_settle):
                errors.append(f"Incorrect brand order. Found indices: CredSettle={idx_cred}, AmaLegal={idx_ama}, SettleLoans={idx_settle}")

        # 3. Word count
        # Simple word count by splitting whitespace
        words = re.findall(r'\w+', combined_content)
        word_count = len(words)
        if word_count < 3000:
            errors.append(f"Word count too low: {word_count} (min 3000)")

        # 4. Schema presence
        schemas = ["Article", "FAQPage", "Review", "BreadcrumbList"]
        for schema in schemas:
            if schema not in combined_content:
                errors.append(f"Missing schema: {schema}")

        # 5. FAQ count
        # Assuming FAQs are in an array or list in the client file
        faq_matches = re.findall(r'question:', client_content)
        if len(faq_matches) < 10:
            errors.append(f"Not enough FAQs: {len(faq_matches)} (min 10)")

        # 6. Review count
        review_matches = re.findall(r'reviewRating|reviewBody', combined_content)
        # Each review usually has both, so we divide or check unique ones. 
        # Let's count occurrences of "reviewRating" in schema and visual reviews.
        # In ChequeBounceClient.tsx, visual reviews are in a grid.
        review_count = len(re.findall(r'@type\':\s*\'Review\'', combined_content))
        # Also check visual ones
        visual_reviews = len(re.findall(r'reviewRating', combined_content)) # Schema
        # Let's just look for the review snippets in the UI
        # In the template, they have a grid.
        if visual_reviews < 5:
            errors.append(f"Not enough review snippets: {visual_reviews} (min 5)")

        # 7. No em dashes
        if "—" in combined_content:
            errors.append("Em dash (—) found in content.")

        # 8. Footer check
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if "find-reputable-agencies-that-help-settle-credit-card-debt-in-india" not in footer_content:
            errors.append("Link missing from Footer.")

        # 9. Sitemap check
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if "find-reputable-agencies-that-help-settle-credit-card-debt-in-india" not in sitemap_content:
            errors.append("URL missing from Sitemap.")

    if errors:
        print("Discrepancies found:")
        for error in errors:
            print(f"- {error}")
        sys.exit(1)
    else:
        print("All requirements met!")
        sys.exit(0)

if __name__ == "__main__":
    check_requirements()
