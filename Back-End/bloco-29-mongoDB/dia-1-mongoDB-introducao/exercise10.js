// Pule 5 documentos e exiba os atributos _id, title, authors e status dos livros com o status = "MEAP", limitando-se a 10 documentos.

<<<<<<< HEAD
db.books.find({status: "MEAP"}, {title: 1, authors: 1, status: 1}).skip(5).limit(10)
=======
db.books.find({status: "MEAP"}, {_id: 1, title: 1, authors: 1, status: 1}).skip(5).limit(10)
>>>>>>> 7c00b71387159f122aec6c28b481fefe1355a971
