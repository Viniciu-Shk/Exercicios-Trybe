const accountService = require('../services/accountService');

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await accountService.getById(id);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

const getByIdLazy = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await accountService.getByIdLazy(id);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

const getComments = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await accountService.getComments(id);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
}

const createAccount = async (req, res) => {
  const { type, message } = await accountService.createAccount(req.body);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

const createComment = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await accountService.createComment(id, req.body);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
}

module.exports = {
  getById,
  getByIdLazy,
  getComments,
  createAccount,
  createComment,
};
