import math


def get_paint(sqrM: int) -> tuple:
    '''Calculates how many cans of paint and the cost based on surface area'''
    canPrice = 80
    coverage = 54
    if sqrM % coverage == 0:
        return tuple([sqrM / coverage, canPrice * (sqrM / coverage)])
    else:
        return tuple(
          [math.ceil(sqrM / coverage), canPrice * math.ceil(sqrM / coverage)]
          )


print(get_paint(53))
print(get_paint(54))
print(get_paint(55))
