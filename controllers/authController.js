const { v4: uuidv4 } = require("uuid");

let authToken = null;

const getAuth = (req, res) => {
  authToken = uuidv4();
  res.status(200).json({ response: true, token: "Bearer " + authToken });
};

const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(400).json({ response: false, error: "No authorization token" });
  } else {
    if (req.headers.authorization === authToken) {
      console.log(req.headers.authorization);
      next();
    } else {
        res.status(400).json({response: true, error: 'Incorrect Bearer token'})
    }
  }
};

module.exports = {
  getAuth,
  checkAuth,
};
