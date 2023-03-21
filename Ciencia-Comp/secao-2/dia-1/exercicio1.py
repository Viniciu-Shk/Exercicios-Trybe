class Tv:
    def __init__(self, tamanho: int, volume = 50, canal = 1, ligada = False) -> None:
        if volume < 0 or volume > 99:
            raise ValueError('O valor deve estar entre 0 e 99')
        else:
            self.__volume = volume
        if canal < 1 or canal > 99:
            raise ValueError('O valor deve estar entre 1 e 99')
        else:
            self.__canal = canal
        self.__tamanho = tamanho
        self.__ligada = ligada

    @property
    def volume(self) -> int:
        return self.__volume
    
    @property
    def canal(self) -> int:
        return self.__canal
    
    @property
    def ligada(self) -> int:
        return self.__ligada
    
    def aumentar_volume(self) -> None:
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self) -> None:
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal: int) -> None:
        if canal < 1 or canal > 99:
            raise ValueError('O valor deve estar entre 1 e 99')
        else:
            self.__canal = canal
    
    def ligar_desligar(self) -> None:
        self.__ligada = not self.__ligada

tv = Tv(24, 90)

print(tv.canal, tv.volume)

tv.diminuir_volume()
tv.diminuir_volume()
tv.diminuir_volume()

print(tv.canal, tv.volume)


tv.aumentar_volume()
tv.aumentar_volume()
tv.aumentar_volume()

print(tv.canal, tv.volume)

tv.modificar_canal(30)

print(tv.canal)

print(tv.ligada)

tv.ligar_desligar()

print(tv.ligada)