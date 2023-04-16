#include<stdio.h>
#include<cs50.h>
#include<string.h>

int main(int argc, string argv[])
{
    printf("hello, %s %s\n",argv[1], argv[2]);
    if (argc == 3)
    {
        printf("hello, %s %s\n",argv[1], argv[2]);
    }
    else
    {
        printf("hello, stranger\n");
    }
}
