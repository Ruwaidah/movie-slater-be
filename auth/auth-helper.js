module.exports = (req, res, next) => {
  const { username, password, email } = req.body;

  if (username && password && email) {
    next();
  } else {
    res.status(400).json({ message: "Please fill out all required fields" });
  }
};
