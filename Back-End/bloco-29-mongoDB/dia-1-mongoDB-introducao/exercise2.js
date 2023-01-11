// Retorne o documento com o _id igual a 8, mas só exiba os atributos: _id e name.

db.bios.find({_id: 8}, {name: 1})