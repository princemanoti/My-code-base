x = int(input("What's x? "))
y = int(input("What's y? "))

#conditional else if (elif)
if x < y:
    print("x is less than y")
elif x > y:
    print("x is greater than y")
#poor design again check compare2.py for else
elif x == y:
    print("x is equals to y")