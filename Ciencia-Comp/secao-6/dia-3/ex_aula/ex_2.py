# Com a finalidade de ter a visibilidade dos países com maior
# participação no compartilhamento global de transmissões,
# mostre na tela apenas os países com porcentagem
# de compartilhamento global (population_share) maior que 2.

from ex_1 import df

major_shares = df['country'].loc[df['tv_audience_share'] > 2]

if (__name__ == '__main__'):
    print(major_shares)
