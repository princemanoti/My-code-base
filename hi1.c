#include<stdio.h>
#include <cs50.h>

int main(void)
{
   string s = "HI!";
   string t = "BYE!";

    printf("%c%c%c%c\n", s[0], s[1], s[2], s[3]);
    printf("%i %i %i %i\n", s[0], s[1], s[2], s[3]);
    printf("%s\n", s);
    printf("%s\n", t);
}