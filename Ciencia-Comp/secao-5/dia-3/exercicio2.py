# Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções.

# Complexidade de O(n)

def embaralha_cartas(lista: list) -> list:
    first_half, last_half = lista[:len(lista) // 2], lista[len(lista) // 2:]
    shuffled = list()
    for num1, num2 in zip(first_half, last_half):
        shuffled.extend([num1, num2])
    return shuffled


# Exemplo 1:
cartas = [2, 6, 4, 5]
cartas_por_parte = 2
resultado = [2, 4, 6, 5]

result = embaralha_cartas(lista=cartas)

for idx, num in enumerate(result):
    assert num == resultado[idx]

# Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
cartas_por_parte = 3

resultado = [1, 7, 4, 6, 4, 6]

result = embaralha_cartas(lista=cartas)

for idx, num in enumerate(result):
    assert num == resultado[idx]
