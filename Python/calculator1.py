from cs50 import get_int

x = get_int("X: ")
y = get_int("Y: ")

z = x / y
print(z)
# To obtain 50 decimals use format string
print(f"{z:.50f}")