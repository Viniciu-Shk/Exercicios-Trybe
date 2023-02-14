def square_fun(n: int) -> str:
    '''Receives a number to form a '*' square with n length'''
    for row in range(n):
        print("*" * n)


square_fun(3)
