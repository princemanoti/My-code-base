from cs50 import get_int

n = get_int("n: ")

# Use modulus operator to find the remainder, if remainder is 1 when divided by 2 then odd number else even
if n % 2 == 0:
    print("even")
else:
    print("odd")

