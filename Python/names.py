import sys

names = ["Bill", "George", "Fred", "Charlie", "Ginny", "Percy", "Ron"]

name = input("Name: ")

for n in names:
    if name == n:
        print("Found")
        sys.exit(0)

print("Not found")
sys.exit(1)