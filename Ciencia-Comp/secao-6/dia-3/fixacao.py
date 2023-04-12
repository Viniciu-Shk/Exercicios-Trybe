import pandas as pd


# dicionario_de_notas = {
#     "nome": ["Maria", "João", "Fernanda", "Túlio"],
#     "primeira_nota": [9, 8, 7, 8],
#     "segunda_nota": [8, 7, 9, 3]
# }


# meu_primeiro_dataframe = pd.DataFrame(dicionario_de_notas)

# print(meu_primeiro_dataframe)
# print(meu_primeiro_dataframe["nome"])

# chuvas_regiao_morumbi = pd.read_csv("chuvas_morumbi.csv")
# chuvas_regiao_morumbi.to_json("chuvas_morumbi.json")


data = {
    "comida": ["abacate",
               "requeijão",
               "margarina",
               "doce de leite",
               "abacaxi"],
    "tipo": ["doce", "salgado", None, "doce", "doce"]
}

df = pd.DataFrame(data)

# Aqui fazemos a filtragem pelo tipo "doce" passando a
# condição df["tipo"] == "doce" como índice do loc.
comidas_doces = df.loc[df["tipo"] == "doce"]

# print(comidas_doces)
# print(df.isnull().sum())


def calcula_situacao(media):
    return "Aprovado" if media >= 7 else "Reprovado"


notas = pd.DataFrame({
    "nome": ["maria", "joão", "pedro", "ana"],
    "primeira_nota": [9, 8, 7, 8],
    "segunda_nota": [8, 7, 9, 3]
})

# Cria uma nova coluna chamada media
notas["media"] = (notas["primeira_nota"] + notas["segunda_nota"]) / 2

# Cria uma nova coluna chamada situacao no
# DataFrame com Aprovado ou Reprovado com base na média
notas["situacao"] = notas["media"].apply(calcula_situacao)

# print(notas)
info = notas.groupby(by="situacao")
# for line in info:
#     print(line)

primeira_nota = pd.DataFrame({
    "nome": ["maria", "joão", "pedro", "ana"],
    "primeira_nota": [9, 8, 7, 8],
})

segunda_nota = pd.DataFrame({
    "nome": ["maria", "joão", "pedro", "ana"],
    "segunda_nota": [8, 7, 9, 3]
})

par_de_notas = primeira_nota.merge(segunda_nota)
# print(par_de_notas)

primeira_nota = pd.DataFrame({
    "nome": ["maria", "joão", "joão", "joão", "pedro", "ana"],
    "primeira_nota": [9, 8, None, None, 7, 8],
})

# print(primeira_nota["nome"].unique())
