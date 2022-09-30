function signupValidation (req, res, next) {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].some((item) => !item)) {
    return res.status(401).json({ message: "Campos ausentes!" });
  }
  next();
};

module.exports = signupValidation;