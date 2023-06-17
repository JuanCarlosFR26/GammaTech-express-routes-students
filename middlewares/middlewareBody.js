const checkBody = (req, res, next) => {
  const { first_name, last_name, age, email, major } = req.body;
  const gpa = parseFloat(req.body.gpa).toFixed(1);
  if (
    !first_name ||
    !last_name ||
    !age ||
    !email ||
    !major ||
    !gpa ||
    gpa < 0 ||
    gpa > 4
  ) {
    res.status(400).send({ response: false, error: "Missing student data" });
  } else if (
    typeof first_name !== "string" ||
    typeof last_name !== "string" ||
    typeof major !== "string" ||
    typeof age !== "number" ||
    typeof gpa !== "number"
  ) {
    res.status(400).send({
      response: false,
      error: "Some data isnt correspond with its type",
    });
  } else {
    next();
  }
};

module.exports = {
  checkBody,
};
