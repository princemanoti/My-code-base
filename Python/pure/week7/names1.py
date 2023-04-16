name = input("What's your name? ")

file = open("names1.txt", "a") #adds name to names
file.write(name) #prints on one line the names
file.close()