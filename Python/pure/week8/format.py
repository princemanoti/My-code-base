import re

name = input("what's your name? "). strip()
if matches:= re.search(r"^(.+), *(.+)$", name):
    """
    (.+) groups one or more repititions i.e any one character or more
    * means 0 or more repititions
    """
    name = matches.group(2) + " " + matches.group(1)
     #prints first name then last name  i.e the user must type their last name, space first name
    print(f"hello, {name}")