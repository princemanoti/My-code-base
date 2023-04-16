import re

email = input("What's your email? ").strip()

if re.search(r"^.+@.+\.edu$", email):
# \ tells the computer not to treat . after it as special but as a literal
    print("Valid")
else:
    print("Invalid")