def triangle_test(s1: int, s2: int, s3: int) -> str:
    '''Receives all sides of a triangle, validate existence and returns type of triangle'''
    if (s1 + s2 < s3 or s2 + s3 < s1 or s3 + s1 < s2):
        return "Não é triângulo"
    elif (s1 == s2 == s3):
        return "Equilátero"
    elif (s1 == s2 or s2 == s3 or s3 == s1):
        return "Isóceles"
    else:
        return "Escaleno"


print(triangle_test(3, 3, 3))
print(triangle_test(3, 2, 2))
print(triangle_test(3, 4, 2))
print(triangle_test(3, 3, 30))