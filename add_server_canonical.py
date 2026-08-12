import os
import re

def main():
    directory = 'src/app'
    for root, _, files in os.walk(directory):
        for file in files:
            if file == 'page.tsx':
                filepath = os.path.join(root, file)
                route = root.replace('src/app', '').replace('\\', '/')
                if route == '': continue
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if 'canonical:' in content or '"canonical":' in content: continue
                if 'use client' in content or '"use client"' in content or "'use client'" in content: continue
                
                if '[' in route and ']' in route:
                    param_match = re.search(r'\[(.*?)\]', route)
                    if not param_match: continue
                    param_name = param_match.group(1)
                    template_route = route.replace(f'[{param_name}]', f'${{{param_name}}}')
                    
                    pattern = r'(export async function generateMetadata.*?return \{)'
                    replacement = r"\1\n    alternates: { canonical: `https://www.credsettle.com" + template_route + r"` },"
                    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
                    if new_content != content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Added dynamic canonical to {filepath}")
                else:
                    if 'export const metadata' in content:
                        pattern = r'(export const metadata[^=]*=\s*\{)'
                        replacement = r"\1\n  alternates: { canonical: 'https://www.credsettle.com" + route + r"' },"
                        new_content = re.sub(pattern, replacement, content)
                        if new_content != content:
                            with open(filepath, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            print(f"Added static canonical to {filepath}")
                    else:
                        import_stmt = "import { Metadata } from 'next';\n"
                        metadata_stmt = f"\nexport const metadata: Metadata = {{\n  alternates: {{ canonical: 'https://www.credsettle.com{route}' }},\n}};\n"
                        new_content = content
                        if "import { Metadata }" not in new_content and "import type { Metadata }" not in new_content:
                            new_content = import_stmt + new_content
                        
                        parts = new_content.split('export default')
                        if len(parts) > 1:
                            new_content = parts[0] + metadata_stmt + 'export default' + parts[1]
                            with open(filepath, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            print(f"Added new metadata with canonical to {filepath}")

if __name__ == '__main__':
    main()
