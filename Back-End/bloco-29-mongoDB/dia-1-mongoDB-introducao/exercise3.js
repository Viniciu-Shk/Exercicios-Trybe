// Retorne apenas os atributos name e birth do documento com o _id igual a 8.

db.bios.find({_id: 8}, {name: 1, birth: 1, _id: 0})