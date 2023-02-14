def bigger_name(list: list) -> str:
    '''Receiver a string list and returns the one with most characters in it'''
    newList = sorted(list, key=len, reverse=True)
    return newList[0]


print(bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
