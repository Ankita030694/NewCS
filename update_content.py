import re

client_file = "src/app/icici-credit-card-settlement/IciciCreditCardSettlementClient.tsx"
page_file = "src/app/icici-credit-card-settlement/page.tsx"

# 1. Update page.tsx (Author Name)
with open(page_file, "r") as f:
    page_content = f.read()
    
page_content = page_content.replace('Anuj Bhiya', 'Rohan Sharma')
with open(page_file, "w") as f:
    f.write(page_content)

# 2. Update Client file
with open(client_file, "r") as f:
    client_content = f.read()

# Change Name and Image
client_content = client_content.replace('Anuj Bhiya', 'Rohan Sharma')
client_content = client_content.replace('/anujbhiya.png', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg')

# Change font styles (remove italic, uppercase, tracking-tighter, font-light, tracking-wider, tracking-tight)
# We will use regex to replace whole words in class names
classes_to_remove = [r'\bitalic\b', r'\buppercase\b', r'\btracking-tighter\b', r'\bfont-light\b', r'\btracking-wider\b', r'\btracking-tight\b']
for cls in classes_to_remove:
    client_content = re.sub(cls, '', client_content)

# Clean up multiple spaces in class names that might result from the removals
client_content = re.sub(r'\s+', ' ', client_content) # Be careful with this, it might break formatting
# Actually better to just replace ' italic ' with ' ' etc.
