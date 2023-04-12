# Crie um novo DataFrame a partir de um dicionário
# que contém três pares de chave-valor.
# O primeiro par terá os nomes de seus amigos mais próximos,
# já o segundo terá o prato preferido de cada amigo,
# o terceiro e último par terá a sobremesa preferida deles.
# Confira se a saída condiz com o resultado esperado.

import pandas as pd

data = {
    "amigos": ['Marco', 'Mya', 'Araras'],
    "prato_favorito": ['Uzi', 'Sushi', 'Feijoada'],
    "Sobremesa_favorita": ['Baklava', 'Brigadeiro', 'Pipoca doce'],
}

friends_df = pd.DataFrame(data)

if (__name__ == '__main__'):
    print(friends_df)
