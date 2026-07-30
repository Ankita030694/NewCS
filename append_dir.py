import os
dir_path = "/Users/piyushmishra/Desktop/NEWCS/NewCS"
directories_file = os.path.join(dir_path, "directories.txt")
slug = "/steps-to-repair-your-cibil-score-after-taking-an-urgent-loan"

with open(directories_file, "a") as f:
    f.write(slug + "\n")
