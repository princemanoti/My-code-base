#include<stdio.h>
#include<cs50.h>//header files

int get_size(void);
void print_grid(int size);

int main(void)
{
    //get size of grid
     int n = get_size();//asks the size of the blocks
     print_grid(n);
}















int get_size(void)
{
    int n;
    do
    {
        n = get_int("Size: ");
    }


     while(n < 1);//do while makes some condition is met by the user
     return n;
}
//print grids of blocks
void print_grid(int size)
{
    for(int i = 0;i < size;i++)
    {
        for(int j = 0;j < size;j++)//nested loop
        {
             printf("#");//vertical blocks
         }
     printf("\n");//horizontal
    }
}