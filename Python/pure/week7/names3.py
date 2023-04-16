name = input("What's your name? ")

with open("names3.txt", "a") as file: #opens and closes file after executing in line 4
    file.write(f"{name}\n") #prints each name on a new line
