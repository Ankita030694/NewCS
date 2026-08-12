import os
import re

def fix_canonical():
    directory = 'src/app'
    count = 0
    for root, _, files in os.walk(directory):
        for file in files:
            if file == 'page.tsx':
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace canonical non-www with www
                if "canonical: 'https://credsettle.com" in content or 'canonical: "https://credsettle.com' in content:
                    new_content = content.replace(
                        "canonical: 'https://credsettle.com", 
                        "canonical: 'https://www.credsettle.com"
                    ).replace(
                        'canonical: "https://credsettle.com', 
                        'canonical: "https://www.credsettle.com'
                    )
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
    print(f"Fixed canonical tags in {count} files.")

if __name__ == '__main__':
    fix_canonical()
