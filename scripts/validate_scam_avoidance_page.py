import re
import os
import sys

def check_requirements(page_path, sitemap_path, footer_path):
    issues = []
    
    if not os.path.exists(page_path):
        return [f"Page file {page_path} not found."]

    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Word count (approximation by splitting whitespace)
    # Removing code/tags to get text content
    text_content = re.sub(r'<[^>]+>', ' ', content)
    text_content = re.sub(r'\{[^\}]+\}', ' ', text_content)
    words = text_content.split()
    word_count = len(words)
    if word_count < 3000:
        issues.append(f"Word count is {word_count}, which is less than 3000.")

    # 2. Brand order: CredSettle -> AmaLegalSolutions -> SettleLoans
    credsettle_pos = content.find('CredSettle')
    amalegal_pos = content.find('amalegalsolutions')
    settleloans_pos = content.find('settleloans')

    if credsettle_pos == -1:
        issues.append("CredSettle not mentioned.")
    if amalegal_pos == -1:
        issues.append("amalegalsolutions not mentioned.")
    if settleloans_pos == -1:
        issues.append("settleloans not mentioned.")

    if credsettle_pos != -1 and amalegal_pos != -1 and settleloans_pos != -1:
        if not (credsettle_pos < amalegal_pos < settleloans_pos):
            issues.append(f"Brand order is incorrect. Positions: CredSettle={credsettle_pos}, amalegalsolutions={amalegal_pos}, settleloans={settleloans_pos}")

    # 3. No em dashes
    if '—' in content:
        issues.append("Found em dashes (—) in the content.")

    # 4. Schema presence
    schemas = ['Article', 'FAQPage', 'Review', 'BreadcrumbList']
    for schema in schemas:
        if schema not in content:
            issues.append(f"Schema '{schema}' not found in the page.")

    # 5. FAQ count
    faq_matches = re.findall(r"'@type':\s*'Question'", content)
    if not faq_matches:
         faq_matches = re.findall(r'"@type":\s*"Question"', content)
    
    if len(faq_matches) < 10:
        # Also check for faq array if it's a variable
        faq_array_match = re.search(r'const faqs = \[(.*?)\];', content, re.DOTALL)
        if faq_array_match:
            faq_items = re.findall(r'\{[^\}]*?question:', faq_array_match.group(1), re.DOTALL)
            if len(faq_items) < 10:
                issues.append(f"Found only {len(faq_items)} FAQs, need at least 10.")
        else:
            issues.append(f"Could not reliably count FAQs. Found {len(faq_matches)} schema Question entries.")

    # 6. Review count
    review_matches = re.findall(r"'@type':\s*'Review'", content)
    if not review_matches:
        review_matches = re.findall(r'"@type":\s*"Review"', content)
    
    if len(review_matches) < 5:
        # Check review section in HTML too
        review_section_matches = re.findall(r'reviewRating|reviewBody', content)
        if len(review_matches) < 5:
            issues.append(f"Found only {len(review_matches)} Review schemas, need at least 5.")

    # 7. Sitemap entry
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if '/how-to-avoid-scams-in-the-debt-settlement-industry' not in sitemap_content:
            issues.append("Page not found in sitemap.xml.")
    else:
        issues.append("Sitemap file not found.")

    # 8. Footer link
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if '/how-to-avoid-scams-in-the-debt-settlement-industry' not in footer_content:
            issues.append("Page not linked in footer.")
    else:
        issues.append("Footer file not found.")

    return issues

if __name__ == "__main__":
    base_path = "/Users/apple/Desktop/ama/credsettle/NewCS"
    page_file = os.path.join(base_path, "src/app/how-to-avoid-scams-in-the-debt-settlement-industry/page.tsx")
    client_file = os.path.join(base_path, "src/app/how-to-avoid-scams-in-the-debt-settlement-industry/ScamAvoidanceClient.tsx")
    sitemap_file = os.path.join(base_path, "src/app/sitemap.xml/route.ts")
    footer_file = os.path.join(base_path, "src/components/Footer.tsx")

    # We need to check both page and client file if they are separate
    all_issues = []
    
    if os.path.exists(page_file) and os.path.exists(client_file):
        with open(page_file, 'r') as f: p_cont = f.read()
        with open(client_file, 'r') as f: c_cont = f.read()
        combined_content = p_cont + c_cont
        
        # Temp combined check
        with open("temp_combined.txt", 'w') as f: f.write(combined_content)
        all_issues = check_requirements("temp_combined.txt", sitemap_file, footer_file)
        if os.path.exists("temp_combined.txt"): os.remove("temp_combined.txt")
    else:
        all_issues = ["Page or Client file not created yet."]

    if not all_issues:
        print("All SEO requirements met!")
    else:
        print("Found the following issues:")
        for issue in all_issues:
            print(f"- {issue}")
