import csv
people = {
    "Carter": "+254798767823",
    "David": "+2547999993062",
} #or dict()

name = input("Name: ")
if name in people:
    print(f"Number: {people[name]}")