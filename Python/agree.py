from cs50 import get_string

s = get_string("Do you agree? ").lower()

# Use a list
if s in  ["y", "yes"]:
    print("Agreed")
elif s in ["n", "no"]:
    print("Disagreed")