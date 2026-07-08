import os

replacements = {
    "/anujbhiya.png": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
    "Anuj Bhiya": "Rohan Sharma",
    "Senior SEO Specialist & Financial Strategist": "Senior Legal Advocate & Financial Strategist"
}

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
            replace_in_file(os.path.join(root, file))

