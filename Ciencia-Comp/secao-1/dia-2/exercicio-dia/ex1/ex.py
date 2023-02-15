with open('exercicio-dia/ex1/file.txt') as nome:
    name = nome.read()
    length = len(name) - 1
    while length >= 0:
        print(name)
        name = name[:-1]
        length -= 1