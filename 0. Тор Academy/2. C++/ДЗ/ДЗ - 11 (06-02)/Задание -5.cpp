﻿#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    setlocale(LC_ALL, "RU");
    long num, num2;
    int sum = 0, result = 0;
    cout << "Введите число: ";
    cin >> num;
    num2 = num;
    for (int i = 2; i < num; i++) {
        int i_2 = i;
        sum = 0;
        while (i_2 > 0) {
            int a = i_2 % 10;
            sum += a;
            i_2 /= 10;
        }
        long long a = pow(sum, 3);
        long long b = pow(i, 2);
        if (a == b) {
            cout << "Найдено число: " << i << endl;
            ++result;
        }
    }
    if (result == 0) {
        cout << "В дипозоне от 1 до " << num << " такого числа нет." << endl;
    }
}
