def asc_tri(n: int) -> str:
    '''Receives a int and return a ascII triangle with n lines'''
    for row in range(n):
        print("*" * row)


asc_tri(10)