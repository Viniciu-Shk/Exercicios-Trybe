import statistics


def med(arr: list) -> int or float:
    '''Function that receives a number
    list and returns the median of the list'''
    return statistics.median(arr)


print(med([1, 2, 3, 4, 5]))
print(med([10, 20]))
