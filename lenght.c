#include<stdio.h>
#include<cs50.h>

int  main(void)
{
    string name = get_string("What's your name? ");
// alternatively add this code int n = strlen(name); and remove the loop then print and remember to include string.h
    int n = 0;
    while (name[n] != '\0')
    {
        n++;
    }
    printf("%i\n", n);
}