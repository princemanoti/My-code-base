#creating our own functions
def hello(to = "world"):#adding some arguments to the brackets is a parameter and equating to world helps when user doesn't type their name
    #arguments here
    print("hello,", to)
hello()
name = input("What's your name? ")
#prints hello name in different lines
hello(name)#adding the parameter to hello calls line 4 and prints in one line but without the parameter prints line 7
print (name)