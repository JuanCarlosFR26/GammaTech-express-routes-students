const { students } = require("../students");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
  res.status(200).json({ response: true, data: students });
  console.log("Usuarios cargados");
};


module.exports = {
    getAllUsers
}