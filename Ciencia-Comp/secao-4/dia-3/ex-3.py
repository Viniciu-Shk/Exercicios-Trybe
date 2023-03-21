from Cronometro import Cronometro
from random import shuffle


ordenados = list(range(100000))
inversamente_ordenados = list(reversed(range(100000)))
aleatorios = ordenados[:] # copia dos ordenados
shuffle(aleatorios) # embaralha eles

def search(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    for i in range(start + 1, end): # Busca pelo menor elemento
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i

    return min_element_index # Retorna a posição do menor elemento

def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1): # Início da iteração para ordenar os N-1 elementos
        min_element_index = search(numbers, index, n)
        numbers[index], numbers[min_element_index] = numbers[min_element_index], numbers[index] # Trocando os elementos utilizando desempacotamento.

    return numbers

def insertion_sort(numbers):
    n = len(numbers) # Quantidade de elementos na lista

    for index in range(1, n): # Começaremos a ordenar pelo segundo elemento
        key = numbers[index] # Pegamos o segundo elemento e o definimos como chave

        new_position = index - 1 # Tomamos a posição anterior para iniciar a comparação
        while new_position >= 0 and numbers[new_position] > key: # Enquanto a chave for menor, remaneja o elemento para frente
            numbers[new_position + 1] = numbers[new_position] # Remaneja o elemento
            new_position = new_position - 1

        numbers[new_position + 1] = key # Insere a chave na posição correta

    return numbers


if __name__ == '__main__':
    # with Cronometro('selection_sort ordenaros'):
    #     selection_sort(ordenados)
    # with Cronometro('selection_sort invertidos'):
    #     selection_sort(inversamente_ordenados)
    # with Cronometro('selection_sort aleatorios'):
    #     selection_sort(aleatorios)
    with Cronometro('insertion_sort ordenaros'):
        insertion_sort(ordenados)
    with Cronometro('insertion_sort invertidos'):
        insertion_sort(inversamente_ordenados)
    with Cronometro('insertion_sort aleatorios'):
        insertion_sort(aleatorios)