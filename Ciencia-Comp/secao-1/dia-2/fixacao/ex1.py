def hor_name() -> str:
    name = input("Digite seu nome").upper()
    for letter in name:
        print(letter)

hor_name()