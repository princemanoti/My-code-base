names = []

with open("names4.txt") as file:
    for line in file:
        names.append(line.rstrip())

for name in sorted(names):
    print(f"hello, {name}")
print()
    #Alternatively but for above remove line 9
with open("names4.txt") as file:
    for line in sorted(file):
        print("hello,", line.rstrip())