from typing import List
import math

class Estatistica:
    def __init__(self, lista: List) -> None:
        self.lista = lista
    

    def media(self) -> int:
        return sum(self.lista) / len(self.lista)
    
    def mediana(self) -> int:
        ordered = sorted([*self.lista])
        middle = int(len(ordered) / 2)
        if len(ordered) % 2 == 0:
            return ordered[middle] + ordered[middle - 1] / 2
        else:
            return ordered[math.floor(middle)]
    
    def moda(self) -> int:
        dic = dict()
        for num in self.lista:
            if not num in dic:
                dic[num] = 1
            else:
                dic[num] += 1
        return [k for k, v in dic.items() if v == max(dic.values())][0]
    

lista = Estatistica([10,10,200,20, 0])

print(lista.media(), lista.mediana(), lista.moda())