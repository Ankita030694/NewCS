import os
import re

PAGE_DIR = "/Users/amalegalsolutions/Desktop/AMAWORK/credsettlefigma/credsettle/src/app/settle-5-lakh-personal-loan"
CLIENT_FILE = os.path.join(PAGE_DIR, "Settle5LakhClient.tsx")
SERVER_FILE = os.path.join(PAGE_DIR, "page.tsx")

with open(CLIENT_FILE, 'r') as f:
    client_content = f.read()

with open(SERVER_FILE, 'r') as f:
    server_content = f.read()

# 1. Word count in Client
import xml.etree.ElementTree as ET
# Stripping HTML tags roughly to count words
clean_html = re.sub(r'<[^>]+>', ' ', client_content)
words = clean_html.split()
print(f"Word count: {len(words)}")

# 2. Em-dash check
if "—" in client_content or "--" in client_content:
    print("FAIL: Em-dash found in client content.")
else:
    print("PASS: No em-dashes in client content.")
    
if "—" in server_content or "--" in server_content:
    print("FAIL: Em-dash found in server content.")
else:
    print("PASS: No em-dashes in server content.")

# 3. Meta title and description length
title_match = re.search(r'title:\s*"([^"]+)"', server_content)
desc_match = re.search(r'description:\s*"([^"]+)"', server_content)

if title_match:
    title = title_match.group(1)
    print(f"Title length: {len(title)} (Must be < 60)")
else:
    print("Title not found")

if desc_match:
    desc = desc_match.group(1)
    print(f"Description length: {len(desc)} (Must be 140-160)")
else:
    print("Description not found")

# 4. H1 Length
h1_match = re.search(r'<h1[^>]*>([\s\S]*?)</h1>', client_content)
if h1_match:
    h1_text = re.sub(r'<[^>]+>', '', h1_match.group(1)).strip()
    h1_text = re.sub(r'\s+', ' ', h1_text)
    print(f"H1 length: {len(h1_text)} (Must be < 60)")
    print(f"H1: {h1_text}")

# 5. Internal Links count
links = [
    "/what-percentage-do-banks-accept-in-loan-settlement",
    "/what-is-the-average-timeframe-for-completing-a-loan-settlement-process",
    "/how-to-improve-cibil-score-after-loan-settlement"
]
for link in links:
    if link in client_content:
        print(f"PASS: Link {link} found.")
    else:
        print(f"FAIL: Link {link} NOT found.")

# 6. Author image
if "/anujbhiya.png" in client_content and "/anujbhiya.png" in server_content:
    print("PASS: Author image /anujbhiya.png found in both files.")
else:
    print("FAIL: Author image missing.")
