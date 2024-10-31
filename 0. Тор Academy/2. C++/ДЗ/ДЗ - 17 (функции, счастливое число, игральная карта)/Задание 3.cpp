﻿#include <iostream>
#include <time.h>


void perfect_numbers(int x, int y);

int main()
{
    using namespace std;
    srand(time(NULL));
    setlocale(LC_ALL, "RU");

    perfect_numbers(1, 10000);

}

void perfect_numbers(int x, int y)
{
    using namespace std;
    int sum_of_the_divisors = 0;

    if (y < x)
    {
        swap(x, y);
    }

    for (int i = x; i <= y; i++)
    {
        sum_of_the_divisors = 0;

        for (int j = 1; j < i; j++)
        {
            if (i % j == 0)
            {
                sum_of_the_divisors += j;
            }
        }

        if (i == sum_of_the_divisors)
        {
            cout << i << endl;
        }
    }
}