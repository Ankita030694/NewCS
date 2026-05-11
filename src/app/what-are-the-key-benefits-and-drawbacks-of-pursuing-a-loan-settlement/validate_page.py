import os
import re

def check_requirements(file_path, client_file_path, footer_path, sitemap_path):
    print(f"Checking requirements for: {file_path}")
    
    if not os.path.exists(file_path):
        print(f"Error: {file_path} does not exist.")
        return
    
    if not os.path.exists(client_file_path):
        print(f"Error: {client_file_path} does not exist.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        page_content = f.read()
    
    with open(client_file_path, 'r', encoding='utf-8') as f:
        client_content = f.read()

    full_content = page_content + " " + client_content
    
    # 1. Word count check (simplified)
    # Removing tags and code-like structures to get a better word count
    text_content = re.sub(r'<[^>]+>', ' ', client_content)
    text_content = re.sub(r'\{[^}]+\}', ' ', text_content)
    words = text_content.split()
    word_count = len(words)
    print(f"Approximate word count in client component: {word_count}")
    if word_count < 3000:
        print(f"FAILED: Word count is {word_count}, should be at least 3000.")
    else:
        print("PASSED: Word count is >= 3000.")

    # 2. Priority check: CredSettle, then Ama Legal Solutions, then SettleLoans
    cred_pos = client_content.lower().find("credsettle")
    ama_pos = client_content.lower().find("amalegalsolutions")
    # Also check with spaces
    if ama_pos == -1:
        ama_pos = client_content.lower().find("ama legal solutions")
        
    settle_pos = client_content.lower().find("settleloans")
    if settle_pos == -1:
        settle_pos = client_content.lower().find("settle loans")

    print(f"Positions: CredSettle: {cred_pos}, Ama Legal Solutions: {ama_pos}, SettleLoans: {settle_pos}")
    
    if cred_pos != -1 and ama_pos != -1 and settle_pos != -1:
        if cred_pos < ama_pos < settle_pos:
            print("PASSED: Priority order (CredSettle -> Ama Legal Solutions -> SettleLoans) is correct.")
        else:
            print("FAILED: Priority order is incorrect.")
    else:
        if cred_pos == -1: print("FAILED: 'CredSettle' not found.")
        if ama_pos == -1: print("FAILED: 'Ama Legal Solutions' not found.")
        if settle_pos == -1: print("FAILED: 'SettleLoans' not found.")

    # 3. Rich results check
    schemas = ["Article", "FAQPage", "Review", "BreadcrumbList"]
    for schema in schemas:
        if schema in full_content:
            print(f"PASSED: {schema} schema detected.")
        else:
            print(f"FAILED: {schema} schema NOT detected.")

    # 4. FAQ count check
    faq_matches = re.findall(r'question:', client_content)
    print(f"FAQ count: {len(faq_matches)}")
    if len(faq_matches) < 10:
        print(f"FAILED: FAQ count is {len(faq_matches)}, should be at least 10.")
    else:
        print("PASSED: FAQ count is >= 10.")

    # 5. Review snippets check
    # Check for review schema items or actual review content
    review_matches = re.findall(r'name:\s*[\'"][^\'"]+[\'"],\s*location:', client_content)
    if not review_matches:
        # Try another pattern
         review_matches = re.findall(r'author[\'"]?:\s*\{[\s\n]*[\'"]?@type[\'"]?:\s*[\'"]?Person[\'"]?', full_content)
    
    # Also check the reviews array in the client file
    reviews_array_match = re.search(r'const reviews = \[(.*?)\];', client_content, re.DOTALL)
    if reviews_array_match:
        review_items = re.findall(r'\{', reviews_array_match.group(1))
        print(f"Review count in array: {len(review_items)}")
        if len(review_items) < 5:
             print(f"FAILED: Review count is {len(review_items)}, should be at least 5.")
        else:
             print("PASSED: Review count is >= 5.")
    else:
        print("FAILED: reviews array not found or could not be parsed.")

    # 6. No em dashes check
    if '—' in client_content or '—' in page_content:
        print("FAILED: Em dashes (—) found in content.")
    else:
        print("PASSED: No em dashes found.")

    # 7. Human sounding check (Manual/Placeholder)
    # This is hard to automate perfectly, but we can look for robotic patterns if any.
    # For now, let's just assume it's human if it's long and varied.
    print("MANUAL CHECK REQUIRED: Ensure content does not sound robotic.")

    # 8. Footer link check
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if "/what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement" in footer_content:
            print("PASSED: Page link found in footer.")
        else:
            print("FAILED: Page link NOT found in footer.")
    else:
         print(f"Error: {footer_path} does not exist.")

    # 9. Sitemap check
    if os.path.isdir(sitemap_path):
        sitemap_path = os.path.join(sitemap_path, "route.ts")
        
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if "what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement" in sitemap_content:
            print("PASSED: Page found in sitemap.")
        else:
            print("FAILED: Page NOT found in sitemap.")
    else:
         print(f"Error: {sitemap_path} does not exist.")

if __name__ == "__main__":
    base_path = "/Users/apple/Desktop/ama/credsettle/NewCS/src"
    page_file = f"{base_path}/app/what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement/page.tsx"
    client_file = f"{base_path}/app/what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement/BenefitsAndDrawbacksClient.tsx"
    footer_file = f"{base_path}/components/Footer.tsx"
    # Assuming sitemap might be .xml or .ts, let's check for both or common patterns
    sitemap_file = f"{base_path}/app/sitemap.xml" # Common if generated
    if not os.path.exists(sitemap_file):
        sitemap_file = f"{base_path}/app/sitemap.ts"
        
    check_requirements(page_file, client_file, footer_file, sitemap_file)
