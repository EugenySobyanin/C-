# Пример построения декартовой системы координат (график)
import random
from math import log

from sympy import *
from sympy.plotting import plot3d


# Пример графика для линейной функции
x1 = symbols('x')
f = x1 * 2 + 1
# plot(f)

# Пример графика для квадратичной функции
x2 = symbols('x')
f = x2**2
# plot(f)

# Пример построения графика трехмерной функции
x3, y3 = symbols('x y')
f = 2 * x3 + 2 * y3
# plot3d(f)


# Сумма
# Суммирование в SymPy
i, n = symbols('i n')

# Перебираем эл.ты i от 1 до n, затем умножаем и суммируем
summation = Sum(2 * i, (i, 1, n))


# Возведение в степень
# задаем n равным 5, перебираем числа от 1 до 5
up_to_5 = summation.subs(n, 5)
# print(up_to_5.doit())

# упрощение выражений с помощью sympy
x4 = symbols('x')
expr = x4**2 / x4**5
# print(expr)


# Логорифмы
# Нахождение логорифма
# 2 в какой степени даст?
x5 = log(8, 2)
print(x5)
