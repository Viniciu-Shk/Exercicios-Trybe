# def fatorial(n: int) -> int:
#     counter = 0
#     for number in range(n + 1):
#         counter += number
#     return counter

def fatorial(n: int) -> int:
    return sum(range(1, n + 1))

print(fatorial(5))