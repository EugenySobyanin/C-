﻿#include <iostream>
#include <time.h>


void lucky_number(int num);

int main()
{
    using namespace std;
    srand(time(NULL));
    setlocale(LC_ALL, "RU");

    lucky_number(123322);

}

void lucky_number(int num)
{
    using namespace std;

    if (99999 < num < 1000000)
    {
        int sum1, sum2;

        int first_three_nums = num / 1000;
        int second_three_nums = num % 1000;
        sum1 = first_three_nums % 10
             + first_three_nums % 100 / 10
             + first_three_nums / 100;
        sum2 = second_three_nums % 10
             + second_three_nums % 100 / 10
             + second_three_nums / 100;

        if (sum1 == sum2)
        {
            cout << "Число счастливое!";
        }

        else
        {
            cout << "Число несчастливое.";
        }

    }
    else
    {
        cout << "Число не шестизначное";
    }
}