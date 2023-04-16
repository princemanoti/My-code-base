students = []

with open("students.csv") as file:
    for line in file:
        name, house = line.rstrip().split(",")
        student = {"name": name, "house": house}
        students.append(student)

def get_name(student):
    return student["name"]

#key specifies the key to be used in sorting while reverse reverses the order of sorting from a-z to z-a
for student in sorted(students, key=get_name, reverse = True):
    print(f"{student['name']} is in {student['house']}")
#if you need to sort by house you can change the key and use the definition of get_house