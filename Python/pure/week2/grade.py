score = int(input("Score: "))

if score >= 90 and score <= 100:
    print("Grade: A")
elif score >=80 and score < 90:
     print("Grade: B")
elif score >=70 and score < 80: #not best design practice nut we can tidy to grade0.py using chaining comparison
     print("Grade: C")
elif score >=60 and score < 70:
     print("Grade: D")
elif score >=50 and score < 60:
     print("Grade: E")
else:
     print("Grade: F")