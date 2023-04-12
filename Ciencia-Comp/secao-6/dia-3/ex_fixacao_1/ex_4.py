# A lanchonete Pão na Chapa está pensando em expandir o seu negócio.
# Mas, para garantir a saúde financeira do empreendimento,
# ela resolveu consultar vários fornecedores, e assim,
# estabelecer a melhor relação entre custo
# x benefício para os principais ingredientes usados na sua cozinha.
# A pesquisa se deu ao longo de 7 dias,
# com objetivo de identificar qual dos fornecedores
# possuía a melhor relação de custo x
# benefício para os principais ingredientes usados.

import pandas as pd

df = pd.read_csv("ex_fixacao_1/pesquisa_pao_na_chapa.csv")

menor_valor = df['preco_reais'].loc[df['produto'] == 'queijo muçarela'].min()
dia = df['dia_da_semana'].loc[
    (df['preco_reais'] == menor_valor) & (df["produto"] == 'queijo muçarela')
    ]

print(dia)

maior_valor = df["preco_reais"].loc[df["produto"] == "tomate"].max()

fornecedor = df["nome_do_fornecedor"].loc[
    (df["preco_reais"] == maior_valor) & (df["produto"] == "tomate")
    ]

print(fornecedor)

fechado = df['dia_da_semana'].loc[
    df['preco_reais'].isnull() & (df['nome_do_fornecedor'] == 'soma pão')
    ]

print(fechado)

# print(
#     df.loc[df['nome_do_fornecedor'] == 'soma pão']
#     .loc[df['preco_reais'].isnull()]['dia_da_semana'])

new_df = df.groupby(by='produto').mean(numeric_only=True)\
    .rename(columns={'preco_reais': 'preco_medio'})

print(new_df)
