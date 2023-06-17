const { students } = require("../students");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
  res.status(200).json({ response: true, data: students });
  console.log("Usuarios cargados");
};

const getUserById = (req, res) => {
  const requiredID = req.params.id;
  console.log(requiredID);
  let studentId = students.find((student) => student.student_id === requiredID);
  if (studentId) {
    res.status(200).send({ response: true, data: studentId });
  } else {
    res.status(400).send({ response: false, error: "No student with such id" });
  }
};

const getUserByLastNameOrMajor = (req, res) => {
  const lastname = req.query.lastname;
  const major = req.query.major;

  if (!lastname && !major) {
    return res
      .status(200)
      .send({ response: true, message: "No student with such parameters" });
  }

  const filteredStudents = students.filter((student) => {
    if (lastname && major) {
      return (
        student.last_name.toLowerCase() === lastname.toLowerCase() &&
        student.major.toLowerCase() === major.toLocaleLowerCase()
      );
    } else if (lastname) {
      return student.last_name.toLowerCase() === lastname.toLowerCase();
    } else if (major) {
      return student.major.toLowerCase() === major.toLowerCase();
    }
  });

  if (filteredStudents.length === 0) {
    return res
      .status(400)
      .send({ response: true, message: "No student with such parameters" });
  }

  res.status(200).send({ response: true, data: filteredStudents });
};

const createUser = (req, res) => {
  const { first_name, last_name, age, email, major } = req.body;
  const gpa = parseFloat(req.body.gpa).toFixed(1);
  const newUser = {
    student_id: uuidv4(),
    first_name: first_name,
    last_name: last_name,
    age: age,
    email: email,
    major: major,
    gpa: gpa,
  };
  students.push(newUser);
  console.log("Usuario añadido");
  res.status(201).send({ response: true, data: newUser });
};

const replaceUser = (req, res) => {
  const id = req.params.id;
  const { student_id, first_name, last_name, age, major, email, gpa } =
    req.body;

  const studentIndex = students.findIndex(
    (student) => student.student_id === id
  );

  if (studentIndex !== -1) {
    students[studentIndex] = {
      id: students[studentIndex].student_id,
      student_id,
      first_name,
      last_name,
      age,
      major,
      email,
      gpa,
    };

    res.status(200).send({ response: true, data: students[studentIndex] });
  } else {
    res.status(404).send("No student with such id");
  }
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;

  const studentIndex = students.findIndex(
    (student) => student.student_id === id
  );

  if (studentIndex !== -1) {
    Object.assign(students[studentIndex], updatedFields);
    res.status(200).send({ response: true, data: students[studentIndex] });
  } else {
    res.status(404).send("No student with such id");
  }
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  const studentIndex = students.findIndex(
    (student) => student.student_id === id
  );

  if (studentIndex !== -1) {
    const deletedStudent = students.splice(studentIndex, 1)[0];
    res.status(200).send(deletedStudent);
  } else {
    res.status(404).send("No student with such id");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByLastNameOrMajor,
  createUser,
  replaceUser,
  updateUser,
  deleteUser
};
