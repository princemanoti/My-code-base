try:
    i = int(input("i: "))
except:
    print("That is not an int!")
    exit()
try:
    j = int(input("j: "))
except:
    print("That is not an int")
    exit()
print(i + j)