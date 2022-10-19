const booksModel = (sequelize, Datatypes) => {
  const book = sequelize.define('book', {
    title: Datatypes.STRING,
    author: Datatypes.STRING,
    pageQuantity: Datatypes.INTEGER,
    createdAt: Datatypes.DATE,
    updatedAt: Datatypes.DATE
  });
  return book;
}
module.exports = booksModel;