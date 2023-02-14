import statistics
from typing import List


def med(arr: List[int]) -> int or float:
    '''Function that receives a number
    list and returns the median of the list'''
    return statistics.median(arr)


print(med([1, 2, 3, 4, 5]))
print(med([10, 20]))
