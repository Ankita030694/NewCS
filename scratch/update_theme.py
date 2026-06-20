import re

file_path = "src/app/authority/blogs/page.tsx"

with open(file_path, "r") as f:
    content = f.read()

# Replace gold/amber with CredSettle blues
replacements = [
    ("#B8860B", "#007AFF"),
    ("#9E7307", "#005FCC"),
    ("#D4AF37", "#007AFF"),
    ("amber-", "blue-"),
    ("from-amber-500", "from-[#007AFF]"),
    ("hover:from-amber-600", "hover:from-[#005FCC]"),
    ("to-[#B8860B]", "to-[#0C2756]"),
    ("hover:to-[#9E7307]", "hover:to-[#081c3e]"),
    ("emerald-", "indigo-"), # Just to shift the green AI to something else if needed, but emerald is fine. Let's change emerald to cyan for contrast, or keep emerald. Let's change it to blue as well. Actually, wait. "blue-" might clash if already used. 
]

for old, new in replacements:
    content = content.replace(old, new)

# Let's fix the emerald separately so it's not identical to the amber->blue conversion
content = content.replace("emerald-", "teal-")

with open(file_path, "w") as f:
    f.write(content)

print("Theme updated successfully!")
