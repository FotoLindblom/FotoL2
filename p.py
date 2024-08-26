import os

directory = "media/sports/mid-res"

files = os.listdir(directory)

all_files_list = []
for file in files:
    all_files_list.append(file)
all_files_list.reverse()

all_files_dict = {}
for file in all_files_list:
    if file.split('-')[0] in all_files_dict:
        all_files_dict[file.split('-')[0]].append(file)
    else:
        all_files_dict[file.split('-')[0]] = [file]

print(all_files_dict)