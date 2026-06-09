import os
import re

def get_all_routes(src_app_dir):
    routes = set()
    routes.add('/') # Home page
    for root, dirs, files in os.walk(src_app_dir):
        if 'page.tsx' in files or 'route.ts' in files:
            # Calculate the route path
            rel_path = os.path.relpath(root, src_app_dir)
            if rel_path == '.':
                continue
            # Next.js route conversion
            parts = rel_path.split(os.sep)
            route_parts = []
            for part in parts:
                if part.startswith('(') and part.endswith(')'):
                    # Route group, ignore in path
                    continue
                if part.startswith('[') and part.endswith(']'):
                    # Dynamic route
                    route_parts.append('*')
                    continue
                route_parts.append(part)
            route = '/' + '/'.join(route_parts)
            routes.add(route.lower())
    return routes

def scan_files_for_links(src_dir):
    # Regex to find links in href attributes
    # Look for href="/something" or href={'/something'}
    link_pattern = re.compile(r'href=["\'](/?[\w\-\/]*)["\']|href=\{\s*["\'](/?[\w\-\/]*)["\']\s*\}')
    
    file_links = {}
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    
                links = []
                for match in link_pattern.finditer(content):
                    link = match.group(1) or match.group(2)
                    if link:
                        links.append(link)
                if links:
                    file_links[file_path] = links
    return file_links

def main():
    src_dir = 'src'
    src_app_dir = os.path.join(src_dir, 'app')
    
    print("Collecting all valid routes in app directory...")
    valid_routes = get_all_routes(src_app_dir)
    print(f"Found {len(valid_routes)} valid routes:")
    for r in sorted(valid_routes):
        print(f"  - {r}")
        
    print("\nScanning files for internal links...")
    file_links = scan_files_for_links(src_dir)
    
    broken_links = []
    
    for file_path, links in file_links.items():
        # Don't check sitemap files as they contain dynamic links generator code
        if 'sitemap' in file_path or 'route.ts' in file_path:
            continue
        for link in links:
            # We only care about internal relative links starting with /
            if not link.startswith('/'):
                continue
            
            # Remove hash and query params
            clean_link = link.split('#')[0].split('?')[0]
            if not clean_link:
                continue
            
            clean_link_lower = clean_link.lower().rstrip('/')
            if not clean_link_lower:
                clean_link_lower = '/'
                
            # Check if this route exists
            is_valid = False
            if clean_link_lower in valid_routes:
                is_valid = True
            else:
                # Check dynamic matching
                for r in valid_routes:
                    if '*' in r:
                        # Convert route wildcard to regex
                        pattern = '^' + r.replace('*', '[^/]+') + '$'
                        if re.match(pattern, clean_link_lower):
                            is_valid = True
                            break
            
            if not is_valid:
                broken_links.append((file_path, link, clean_link))
                
    if broken_links:
        print(f"\nFound {len(broken_links)} broken links:")
        for file_path, original_link, clean_link in broken_links:
            # Get relative file path for clean display
            rel_file = os.path.relpath(file_path, os.getcwd())
            print(f"  File: {rel_file}")
            print(f"    Link: {original_link} (Cleaned: {clean_link})")
    else:
        print("\nNo broken links found!")

if __name__ == '__main__':
    main()
