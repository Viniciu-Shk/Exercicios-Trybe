ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

# print("\033[94mOlá Mundo!\033[0m")
# ou
# print(f"{VERDE}Olá Mundo!{RESET}")

class Log:
    def dispara_log(self, message):
        return message
    
class LogError:
    def __init__(self, log: Log) -> None:
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"
    
class LogWarning:
    def __init__(self, log: Log) -> None:
        self.log = log

    def dispara_log(self, message):
        return f"{LARANJA}{self.log.dispara_log(message)}{RESET}"
    
class LogSuccess:
    def __init__(self, log: Log) -> None:
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{self.log.dispara_log(message)}{RESET}"
    
logger = Log()
error_log = LogError(logger)
warning_log = LogWarning(logger)
sucess_log = LogSuccess(logger)

# error_log.dispara_log("O sistema esta com erros")
# warning_log.dispara_log("O sistema esta lento")
# sucess_log.dispara_log("O sistema esta funcionando")

print(LogSuccess(logger).dispara_log("O sistema esta funcionando"))
print(LogWarning(logger).dispara_log("O sistema esta lento"))
print(LogError(logger).dispara_log("O sistema esta com erros"))

