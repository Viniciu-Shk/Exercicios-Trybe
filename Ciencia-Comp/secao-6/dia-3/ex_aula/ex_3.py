# Uma pessoa da equipe ficou curiosa sobre a quantidade de
# países em cada confederação, portanto mostre a ela essa informação.

from ex_1 import df

country_by_conf = df[['confederation', 'country']]\
    .groupby(by='confederation').count()\
    .rename(columns={'country': 'country_number'})

if (__name__ == '__main__'):
    print(country_by_conf)
