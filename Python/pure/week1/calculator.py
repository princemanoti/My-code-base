"""
x = int(input("What's x? ")) #adding the keyword int avoids concatenating strings
y = int(input("What's y? "))
"""

#float supports numbers with decimals
x = float(input("What's x? "))
y = float(input("What's y? "))

#round rounds off to the nearest integer and the ,2 rounds off to the nearest 2 decimal places
z = round(x + y, 2)
print(z)
#formatting a number like 1000 to be 1,000 we add a colon and a comma to a formatted string
print(f"{z:,}")
#alternatively to 2dp we can use .2f in a formatted string
print(f"{z:.2f}")

#better design we can just line 8 and remove line 4 and 5
print(x + y)