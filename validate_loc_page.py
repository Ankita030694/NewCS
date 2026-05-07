import os
import re
import json

def check_file_exists(path):
    return os.path.exists(path)

def get_word_count(text):
    # Remove HTML tags for word count
    clean_text = re.sub('<[^<]+?>', '', text)
    words = clean_text.split()
    return len(words)

def check_no_em_dashes(text):
    return '—' not in text

def check_schema(text, schema_type):
    return f'"@type": "{schema_type}"' in text or f"'@type': '{schema_type}'" in text

def count_faqs(text):
    # This is a rough check based on common patterns in the codebase
    # Looking for the faqs array or the schema
    matches = re.findall(r'"@type": "Question"', text)
    if not matches:
        matches = re.findall(r"'@type': 'Question'", text)
    return len(matches)

def count_reviews(text):
    matches = re.findall(r'"@type": "Review"', text)
    if not matches:
        matches = re.findall(r"'@type': 'Review'", text)
    return len(matches)

def validate_page():
    page_path = 'NewCS/src/app/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court/page.tsx'
    client_path = 'NewCS/src/app/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court/LOCClient.tsx'
    footer_path = 'NewCS/src/components/Footer.tsx'
    
    results = []
    
    # 1. Check if files exist
    if not check_file_exists(page_path):
        results.append(f"FAILED: {page_path} does not exist")
    else:
        results.append(f"PASSED: {page_path} exists")
        
    if not check_file_exists(client_path):
        results.append(f"FAILED: {client_path} does not exist")
    else:
        results.append(f"PASSED: {client_path} exists")

    # 2. Check content (Word Count)
    content = ""
    if check_file_exists(page_path):
        with open(page_path, 'r') as f:
            content += f.read()
    if check_file_exists(client_path):
        with open(client_path, 'r') as f:
            content += f.read()
            
    word_count = get_word_count(content)
    if word_count >= 3000:
        results.append(f"PASSED: Word count is {word_count} (>= 3000)")
    else:
        results.append(f"FAILED: Word count is {word_count} (< 3000)")

    # 3. Check for em dashes
    if check_no_em_dashes(content):
        results.append("PASSED: No em dashes found")
    else:
        results.append("FAILED: Em dashes found")

    # 4. Check Schema
    schemas = ['Article', 'FAQPage', 'Review', 'BreadcrumbList']
    for schema in schemas:
        if check_schema(content, schema):
            results.append(f"PASSED: {schema} schema found")
        else:
            results.append(f"FAILED: {schema} schema missing")

    # 5. Check FAQ count
    faq_count = count_faqs(content)
    if faq_count >= 10:
        results.append(f"PASSED: FAQ count is {faq_count} (>= 10)")
    else:
        results.append(f"FAILED: FAQ count is {faq_count} (< 10)")

    # 6. Check Review count
    review_count = count_reviews(content)
    if review_count >= 5:
        results.append(f"PASSED: Review count is {review_count} (>= 5)")
    else:
        results.append(f"FAILED: Review count is {review_count} (< 5)")

    # 7. Check Footer integration
    if check_file_exists(footer_path):
        with open(footer_path, 'r') as f:
            footer_content = f.read()
            if '/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court' in footer_content:
                results.append("PASSED: Page linked in footer")
            else:
                results.append("FAILED: Page not linked in footer")

    print("\n".join(results))

if __name__ == "__main__":
    validate_page()
