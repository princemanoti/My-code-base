def main():
    x = int(input("What's x? "))
    print("x squared is", square(x))

def square(n):
    return n * n
#alternatively
    return n ** 2
#or
    return pow(n,2)

main()