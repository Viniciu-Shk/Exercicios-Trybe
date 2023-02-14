def calculate_price(n: int, type: str) -> float:
    gas_price = 2.5
    alc_price = 1.9
    if (type == 'A'):
        return (alc_price * 0.97) * n if n <= 20 else (alc_price * 0.95) * n
    if (type == 'G'):
        return (gas_price * 0.96) * n if n <= 20 else (gas_price * 0.94) * n


print(calculate_price(20, 'G'))
print(calculate_price(20, 'A'))
print(calculate_price(40, 'G'))
print(calculate_price(40, 'A'))
