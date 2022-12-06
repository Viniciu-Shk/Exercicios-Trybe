// Exiba os atributos title, isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id.

db.books.find({}, {_id: 0, title: 1, isbn: 1, pageCount: 1}).limit(3)
