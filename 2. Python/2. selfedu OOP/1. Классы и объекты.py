class Point():
    """Тестовый класс."""

    color = 'black'
    circle = 10


Point.color = 'white' # меняем значение свойства(атрибута) класса
print(f"Print - 1: {Point.color, Point.circle}")
print(f"Print - 2 {Point.__dict__}")  # __dict__ для класса

a = Point()  # создание экземпляра класса
print(f"Print - 3 {a}")
print(f"Print - 4 {a.color, a.circle}")
print(f"Print - 5 {a.__dict__}")  # вызов dict для экземпляра (не содержит свойств (свойства в классе))
a.color = 'red'  # а здесь мы переопределили свойство для экземпляра, теперь оно будет в dict
a.weigth = 100  # так же мы можем и создать новое свойство
print(f"Print - 6 {a.__dict__}")


"""методы setattr, getattr, hasattr"""
"""setattr() - можно динамически добавлять атрибуты и менять их значения"""
setattr(a, 'x', 100500)  # добалвен новый атрибут
setattr(a, 'color', 'perple')  # меняем имеющийся атрибут
print(f"Print - 7 {a.__dict__}")

"""getattr() (если нет поля в простронстве имен
- вызывается ошибка, если не указать 3ий аргумент False)"""
# print(getattr(a, 'x'))
# print(getattr(a, 'y', False))

# hasattr() - булевый метод
# print(hasattr(a, 'x'))
# print(hasattr(Point, 'x'))


# коллекция __dict__ (можно применять к классам и объектам)
# print(a.__dict__)


"""удаление атрибутов
c помощью оператора del
- вызывает ошибку если атрибута нет в классе или объекте"""
del a.x
d = a.__dict__
print(f"Print - 8 {d}")
"""c помощь delattr - применяется только к текущему пространству имен
(для которого вызывается)"""
delattr(a, 'color')
d = a.__dict__
print(f"Print - 9 {d}")


"""Не самый очевидный момент - если динамически (после создания экземпляра)
добавить в класс новый аттрубит, к нему можно будет обратиться через
ранее созданный экземпляр
"""
setattr(Point, 'new_att', 'new_value')
print(f"Print - 10 {a.new_att}")
