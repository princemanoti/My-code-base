#Dictionary Reader

import csv

students = []

with open("students2.csv") as file: #add name,home in first line of csv file
   reader = csv.DictReader(file)
   for row in reader:
       students.append({"name": row["name"], "home": row["home"]})


for student in sorted(students, key=lambda student: student["name"]):
    print(f"{student['name']} is from {student['home']}")
