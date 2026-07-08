import re

files_to_check = [
    "src/app/personal-loan-settlement/page.tsx",
    "src/app/personal-loan-settlement/PersonalLoanSettlementClient.tsx"
]

total_words = 0
em_dash_found = False

for file_path in files_to_check:
    with open(file_path, "r") as f:
        content = f.read()
        
        # Check for em dashes or double hyphens
        if "—" in content or "--" in content:
            print(f"ERROR: Em dash or double hyphen found in {file_path}")
            em_dash_found = True
            
        # Count words (stripping HTML tags roughly)
        text_only = re.sub('<[^<]+>', ' ', content)
        words = re.findall(r'\b\w+\b', text_only)
        total_words += len(words)

print(f"Total words: {total_words}")
if not em_dash_found:
    print("SUCCESS: No em dashes or double hyphens found.")
