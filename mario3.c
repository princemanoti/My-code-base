#include<stdio.h>
#include<cs50.h>//header files
int main(void)
{
    //get size of grid
     int n;
     do
     {
       n = get_int("Size: ");//asks the size of the blocks
     }
     while(n < 1);//do while makes some condition is met by the user

     //print grids of blocks
    for(int i = 0;i < n;i++)
    {
        for(int j = 0;j < n;j++)//nested loop
        {
             printf("#");//vertical blocks
         }
     printf("\n");//horizontal
    }
}