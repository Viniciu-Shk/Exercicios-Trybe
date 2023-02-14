def square_fun(n: int) -> str:
    '''Receives a number to form a '*' square with n length'''
    counter = 0
    while counter < n:
        counter += 1
        print("*" * n)


square_fun(5)
