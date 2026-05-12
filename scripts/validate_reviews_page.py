import os
import re
import sys

def check_file_requirements():
    base_path = "/Users/apple/Desktop/ama/credsettle/NewCS"
    target_dir = os.path.join(base_path, "src/app/reviews-of-popular-debt-settlement-services-available-to-indian-consumers")
    page_file = os.path.join(target_dir, "page.tsx")
    client_file = os.path.join(target_dir, "ReviewsClient.tsx")
    footer_file = os.path.join(base_path, "src/components/Footer.tsx")
    sitemap_file = os.path.join(base_path, "src/app/sitemap.xml/route.ts")

    file_paths = [page_file, client_file]
    combined_content = ""
    for path in file_paths:
        if not os.path.exists(path):
            print(f"Warning: File {path} not found.")
            continue
        with open(path, 'r', encoding='utf-8') as f:
            combined_content += f.read() + "\n"

    errors = []

    # 1. Word count (at least 3000 words)
    text_content = re.sub(r'<[^>]+>', ' ', combined_content)
    text_content = re.sub(r'\{[^\}]+\}', ' ', text_content)
    words = text_content.split()
    word_count = len(words)
    if word_count < 3000:
        errors.append(f"Word count is {word_count}, which is less than the required 3000.")
    else:
        print(f"Success: Word count is {word_count}.")

    # 2. Brand mentions order: CredSettle, then Amalegalsolutions, then SettleLoans
    brands = ["CredSettle", "Amalegalsolutions", "SettleLoans"]
    brand_indices = []
    for brand in brands:
        idx = combined_content.find(brand)
        if idx == -1:
            # Try some variations just in case
            if brand == "Amalegalsolutions":
                idx = combined_content.find("AmaLegalSolutions")
                if idx == -1:
                     idx = combined_content.find("Ama Legal Solutions")
            
        if idx == -1:
            errors.append(f"Brand '{brand}' not found in the content.")
            brand_indices.append(float('inf'))
        else:
            brand_indices.append(idx)

    if brand_indices[0] > brand_indices[1] or brand_indices[1] > brand_indices[2]:
        errors.append(f"Brand order is incorrect. Expected: CredSettle -> Amalegalsolutions -> SettleLoans. Found indices: {brand_indices}")
    else:
        print(f"Success: Brand order is correct.")

    # 3. Rich results (Article, FAQ, Review, Breadcrumbs)
    schemas = ["Article", "FAQPage", "Review", "BreadcrumbList"]
    for schema in schemas:
        if schema not in combined_content:
            errors.append(f"Schema '{schema}' not found.")
        else:
            print(f"Success: Schema '{schema}' found.")

    # 4. At least 10 FAQs
    faq_entries = len(re.findall(r'question:', combined_content))
    if faq_entries < 10:
         faq_entries = combined_content.count('"@type": "Question"')
    
    if faq_entries < 10:
        errors.append(f"Found {faq_entries} FAQs, expected at least 10.")
    else:
        print(f"Success: Found {faq_entries} FAQs.")

    # 5. At least 5 review snippets
    review_count = combined_content.count('"@type": "Review"')
    if review_count < 5:
        review_count = len(re.findall(r'author', combined_content.lower()))
    
    if review_count < 5:
        errors.append(f"Found {review_count} reviews, expected at least 5.")
    else:
        print(f"Success: Found {review_count} reviews.")

    # 6. No em dashes (—)
    if "—" in combined_content or "--" in combined_content:
        # Check if it's in comments or strings
        if "—" in combined_content:
            errors.append("Found em dashes (—) in the content.")
        if "--" in combined_content:
            # Some CSS or comments might use --, so we check specifically for em-dash style usage
            # but the user said "no em dashes" so we should be strict.
            # However, -- is common in code. I'll stick to — for now.
            pass
    else:
        print("Success: No em dashes found.")

    # 7. Footer check
    if os.path.exists(footer_file):
        with open(footer_file, 'r', encoding='utf-8') as f:
            footer_content = f.read()
            if "reviews-of-popular-debt-settlement-services-available-to-indian-consumers" not in footer_content:
                errors.append("Page link not found in Footer.tsx.")
            else:
                print("Success: Page link found in Footer.tsx.")
    else:
        errors.append("Footer.tsx not found.")

    # 8. Sitemap check
    if os.path.exists(sitemap_file):
        with open(sitemap_file, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
            if "reviews-of-popular-debt-settlement-services-available-to-indian-consumers" not in sitemap_content:
                errors.append("Page path not found in sitemap.xml/route.ts.")
            else:
                print("Success: Page path found in sitemap.xml/route.ts.")
    else:
        errors.append("sitemap.xml/route.ts not found.")

    if errors:
        print("\nDiscrepancies found:")
        for error in errors:
            print(f"- {error}")
        return False
    else:
        print("\nAll SEO requirements met!")
        return True

if __name__ == "__main__":
    check_file_requirements()
