﻿#include <iostream>
using namespace std;

int main()
{
    setlocale(LC_ALL, "RU");
    int a, b, c, count = 0;
    for (int i = 100; i <= 999; i++) {
        a = i / 100;
        b = i % 100 / 10;
        c = i % 10;
        if ((a == b || a == c || b == c) && !(a == b && a == c)) {
            count += 1;
            cout << i << endl;
        }
    }
    cout << "Результат: " << count << endl;
    return 0;
}


