import math

def fatorial(n: int) -> int:
    counter = 0
    for number in range(n + 1):
        counter += number
    return counter

print(fatorial(6))