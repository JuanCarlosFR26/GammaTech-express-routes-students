const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(400).send({ response: false, error: "No authorization token" });
  } else {
    console.log(req.headers.authorization)
    next();
  }
};

module.exports = {
  checkAuth,
};
