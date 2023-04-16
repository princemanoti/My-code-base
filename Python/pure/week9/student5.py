class Student:
    def __init__(self,name,house):
        self.name = name
        self.house = house

    def __str__(self):
        return f"{self.name} is from {self.house}"

    @property          #getter function
    def house(self):
        return self._house

    @house.setter        #setter function
    def house(self,house):
        if house not in ["Gryffindor", "Sytherin", "Ravenclaw", "Hufflepuff"]:
            raise ValueError("Invalid House")
        self._house = house

    @property     #getter function
    def name(self):
        return self._name

    @name.setter       #setter function
    def name(self,name):
        if not name:
            raise ValueError("Missing name")
        self._name = name

def main():
    student = get_student()
    print(student) # calls the__str__

def get_student():
    name = input("Name: ")
    house = input("House: ")
    return Student(name, house)

if __name__ == "__main__":
    main()
