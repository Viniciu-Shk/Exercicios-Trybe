def count_even(num: int) -> int:
    counter = 0
    for number in range(1, num + 1):
        if number % 2 == 0:
            counter += 1
    return counter

res = count_even(10)
print(res)