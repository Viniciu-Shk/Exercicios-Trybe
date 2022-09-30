const validateTeam = (req, res, next) => {
  const { id } = req.params;
  if (teams.some((team) => team.id === Number(id))) {
    next();
  } else {
    res.status(404).json({ message: "Id não encontrado" });
  }
};

module.exports = validateTeam;