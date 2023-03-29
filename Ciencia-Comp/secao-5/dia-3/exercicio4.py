# Você têm dois arrays de números inteiros que representam:

# I - instantes de entrada e saídas em uma biblioteca II - um número que represente um instante a ser buscado.

# Retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante entrou e saiu da biblioteca.

# Complexidade de O(n)

def numero_pessoas(in_time: list, out_time: list, instance: int) -> int:
    counter = 0
    for num1, num2 in zip(in_time, out_time):
        if num1 <= instance <= num2:
            counter += 1
    return counter


entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
resultado = 1

result = numero_pessoas(entradas, saidas, instante_buscado)
assert result == resultado

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.
