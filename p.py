import os

directory = "media/sports"

files = os.listdir(directory)

all_files = []
for file in files:
    all_files.append(file)

print(all_files)