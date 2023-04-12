import pandas as pd
from sqlalchemy import create_engine
# import pymysql
from fixacao import par_de_notas

database_url = "mysql+pymysql://root:16033011@localhost:3306/estudantes"

engine = create_engine(database_url)


par_de_notas.to_sql(
    name="notas_estudantes",
    con=engine,
    index=False,
    if_exists='replace'
)
df = pd.read_sql("SELECT * FROM notas_estudantes;", engine)

print(df.head())
