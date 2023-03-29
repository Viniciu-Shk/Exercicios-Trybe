# retonar maior quantidade de periodo estavel e analisar complexidade

# 1 - OK
# 0 - Instabilidades


# Complexidae de O(n)

def get_stable_period(lista: list) -> int:
    counter, biggest_interval = 0, 0
    for num in lista:
        if num:
            counter += 1
        else:
            if counter > biggest_interval:
                biggest_interval = counter
            counter = 0
    return biggest_interval


valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

insta1 = get_stable_period(valores_coletados)
assert insta1 == resultado

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4

insta1 = get_stable_period(valores_coletados)
assert insta1 == resultado
