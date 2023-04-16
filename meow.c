#include<stdio.h>

int main(void)
{
    int counter = 0;
    while (counter <=3)// 4 times but if it was < 3 it could print 3 times
    {
        printf("meow\n");
        counter  ++;
    }
} //print meow 4 times