import os

directory = "media/sports/mid-res"

files = os.listdir(directory)

all_files = []
for file in files:
    all_files.append(file)
all_files.reverse()

string=''
for i,file in enumerate(all_files):
    if i//5 - i/5 == 0:
        string+='\n'

    string+=f"'{file}',"

print(string)