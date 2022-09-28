const fs = require('fs').promises;

const readAll = async () => {
  const response = await fs.readFile('./simpsons.json', 'utf-8');
  const data = await JSON.parse(response);
  data.forEach(({ id, name}) => {
    console.log(`${id} - ${name}`);
  })
}

const getCharacter = async (id) => {
  const response = await fs.readFile('./simpsons.json', 'utf-8');
  const data = await JSON.parse(response);
  const validation = data.find((character) => Number(character.id) === id);
  if(!validation) {
    throw new Error('Id não encontrado');
  }
  return console.log(validation);
}

const removeChars = async (arrayOfIds) => {
  const response = await fs.readFile('./simpsons.json', 'utf-8');
  const data = await JSON.parse(response);
  const newObj = data.filter((char) => char.id !== arrayOfIds[0] && char.id !== arrayOfIds[1]);
  await fs.writeFile('./simpsons.json', JSON.stringify(newObj));
}

// readAll();
// getCharacter(3);
// removeChars(['1', '3']);