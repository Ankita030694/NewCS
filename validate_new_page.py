import os
import re
import sys

def validate_page_directory(dir_path, footer_path, sitemap_path):
    if not os.path.isdir(dir_path):
        print(f"Error: Directory {dir_path} not found.")
        return False

    all_content = ""
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith('.tsx'):
                with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                    all_content += f.read() + "\n"

    errors = []

    # 1. Word Count (Approximate, removing tags)
    text_only = re.sub(r'<[^>]+>', ' ', all_content)
    # Removing code/imports/scripts
    text_only = re.sub(r'import.*?;', '', text_only)
    text_only = re.sub(r'const.*?;', '', text_only, flags=re.DOTALL)
    text_only = re.sub(r'export.*?;', '', text_only, flags=re.DOTALL)
    # Also remove the JSON schema parts to get accurate word count of human-readable text
    text_only = re.sub(r'\{.*?\}', '', text_only, flags=re.DOTALL)
    
    word_count = len(re.findall(r'\w+', text_only))
    if word_count < 3000:
        errors.append(f"Word count is too low: {word_count} words (Target: 3000+)")
    else:
        print(f"Success: Word count is {word_count}")

    # 2. Schema Presence
    schemas = ['Article', 'FAQPage', 'Review', 'BreadcrumbList']
    for schema in schemas:
        if schema not in all_content:
            errors.append(f"Missing schema: {schema}")
        else:
            print(f"Success: Found {schema} schema")

    # 3. FAQ Count
    faq_count = len(re.findall(r'question[\'"]?\s*:', all_content, re.IGNORECASE))
    if faq_count < 10:
        errors.append(f"FAQ count is too low: {faq_count} (Target: 10+)")
    else:
        print(f"Success: Found {faq_count} FAQs")

    # 4. Review Snippet Count
    review_count = len(re.findall(r'[\'"]?@type[\'"]?\s*:\s*[\'"]?Review[\'"]?', all_content))
    if review_count < 5:
        errors.append(f"Review count is too low: {review_count} (Target: 5+)")
    else:
        print(f"Success: Found {review_count} Reviews")

    # 5. No Em Dashes
    if '—' in all_content:
        errors.append("Found em dashes (—). Please remove them.")
    else:
        print("Success: No em dashes found.")

    # 6. Crawler Readability (Check for semantic tags)
    semantic_tags = ['<article', '<h1', '<h2', '<nav', '<footer']
    for tag in semantic_tags:
        if tag not in all_content.lower():
             print(f"Warning: Semantic tag {tag} might be missing or differently formatted.")

    # 7. Footer Link Check
    page_slug = os.path.basename(dir_path.rstrip('/'))
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if page_slug not in footer_content:
            errors.append(f"Page slug '{page_slug}' not found in footer ({footer_path})")
        else:
            print(f"Success: Page linked in footer")
    else:
        print(f"Warning: Footer file {footer_path} not found")

    # 8. Sitemap Check
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if page_slug not in sitemap_content:
            errors.append(f"Page slug '{page_slug}' not found in sitemap ({sitemap_path})")
        else:
            print(f"Success: Page found in sitemap")
    else:
        print(f"Warning: Sitemap file {sitemap_path} not found")

    if errors:
        print("\n--- Validation Failed ---")
        for error in errors:
            print(f" - {error}")
        return False
    else:
        print("\n--- Validation Passed! ---")
        return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python validate_new_page.py <path_to_page_directory>")
    else:
        footer = "src/components/Footer.tsx"
        sitemap = "src/app/sitemap.xml/route.ts"
        validate_page_directory(sys.argv[1], footer, sitemap)
