name = input("What's your name? ")

if name == "Harry" or name == "Hermoine" or name == "Ron":
    print("Gryffindor")
    #we can alternatively use match to combine those in Gryffindor look at house0.py
elif name == "Draco":
    print("Slytherin")
else:
    print("Who?")