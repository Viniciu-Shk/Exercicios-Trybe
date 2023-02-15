from typing import List


def lowest_num(num_list: List[int]) -> int:
    '''Receives a list of ints and returns the lowest one'''
    return min(num_list)


print(lowest_num([5, 9, 1, 19, 70, 8, 100, 2, 35, 27]))