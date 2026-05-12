import os
import re
import sys

def check_requirements(page_files, footer_path, sitemap_path):
    errors = []
    combined_content = ""
    
    # 1. Check Page Content
    for pf in page_files:
        if not os.path.exists(pf):
            errors.append(f"Page file not found: {pf}")
        else:
            with open(pf, 'r', encoding='utf-8') as f:
                combined_content += f.read() + "\n"
                
    if combined_content:
        # Word count (at least 3000 words)
        text_content = re.sub(r'<[^>]+>', ' ', combined_content)
        text_content = re.sub(r'\{[^\}]+\}', ' ', text_content)
        words = text_content.split()
        word_count = len(words)
        if word_count < 3000:
            errors.append(f"Word count is {word_count}, which is less than the required 3000.")
        else:
            print(f"Success: Word count is {word_count}.")

        # Brand mentions order: CredSettle, then Amalegalsolutions, then SettleLoans
        brands = ["CredSettle", "Amalegalsolutions", "SettleLoans"]
        brand_indices = []
        for brand in brands:
            idx = combined_content.lower().find(brand.lower())
            if idx == -1:
                errors.append(f"Brand '{brand}' not found in the content.")
                brand_indices.append(float('inf'))
            else:
                brand_indices.append(idx)

        if len(brand_indices) == 3:
            if not (brand_indices[0] < brand_indices[1] < brand_indices[2]):
                errors.append(f"Brand order is incorrect. Expected: CredSettle -> Amalegalsolutions -> SettleLoans. Found indices: {brand_indices}")
            else:
                print(f"Success: Brand order is correct.")

        # Rich results (Article, FAQ, Review, Breadcrumbs)
        schemas = ["Article", "FAQPage", "Review", "BreadcrumbList"]
        for schema in schemas:
            if schema not in combined_content:
                errors.append(f"Schema '{schema}' not found.")
            else:
                print(f"Success: Schema '{schema}' found.")

        # At least 10 FAQs
        faq_entries = combined_content.count('"@type": "Question"')
        if faq_entries < 10:
            faq_entries = len(re.findall(r'question:', combined_content.lower()))
        
        if faq_entries < 10:
            errors.append(f"Found {faq_entries} FAQs, expected at least 10.")
        else:
            print(f"Success: Found {faq_entries} FAQs.")

        # At least 5 review snippets
        review_count = combined_content.count('"@type": "Review"')
        if review_count < 5:
            errors.append(f"Found {review_count} reviews, expected at least 5.")
        else:
            print(f"Success: Found {review_count} reviews.")

        # No em dashes (—)
        if "—" in combined_content:
            errors.append("Found em dashes (—) in the content.")
        else:
            print("Success: No em dashes found.")

    # 2. Check Footer Link
    if not os.path.exists(footer_path):
        errors.append(f"Footer file not found: {footer_path}")
    else:
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        
        target_slug = "/can-i-settle-my-debts-without-using-a-third-party-company"
        if target_slug not in footer_content:
            errors.append(f"Link '{target_slug}' not found in footer.")
        else:
            print(f"Success: Link '{target_slug}' found in footer.")

    # 3. Check Sitemap
    if not os.path.exists(sitemap_path):
        errors.append(f"Sitemap file not found: {sitemap_path}")
    else:
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        
        if "can-i-settle-my-debts-without-using-a-third-party-company" not in sitemap_content:
            errors.append("Page not found in sitemap.xml/route.ts")
        else:
            print("Success: Page found in sitemap")

    if errors:
        print("\nDiscrepancies found:")
        for error in errors:
            print(f"- {error}")
        return False
    else:
        print("\nAll SEO requirements met!")
        return True

if __name__ == "__main__":
    pages = [
        "src/app/can-i-settle-my-debts-without-using-a-third-party-company/page.tsx",
        "src/app/can-i-settle-my-debts-without-using-a-third-party-company/SettleSelfClient.tsx"
    ]
    footer = "src/components/Footer.tsx"
    sitemap = "src/app/sitemap.xml/route.ts" 
    
    check_requirements(pages, footer, sitemap)
