# O departamento comercial de sua empresa quer fazer um
# trabalho especial nos países que fazem parte da confederação
# CONMEBOL, portanto mostre na tela quais são eles.

from ex_1 import df

conmebol_countries = df['country'].loc[df['confederation'] == 'CONMEBOL']

if (__name__ == '__main__'):
    print(conmebol_countries)
