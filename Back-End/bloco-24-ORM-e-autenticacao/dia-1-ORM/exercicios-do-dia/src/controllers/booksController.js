const booksService = require('../services/booksService');

const getAll = async (_req, res) => {
  try {
    const books = await booksService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await booksService.getById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

const createBook = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const newBook = await booksService.createBook({ title, author, pageQuantity });
    return res.status(201).json(newBook);  
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedBook = await booksService.update(id, { title, author, pageQuantity });

  if (!updatedBook) return res.status(404).json({ message: "Book not found" });
  return res.status(200).json({ message: "Book successfully updated" });
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await booksService.deleteBook(id);
    if (!deleted) return res.status(404).json({ message: "Book not found" });
    res.status(204).end();
  } catch ({ message }) {
    res.status(500).json({ message });
  }
  
};

module.exports = {
  getAll,
  getById,
  createBook,
  update,
  deleteBook,
};
