"""
remove whitespace from the str and capitalize user name i.e .strip().title()
ask user for their name
"""
name = input("What's your name? ").strip().title()#fills whats on the right to the variable on  the left

"""
you can use this to multi line comment
"""
#remove whitespace from str
name = name.strip()

#Capitalize
name = name.capitalize()

#capitalize the first letter of every name
name = name.title()

#split user's name into first name and last name
first,last = name.split(" ")
print(f"hello, {first}")
#say hello to user
print(f"hello, {name}") # print is a function
#Hello, world is an argument
# Alternatively,
print("hello,", name)
#or
print("hello, " + name)