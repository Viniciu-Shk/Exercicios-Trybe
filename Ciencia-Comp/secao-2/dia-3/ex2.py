from abc import ABC, abstractmethod

class Alarme:
    def __init__(self) -> None:
        self.__sistema_de_notificacao = []

    def despertar(self):
        print("Despertador ativado!")
        self.notificar_todos()
        return
    
    def adicionar_notificador(self, sistema):
        self.__sistema_de_notificacao.append(sistema)

    def notificar_todos(self):
        for sistema in self.__sistema_de_notificacao:
            sistema.notificar()

class Notificador(ABC):
    @abstractmethod
    def notificar(self):
        pass
    
class NotificadorLuzes(Notificador):
    def __init__(self, alarme) -> None:
        self.alarme = alarme
        self.alarme.adicionar_notificador(self)

    def notificar(self):
        print("Ligando luzes")

class NotificadorCafe(Notificador):
    def __init__(self, alarme) -> None:
        self.alarme = alarme
        self.alarme.adicionar_notificador(self)

    def notificar(self):
        print("Fazendo café")

class NotificadorPc(Notificador):
    def __init__(self, alarme) -> None:
        self.alarme = alarme
        self.alarme.adicionar_notificador(self)

    def notificar(self):
        print("Ligando o PC")


new_alarm = Alarme()
NotificadorCafe(new_alarm)
NotificadorLuzes(new_alarm)
NotificadorPc(new_alarm)

new_alarm.despertar()