with open("names4.txt", "r") as file: #reads contents of an existing file
    for line in file:
        print("hello,", line.rstrip())

