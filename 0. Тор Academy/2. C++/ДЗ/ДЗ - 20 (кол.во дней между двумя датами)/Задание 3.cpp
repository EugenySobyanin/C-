﻿#include <iostream>
#include <iomanip>
#include <time.h>
#include <string>


template<typename T>
void create_massive(T arr, int size);

template<typename T>
void foo(T arr, int size);

template<typename T>
void print(T arr, int size);


int main()
{
    using namespace std;
    setlocale(LC_ALL, "RU");

    const int size = 10;
    int arr_1[size];

    create_massive(arr_1, size);

    print(arr_1, size);

    foo(arr_1, size);
}


template<typename T>
void create_massive(T arr, int size) {

    using namespace std;
    srand(time(0));

    for (int i = 0; i < size; i++) {
        arr[i] = -5 + rand() % 10;
    }
}


template<typename T>
void foo(T arr, int size) {
    
    using namespace std;

    int minimal = arr[0];
    int maximum = arr[0];
    int zero_count = 0;

    for (int i = 0; i < size; i++) {
        if (arr[i] < minimal) minimal = arr[i];
        if (arr[i] > maximum) maximum = arr[i];
        if (arr[i] == 0) zero_count += 1;
    }
    cout << "Минимальный элемент: " << minimal << endl
        << "Максимальный элемент: " << maximum << endl
        << "Нулевых элементов: " << zero_count << endl;
}

template<typename T>
void print(T arr, int size) {

    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}
