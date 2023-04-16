#include<stdio.h>

int main(void)
{
    const int n = 3;
    for(int i = 0;i < n;i++)
    {
        for(int j = 0;j < n;j++)//nested loop
        {
             printf("#");//vertical blocks
         }
     printf("\n");//horizontal
    }
}