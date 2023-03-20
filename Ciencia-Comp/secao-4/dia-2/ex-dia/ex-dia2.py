def count_even_rec(num: int) -> int:
    if num == 0:
        return 0
    else:
        if num % 2 == 0: return 1 + count_even_rec(num - 1)
        return count_even_rec(num - 1)

res = count_even_rec(10)
print(res)