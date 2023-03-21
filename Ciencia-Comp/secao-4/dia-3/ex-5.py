from Cronometro import Cronometro
from random import shuffle


ordenados = list(range(100000000))

def binary_search(array, value):

    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:

        middle_index = (high_index + low_index) // 2
        if array[middle_index] == value:
            return middle_index
        elif array[middle_index] > value:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    raise ValueError(f"{value} is not in list")

target = 3700

if __name__ == '__main__':
    with Cronometro('binary'):
        binary_search(ordenados, target)
