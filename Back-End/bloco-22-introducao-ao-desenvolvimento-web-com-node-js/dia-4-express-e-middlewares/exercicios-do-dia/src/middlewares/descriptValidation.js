function descriptValidation (req, res, next) {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ message: "O campo description é obrigatório" });
  } else if (!description.createdAt) {
    return res.status(400).json({ message: "O campo createdAt é obrigatório" });
  } else if (!description.rating) {
    return res.status(400).json({ message: "O campo rating é obrigatório" });
  } else if (!description.difficulty) {
    return res.status(400).json({ message: "O campo difficulty é obrigatório" });
  } else if (!description) {
    return res.status(400).json({ message: "O campo description é obrigatório" });
  }
  next();
}

module.exports = descriptValidation;