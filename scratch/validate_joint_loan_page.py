import os
import re
import xml.etree.ElementTree as ET

def check_requirements():
    base_path = "/Users/apple/Desktop/ama/credsettle/NewCS"
    page_dir = os.path.join(base_path, "src/app/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers")
    client_file = os.path.join(page_dir, "JointLoanSettlementClient.tsx")
    server_file = os.path.join(page_dir, "page.tsx")
    footer_file = os.path.join(base_path, "src/components/Footer.tsx")
    sitemap_file = os.path.join(base_path, "src/app/sitemap.xml")

    errors = []

    # 1. Check if files exist
    if not os.path.exists(page_dir):
        errors.append(f"Directory {page_dir} does not exist.")
        return errors
    
    if not os.path.exists(client_file):
        errors.append(f"Client file {client_file} does not exist.")
    if not os.path.exists(server_file):
        errors.append(f"Server file {server_file} does not exist.")

    if errors:
        return errors

    with open(client_file, 'r', encoding='utf-8') as f:
        client_content = f.read()
    
    with open(server_file, 'r', encoding='utf-8') as f:
        server_content = f.read()

    full_content = client_content + server_content

    # 2. Word count check (approximate by splitting on whitespace)
    # Removing code/tags for better accuracy
    text_content = re.sub(r'<[^>]+>', ' ', full_content)
    word_count = len(text_content.split())
    if word_count < 3000:
        errors.append(f"Word count is {word_count}, which is less than 3000.")
    else:
        print(f"✓ Word count: {word_count}")

    # 3. Keywords order: credsettle, amalegalsolutions, settleloans
    # Case insensitive search
    pos1 = full_content.lower().find("credsettle")
    pos2 = full_content.lower().find("amalegalsolutions")
    pos3 = full_content.lower().find("settleloans")

    if pos1 == -1: errors.append("Keyword 'credsettle' not found.")
    if pos2 == -1: errors.append("Keyword 'amalegalsolutions' not found.")
    if pos3 == -1: errors.append("Keyword 'settleloans' not found.")

    if pos1 != -1 and pos2 != -1 and pos3 != -1:
        if not (pos1 < pos2 < pos3):
            errors.append(f"Keywords are not in order: credsettle({pos1}), amalegalsolutions({pos2}), settleloans({pos3})")
        else:
            print("✓ Keywords order: OK")

    # 4. No em dashes
    if "—" in full_content:
        errors.append("Em dash (—) found in content.")
    else:
        print("✓ No em dashes: OK")

    # 5. Schema checks
    if '"@type": "Article"' not in full_content: errors.append("Article schema missing.")
    if '"@type": "FAQPage"' not in full_content: errors.append("FAQ schema missing.")
    if '"@type": "Review"' not in full_content and '"review": [' not in full_content: errors.append("Review schema missing.")
    if '"@type": "BreadcrumbList"' not in full_content: errors.append("Breadcrumb schema missing.")
    
    # 6. FAQ count
    faq_matches = re.findall(r'"@type":\s*"Question"', full_content)
    if len(faq_matches) < 10:
        errors.append(f"FAQ count is {len(faq_matches)}, expected at least 10.")
    else:
        print(f"✓ FAQ count: {len(faq_matches)}")

    # 7. Review count
    # Counting review objects in the schema or snippets
    review_matches = re.findall(r'"@type":\s*"Review"', full_content)
    if len(review_matches) < 5:
        errors.append(f"Review count is {len(review_matches)}, expected at least 5.")
    else:
        print(f"✓ Review count: {len(review_matches)}")

    # 8. Footer link
    with open(footer_file, 'r', encoding='utf-8') as f:
        footer_content = f.read()
    if "/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers" not in footer_content:
        errors.append("Link missing in Footer.")
    else:
        print("✓ Footer link: OK")

    # 9. Sitemap check
    with open(sitemap_file, 'r', encoding='utf-8') as f:
        sitemap_content = f.read()
    if "is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers" not in sitemap_content:
        errors.append("URL missing in sitemap.xml")
    else:
        print("✓ Sitemap entry: OK")

    return errors

if __name__ == "__main__":
    results = check_requirements()
    if not results:
        print("\nALL CHECKS PASSED!")
    else:
        print("\nERRORS FOUND:")
        for err in results:
            print(f"x {err}")
