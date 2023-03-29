# Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa.
# Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior.
# Esta combinação pode ser utilizada para modificar os produtos de uma página.

# Complexidade de O(n)

def get_combos(lista: list) -> int:
    lista.sort()
    counter = 0
    apearance = 0
    total = 0
    for idx, num in enumerate(lista):
        if lista[idx + 1] == num:
            apearance += 1
            counter += apearance
        if lista[idx + 1] != num or idx == len(lista) - 2:
            total += counter
            counter, apearance = 0, 0
        if idx == len(lista) - 2:
            break
    return total


# Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.
total = get_combos(produtos)
assert total == resultado

# Exemplo 2:
produtos = [1, 1, 2, 3]
resultado = 1
# Os índices (0, 1) formam a única combinação.
total = get_combos(produtos)
assert total == resultado
