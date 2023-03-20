def hanoi(disc_num, a, b, c):
    if disc_num == 1:
        print('Move disco %d de %s para %s' % (disc_num, a, c))
    else:
        hanoi(disc_num - 1, a, c, b)
        print('Move disco %d de %s para %s' % (disc_num, a, c))
        hanoi(disc_num - 1, b, a, c)

hanoi(3, a='primeiro', b='meio', c='fim')