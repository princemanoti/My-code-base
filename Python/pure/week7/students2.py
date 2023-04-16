students = []

with open("students.csv") as file:
    for line in file:
        name, house = line.rstrip().split(",")
        student = {}
        student["name"] = name          #to sort look at students3.py and define dictionary in  one line
        student["house"] = house
        students.append(student)

for student in students:
    print(f"{student['name']} is in {student['house']}")