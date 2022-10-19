const { book } = require('../models');

const getAll = async () => await book.findAll();

const getById = async (id) =>  await book.findByPk(id);

const createBook = async ({ title, author, pageQuantity }) => await book.create({ title, author, pageQuantity });

const update = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  return updatedBook
};

const deleteBook = async (id) => await book.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  createBook,
  update,
  deleteBook,
};
