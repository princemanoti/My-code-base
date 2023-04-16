class Student:
    def __init__(self,name,house,patronus):
        if not name:
            raise ValueError("Missing name")
        if house not in ["Gryffindor", "Sytherin", "Ravenclaw", "Hufflepuff"]:
            raise ValueError("Invalid House")
        self.name = name
        self.house = house
        self.patronus = patronus

    def __str__(self):
        return f"{self.name} is from {self.house}"

    def charm(self):
        match self.patronus:
            case "stag":
                return "Horse Emoji"
            case "Otter":
                return "snail emoji"
            case "Jack Russel Terrier":
                return "Dog emoji"
            case _:
                return "Wand Emoji"

def main():
    student = get_student()
    print("Expecto Patronum!")
    print(student.charm()) # calls the__str__

def get_student():
    name = input("Name: ")
    house = input("House: ")
    patronus = input("Patronus: ")
    return Student(name, house, patronus)

if __name__ == "__main__":
    main()
