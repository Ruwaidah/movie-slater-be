module.exports = (req, res, next) => {
  const { username, password, email, role } = req.body;

  if (username && password && email && role) {
    next();
  } else {
    res.status(400).json({ message: "Please fill out all required fields" });
  }
};
