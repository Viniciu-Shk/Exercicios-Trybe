import pandas as pd

data = {
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62]
}

# Dados IPEA(2015)

df = pd.DataFrame(data)

if (__name__ == '__main__'):
    print(f'Linhas e colunas: {df.shape}')
    print(f'Has null? {df.info()}')
    print(f'Median of homeless people: {df.mean(axis=0, numeric_only=True)}')
    print(f'Median of homeless people: {df.describe()}')
