import os
from datetime import datetime

# Update sitemap.xml
SITEMAP_PATH = "src/app/sitemap.xml"
try:
    with open(SITEMAP_PATH, "r") as f:
        sitemap_content = f.read()
    
    new_url = f"""
    <url>
        <loc>https://www.credsettle.com/settle-10-lakh-personal-loan</loc>
        <lastmod>{datetime.today().strftime('%Y-%m-%d')}</lastmod>
        <priority>0.8</priority>
    </url>
</urlset>"""
    
    if "settle-10-lakh-personal-loan" not in sitemap_content:
        sitemap_content = sitemap_content.replace("</urlset>", new_url)
        with open(SITEMAP_PATH, "w") as f:
            f.write(sitemap_content)
        print("sitemap.xml updated.")
except Exception as e:
    print(f"Failed to update sitemap: {e}")

# Update Footer.tsx
FOOTER_PATH = "src/components/Footer.tsx"
try:
    with open(FOOTER_PATH, "r") as f:
        footer_content = f.read()
    
    # We want to add it to the Queries section. We'll search for the Queries section and append the link.
    if "settle-10-lakh-personal-loan" not in footer_content:
        # Looking for a known link in the Queries section to append after
        # For example, if there's a list of links, we can insert it.
        # Let's just find the first </Link> under Queries. We'll use a regex.
        import re
        # Find where the Queries column is by looking for its title or a known link
        if "Queries" in footer_content:
            pass
            # It might be safer to use AST or just a simple string replacement.
            # Let's append it right before the closing </ul> of the Queries section.
            
        print("Please update Footer manually or write a safer regex")
except Exception as e:
    print(f"Failed to update Footer: {e}")
