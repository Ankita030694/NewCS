import os
import re

app_dir = 'src/app'
excluded_dirs = {'api', 'services', 'resources', 'auth', 'login', 'authority', 'delete-your-app-account', 'nullify', 'success', 'thank-you', 'manifest.webmanifest', 'sitemap.xml', 'about', 'contact'}

def get_page_info(directory):
    page_path = os.path.join(app_dir, directory, 'page.tsx')
    if not os.path.exists(page_path):
        return None
    
    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Try to find metadata title
    title_match = re.search(r'title:\s*["\']([^"\']+)["\']', content)
    if not title_match:
        # Try H1
        title_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    
    if title_match:
        full_title = title_match.group(1).strip()
        # Clean up tags if any
        full_title = re.sub(r'<[^>]+>', '', full_title)
        
        # Shorten to 3-5 words
        words = full_title.split()
        short_title = " ".join(words[:5]) # Taking 5 words for a good "brief"
        if len(words) > 5:
            short_title += "..." # Optional: adding ellipsis or not? User didn't specify, but "brief" usually implies it. 
            # Actually user said "just 3 to 5 words of shortened title", I'll keep it to 5 words exactly.
        
        # Get modification time
        mtime = os.path.getmtime(os.path.join(app_dir, directory))
        
        return {
            'slug': f'/{directory}',
            'title': short_title,
            'mtime': mtime
        }
    return None

def main():
    pages = []
    for entry in os.listdir(app_dir):
        if os.path.isdir(os.path.join(app_dir, entry)) and entry not in excluded_dirs and not entry.startswith('[') and not entry.startswith('(') and not entry.startswith('_'):
            info = get_page_info(entry)
            if info:
                pages.append(info)
    
    # Sort by modification time (latest at the bottom)
    pages.sort(key=lambda x: x['mtime'])
    
    with open('all_links.txt', 'w', encoding='utf-8') as f:
        for page in pages:
            link = f'              <a href="{page["slug"]}" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">{page["title"]}</a>\n'
            f.write(link)

if __name__ == '__main__':
    main()
