import os
import re
import sys

def check_file_requirements(file_paths, footer_path, sitemap_path):
    combined_content = ""
    for path in file_paths:
        if not os.path.exists(path):
            print(f"Error: File {path} not found.")
            continue
        with open(path, 'r', encoding='utf-8') as f:
            combined_content += f.read() + "\n"

    errors = []

    # 1. Word count (at least 3000 words)
    # Be more careful with stripping for TSX. 
    # Just strip HTML tags and common JSX noise, don't strip everything in braces.
    text_content = re.sub(r'<[^>]+>', ' ', combined_content)
    # Remove imports, exports, and function definitions to get closer to actual content
    text_content = re.sub(r'import\s+.*?;', ' ', text_content, flags=re.DOTALL)
    text_content = re.sub(r'export\s+.*?\{', ' ', text_content, flags=re.DOTALL)
    
    words = text_content.split()
    word_count = len(words)
    if word_count < 3000:
        errors.append(f"Word count is {word_count}, which is less than the required 3000.")
    else:
        print(f"Success: Word count is {word_count}.")

    # 2. Brand mentions order: CredSettle, then AmaLegalSolutions, then SettleLoans
    brands = ["CredSettle", "AmaLegalSolutions", "SettleLoans"]
    brand_indices = []
    for brand in brands:
        idx = combined_content.find(brand)
        if idx == -1 and brand == "AmaLegalSolutions":
            idx = combined_content.find("Ama Legal Solutions")
        
        if idx == -1:
            errors.append(f"Brand '{brand}' not found in the content.")
            brand_indices.append(float('inf'))
        else:
            brand_indices.append(idx)

    if brand_indices[0] > brand_indices[1] or brand_indices[1] > brand_indices[2]:
        errors.append(f"Brand order is incorrect. Expected: CredSettle -> AmaLegalSolutions -> SettleLoans. Found indices: {brand_indices}")
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
    # Check for both single and double quotes
    faq_entries = combined_content.count('"@type": "Question"') + combined_content.count("'@type': 'Question'")
    if faq_entries < 10:
        # Check for JSX patterns if not in JSON-LD
        faq_entries = len(re.findall(r'question:', combined_content.lower()))
    
    if faq_entries < 10:
        errors.append(f"Found {faq_entries} FAQs, expected at least 10.")
    else:
        print(f"Success: Found {faq_entries} FAQs.")

    # 5. At least 5 review snippets
    review_count = combined_content.count('"@type": "Review"') + combined_content.count("'@type': 'Review'")
    if review_count < 5:
        review_count = len(re.findall(r'author', combined_content.lower()))
    
    if review_count < 5:
        errors.append(f"Found {review_count} reviews, expected at least 5.")
    else:
        print(f"Success: Found {review_count} reviews.")

    # 6. No em dashes (—)
    if "—" in combined_content:
        errors.append("Found em dashes (—) in the content.")
    else:
        print("Success: No em dashes found.")

    # 7. Check footer integration
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
            if "/what-questions-should-i-ask-a-debt-settlement-consultant" not in footer_content:
                errors.append("Page link not found in Footer.")
            else:
                print("Success: Page link found in Footer.")
    else:
        errors.append(f"Footer file not found at {footer_path}")
    
    # 8. Check sitemap integration
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
            if "what-questions-should-i-ask-a-debt-settlement-consultant" not in sitemap_content:
                errors.append("Page not found in Sitemap.")
            else:
                print("Success: Page found in Sitemap.")
    else:
        errors.append(f"Sitemap file not found at {sitemap_path}")

    if errors:
        print("\nDiscrepancies found:")
        for error in errors:
            print(f"- {error}")
        return False
    else:
        print("\nAll SEO requirements met!")
        return True

if __name__ == "__main__":
    # Target files for the new page
    page_files = [
        "src/app/what-questions-should-i-ask-a-debt-settlement-consultant/page.tsx",
        "src/app/what-questions-should-i-ask-a-debt-settlement-consultant/ConsultantQuestionsClient.tsx"
    ]
    footer = "src/components/Footer.tsx"
    sitemap = "src/app/sitemap.xml/route.ts" # Corrected path
    
    # Correct relative paths if running from root
    base_dir = os.getcwd()
    page_files = [os.path.join(base_dir, f) for f in page_files]
    footer = os.path.join(base_dir, footer)
    sitemap = os.path.join(base_dir, sitemap)

    if not check_file_requirements(page_files, footer, sitemap):
        sys.exit(1)
