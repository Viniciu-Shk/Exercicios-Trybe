const getLoginStatus = async (req, res) => {
  const { username, admin } = req;
  return res.status(200).json({ username, admin });
};

module.exports = { getLoginStatus };