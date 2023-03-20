def soma(n: int) -> int:
    if n == 0:
        return 0
    else:
        return n + soma(n - 1)
    
print(soma(5))