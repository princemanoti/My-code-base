def main():
    student = get_student()
    if student["name"] == "Padma":
        student["house"] = "Ravenclaw"
    print(f"{student['name']} is from {student['house']}")

def get_student(): # a tuple doesn't allow changing of values
    name = input("Name: ")
    house = input("House: ")
    return {"name":name, "house": house}

if __name__ == "__main__":
    main()