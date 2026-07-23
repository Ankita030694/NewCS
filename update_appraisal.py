import os

# Update directories.txt
with open("directories.txt", "a") as f:
    f.write("what-is-credit-appraisal\n")

# Update sitemap
sitemap_path = "src/app/sitemap.xml/route.ts"
with open(sitemap_path, "r") as f:
    content = f.read()

new_sitemap_entry = """
  urls.push({
    loc: `${baseUrl}/what-is-credit-appraisal`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });
"""
if new_sitemap_entry not in content:
    content = content.replace("  return urls;", new_sitemap_entry + "\n  return urls;")
    with open(sitemap_path, "w") as f:
        f.write(content)

print("Updated directories.txt and route.ts")
