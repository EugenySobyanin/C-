﻿#include <iostream>
using namespace std;

int main()
{
    int const a = 10;
    string letters[a] = { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" };

    for (int i = 0; i < a; i++) {
        for (int j = 0; j < a; j++) {
            cout << letters[j] << i << " ";
        }
        cout << endl;
    }


    return 0;
}