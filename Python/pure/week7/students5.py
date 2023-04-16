#Csv Reader

import csv

students = []

with open("students1.csv") as file: #put "" in a string that has a comma e.g Harry, "number four,privet drive"
   reader = csv.reader(file)
   for name, home in reader:
       students.append({"name": name, "home": home})


for student in sorted(students, key=lambda student: student["name"]):
    print(f"{student['name']} is from {student['home']}")
