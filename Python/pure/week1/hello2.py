def main():
    name = input("What's your name? ")
    hello(name)


def hello(to = "world"):#adding some arguments to the brackets is a parameter and equating to world helps when user doesn't type their name
    #arguments here
    print("hello,", to)

main()