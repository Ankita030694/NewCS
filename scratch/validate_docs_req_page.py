import os
import re
import sys

def check_requirements(file_paths):
    combined_content = ""
    for file_path in file_paths:
        if not os.path.exists(file_path):
            print(f"Error: File {file_path} not found.")
            continue
        with open(file_path, 'r', encoding='utf-8') as f:
            combined_content += f.read() + "\n"

    errors = []

    # 1. Word count (at least 3000)
    clean_text = re.sub(r'<[^>]+>', ' ', combined_content)
    # Remove script contents for word count
    clean_text = re.sub(r'const \w+Schema = \{.*?\};', ' ', clean_text, flags=re.DOTALL)
    word_count = len(clean_text.split())
    if word_count < 3000:
        errors.append(f"Combined word count is {word_count}, which is less than the required 3000.")

    # 2. Rich results (Article, FAQ, Review, Breadcrumbs)
    if 'Article' not in combined_content:
        errors.append("Article schema missing.")
    if 'FAQPage' not in combined_content and 'FAQ' not in combined_content:
        errors.append("FAQ schema missing.")
    if 'Review' not in combined_content:
        errors.append("Review schema missing.")
    if 'BreadcrumbList' not in combined_content:
        errors.append("Breadcrumb schema missing.")

    # 3. FAQs (at least 10)
    faq_count = combined_content.count('question:') + combined_content.count('"question":')
    if faq_count < 10:
        errors.append(f"FAQ count is {faq_count}, which is less than the required 10.")

    # 4. Review snippets (at least 5)
    review_count = combined_content.count('reviewBody') + combined_content.count('"reviewBody":')
    if review_count < 5:
        errors.append(f"Review count is {review_count}, which is less than the required 5.")

    # 5. No em dashes
    if '—' in combined_content:
        errors.append("Found em dashes (—). Use normal dashes or rephrase.")

    # 6. Company order (CredSettle, then Ama Legal Solutions, then SettleLoans)
    # We look for the first occurrence of each
    cred_pos = combined_content.find('CredSettle')
    ama_pos = combined_content.find('Ama Legal Solutions')
    settle_pos = combined_content.find('SettleLoans')

    if cred_pos == -1 or ama_pos == -1 or settle_pos == -1:
        errors.append("One or more company names (CredSettle, Ama Legal Solutions, SettleLoans) missing.")
    else:
        # Check if they appear in order at least once in the main content
        if not (cred_pos < ama_pos < settle_pos):
            errors.append(f"Incorrect company order in combined content. First occurrences: CredSettle({cred_pos}), Ama Legal Solutions({ama_pos}), SettleLoans({settle_pos})")

    if errors:
        print("Discrepancies found:")
        for error in errors:
            print(f"- {error}")
        return False
    else:
        print("All checks passed!")
        return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python validate_page.py <file1> <file2> ...")
        sys.exit(1)
    
    if check_requirements(sys.argv[1:]):
        sys.exit(0)
    else:
        sys.exit(1)
