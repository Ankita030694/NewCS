import os
import re
import sys

def check_file_requirements(file_paths):
    combined_content = ""
    for path in file_paths:
        if not os.path.exists(path):
            print(f"Error: File {path} not found.")
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
    # Look for both JSON-LD and JSX patterns
    faq_entries = len(re.findall(r'question:', combined_content))
    if faq_entries < 10:
         faq_entries = combined_content.count('"@type": "Question"')
    
    if faq_entries < 10:
        errors.append(f"Found {faq_entries} FAQs, expected at least 10.")
    else:
        print(f"Success: Found {faq_entries} FAQs.")

    # 5. At least 5 review snippets
    # Look for JSON-LD reviews or JSX review blocks
    review_count = combined_content.count('"@type": "Review"')
    if review_count < 5:
        # Check for JSX blocks like "★★★★★" or "author"
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

    if errors:
        print("\nDiscrepancies found:")
        for error in errors:
            print(f"- {error}")
        return False
    else:
        print("\nAll SEO requirements met!")
        return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python validate_seo_page.py <file1> <file2> ...")
        sys.exit(1)
    
    if not check_file_requirements(sys.argv[1:]):
        sys.exit(1)
