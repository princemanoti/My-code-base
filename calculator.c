#include<stdio.h>
#include<cs50.h>//header files
int main(void)
{
   long x = get_long("x: ");
    long y = get_long("y: ");
    double z = (double) x/ (double) y;
        printf("%li\n",x + y);
        printf("%.20f\n",z);
}