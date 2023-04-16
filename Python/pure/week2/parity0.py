def main():
    x = int(input("What's x? "))
    if is_even(x):
        print("Even")
    else:
        print("Odd")

def is_even(b):
    return b % 2 == 0
    #or
    #return True if n % 2 == 0 else False
    #or
    """ if b % 2 == 0:
        return True
    else:
        return False
    """
main()