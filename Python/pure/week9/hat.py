import random

class Hat:
    def __init__(self):
        self.houses = ["Gryffindor", "Sytherin", "Ravenclaw", "Hufflepuff"]

    def sort(self,name):
        print(name,"is in",random.choice(self.houses))

hat = Hat()
hat.sort("Harry")