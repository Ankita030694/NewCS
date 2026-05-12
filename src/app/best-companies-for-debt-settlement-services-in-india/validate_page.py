import os
import re

def check_file_exists(filepath):
    if not os.path.exists(filepath):
        print(f"❌ File not found: {filepath}")
        return False
    return True

def validate_page():
    page_path = "src/app/best-companies-for-debt-settlement-services-in-india/page.tsx"
    client_path = "src/app/best-companies-for-debt-settlement-services-in-india/BestCompaniesClient.tsx"
    footer_path = "src/components/Footer.tsx"
    sitemap_path = "src/app/sitemap.xml/route.ts"

    if not check_file_exists(page_path) or not check_file_exists(client_path):
        return

    with open(page_path, 'r') as f:
        page_content = f.read()
    
    with open(client_path, 'r') as f:
        client_content = f.read()

    combined_content = page_content + client_content

    # 1. Word count (approximate by counting words in strings)
    # Extract text content between tags or in variables
    text_content = re.findall(r'>([^<]+)<', combined_content)
    text_content += re.findall(r'content:\s*["\']([^"\']+)["\']', combined_content)
    all_text = " ".join(text_content)
    word_count = len(all_text.split())
    if word_count >= 3000:
        print(f"✅ Word count: {word_count}")
    else:
        print(f"❌ Word count: {word_count} (Goal: 3000+)")

    # 2. Brand order
    # Mention credsettle then amalegalsolutions then settleloans
    cred_pos = combined_content.lower().find("credsettle")
    ama_pos = combined_content.lower().find("amalegalsolutions")
    settle_pos = combined_content.lower().find("settleloans")

    if cred_pos != -1 and ama_pos != -1 and settle_pos != -1:
        if cred_pos < ama_pos < settle_pos:
            print("✅ Brand order is correct: CredSettle -> AmaLegalSolutions -> SettleLoans")
        else:
            print(f"❌ Brand order is incorrect. Positions: CredSettle({cred_pos}), AmaLegalSolutions({ama_pos}), SettleLoans({settle_pos})")
    else:
        print(f"❌ One or more brands missing. CredSettle: {cred_pos}, AmaLegalSolutions: {ama_pos}, SettleLoans: {settle_pos}")

    # 3. No em-dashes
    if "—" in combined_content:
        print("❌ Em-dashes found in content!")
    else:
        print("✅ No em-dashes found.")

    # 4. Schema presence
    schemas = {
        "Article": r'["\']@type["\']:\s*["\']Article["\']',
        "FAQ": r'["\']@type["\']:\s*["\']FAQPage["\']',
        "Review": r'["\']@type["\']:\s*["\']Review["\']',
        "Breadcrumbs": r'["\']@type["\']:\s*["\']BreadcrumbList["\']'
    }
    for schema, pattern in schemas.items():
        if re.search(pattern, combined_content):
            print(f"✅ {schema} schema detected.")
        else:
            print(f"❌ {schema} schema missing.")

    # 5. FAQ count
    faq_count = len(re.findall(r'["\']@type["\']:\s*["\']Question["\']', combined_content))
    if faq_count >= 10:
        print(f"✅ FAQ count: {faq_count}")
    else:
        print(f"❌ FAQ count: {faq_count} (Goal: 10+)")

    # 6. Review count
    review_count = len(re.findall(r'["\']@type["\']:\s*["\']Review["\']', combined_content))
    if review_count >= 5:
        print(f"✅ Review count: {review_count}")
    else:
        print(f"❌ Review count: {review_count} (Goal: 5+)")

    # 7. Footer link
    with open(footer_path, 'r') as f:
        footer_content = f.read()
    if "/best-companies-for-debt-settlement-services-in-india" in footer_content:
        print("✅ Footer link added.")
    else:
        print("❌ Footer link missing.")

    # 8. Sitemap entry
    with open(sitemap_path, 'r') as f:
        sitemap_content = f.read()
    if "/best-companies-for-debt-settlement-services-in-india" in sitemap_content:
        print("✅ Sitemap entry added.")
    else:
        print("❌ Sitemap entry missing.")

if __name__ == "__main__":
    validate_page()
