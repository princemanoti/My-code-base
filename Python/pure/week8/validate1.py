import re

email = input("What's your email? ").strip()
        #. strip() allows one to remove any trailing whitespace
if re.search(r"^\w+@(\w+\.)?\w+\.edu$", email, re.IGNORECASE):
    """ ^ allows matching from start
    \w allows the use of strings both upper or lowercase and underscore
    () allows grouping
    \. allows printing of a literal dot
    ? allows the grouped or immediate formerly typed to be optional
    +@ allows checking if there is a @ sign in user's email
    $ allows the matching of email at the end
    """
    print("Valid")
else:
    print("Invalid")