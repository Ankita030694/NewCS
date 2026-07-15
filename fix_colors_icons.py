import re

filepath = "/Users/amalegalsolutions/Desktop/AMAWORK/credsettlefigma/credsettle/src/app/settle-5-lakh-personal-loan/Settle5LakhClient.tsx"

with open(filepath, 'r') as f:
    content = f.read()

# Replace all text colors with text-black
colors_to_replace = [
    r'text-gray-\d{3}',
    r'text-\[rgba\(12,39,86,0\.70\)\]',
    r'text-\[#0C2756\]',
    r'text-\[#1A1A1A\]',
    r'text-\[#081B3C\]'
]

for pattern in colors_to_replace:
    content = re.sub(pattern, 'text-black', content)

# Also ensure bg colors that are specific are left alone unless user asked. The user only asked for text color.

# Remove the tick icons. The tick icons are:
# <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
tick_icon_pattern = r'<svg[^>]*text-green-500[^>]*>.*?d="M5 13l4 4L19 7".*?</svg>'
content = re.sub(tick_icon_pattern, '', content, flags=re.DOTALL)

# Let's also check if there are any other tick icons like the gray chevron just in case they meant the breadcrumb.
# No, "tick" universally means checkmark. The breadcrumb is a chevron (>). We'll leave the breadcrumb alone.

with open(filepath, 'w') as f:
    f.write(content)

print("Updated Settle5LakhClient.tsx")
