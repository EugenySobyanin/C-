﻿#include <iostream>
#include <time.h>


float raise_to_degree(int x, int y);

int main()
{
    using namespace std;
    srand(time(NULL));
    setlocale(LC_ALL, "RU");

    cout << raise_to_degree(2, 3);

}
float raise_to_degree(int x, int y)
{
    using namespace std;

    int result = x;
    for (int i = 1; i < abs(y); i++) {
        result *= x;
    }
    if (y == 0) {
        return 1;
    }
    else if (y < 0) {
        return 1 / float(result);
    }
    else {
        return result;
    }
    return 0.0;
}
