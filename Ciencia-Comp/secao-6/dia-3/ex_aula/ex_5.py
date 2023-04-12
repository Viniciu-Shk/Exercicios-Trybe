# A gerência do seu setor quer fazer um trabalho para aumentar a média de
# audiência nos países da confederação UEFA,
# porém ainda não se sabe qual a média atual.
# Mostre a média de audiência dos países que fazem parte
# da confederação UEFA e limite em duas casas decimais.

from ex_1 import df

uefa_mean = df['tv_audience_share'].loc[
    df['confederation'] == 'UEFA'].mean().round(decimals=2)

print(uefa_mean)
