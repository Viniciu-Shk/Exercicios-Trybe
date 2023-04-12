# Sua liderança gostaria de ter uma visão geral
# sobre as informações contidas na base de dados fifa_audience.

import pandas as pd

df = pd.read_csv('ex_aula/fifa_audience.csv')

if (__name__ == '__main__'):
    print(df.info())
