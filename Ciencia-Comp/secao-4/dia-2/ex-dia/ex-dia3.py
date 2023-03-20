def maior_inteiro_aux(lista: list, tamanho: int) -> int:
    if tamanho == 1:
        return lista[0]
    else:
      maior_do_resto_da_lista = maior_inteiro_aux(lista, tamanho - 1)
      if maior_do_resto_da_lista > lista[tamanho-1]:
          return maior_do_resto_da_lista
      else:
          return lista[tamanho-1]

def maior_interio(lista):
    tamanho = len(lista)
    return maior_inteiro_aux(lista, tamanho)


print(maior_interio([1,21,300,4,57]))