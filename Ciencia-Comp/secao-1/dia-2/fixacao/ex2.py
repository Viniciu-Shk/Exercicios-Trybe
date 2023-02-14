lista = input("Digite seus numeros separados por um espaço").split(' ')
total = 0
for num in lista:
    if not num.isdigit():
        print(f'Erro ao somar valores, {num} não é um dígito.')
    total += int(num)


print(f'A soma dos valores válidos é: {total}')
