#include<stdio.h>
#include <cs50.h>

const int n = 3 ;
float average(int array[]);

int main(void)
{
    int scores[n];
    for (int i = 0; i < n; i++)//well designed code
    {
        scores[i] = get_int("Score: ");
    }

    printf("Average: %f\n", average(scores));
}
float average(int array[])
{
    return((array[0] + array[1] + array[2])/ (float) n);
    // replace with int sum = 0;
    //for (int i =0; i < n;i++)
   // {
    //sum += arrray[i];
    //}
   // return sum / (float) n;
}