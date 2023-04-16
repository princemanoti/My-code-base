#include<stdio.h>
#include <cs50.h>
int main(void)
{
    int score[3];
    score[0] = get_int;
    score[1] = 73;
    score[2] = 33;

    printf("average: %f\n", ( score[0]  +  score[1] +  score[2] ) / 3.0);
}