#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string names[] = {"David", "Carter"};
    string numbers[] = {"+254-798-767-823", "+254-799-993-062"};

    string name = get_string("Name: ");
    for(int i = 0; i < 2; i++)
    {
        if (strcmp(names[i], name) == 0)
        {
            printf("Found %s\n", numbers[i]);
            return 0;
        }
     }
     printf("Not found\n");
     return 1;
}