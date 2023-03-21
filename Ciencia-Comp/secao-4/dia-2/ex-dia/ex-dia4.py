def mdc_rec(a: int, b: int) -> int:
    if b == 0:
        return a
    else:
        return mdc_rec(b, a % b)
    

print(mdc_rec(10, 25))