name = input("What's your name? ")

file = open("names2.txt", "a") #adds name to names
file.write(f"{name}\n") #prints each name on a new line
file.close()