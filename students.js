const { v4: uuidv4 } = require("uuid");

const students = [
  {
    student_id: uuidv4(),
    first_name: "Del",
    last_name: "Preddle",
    age: 24,
    email: "dpreddle0@ning.com",
    major: "Mongo",
    gpa: 2.45,
  },
  {
    student_id: uuidv4(),
    first_name: "Selie",
    last_name: "Grove",
    age: 20,
    email: "sgrove1@cbsnews.com",
    major: "JavaScript",
    gpa: 0.02,
  },
  {
    student_id: uuidv4(),
    first_name: "Wendie",
    last_name: "Stollery",
    age: 24,
    email: "wstollery2@psu.edu",
    major: "CSS",
    gpa: 0.79,
  },
  {
    student_id: uuidv4(),
    first_name: "Dag",
    last_name: "Mangham",
    age: 20,
    email: "dmangham3@gov.uk",
    major: "CSS",
    gpa: 1.38,
  },
  {
    student_id: uuidv4(),
    first_name: "Cordelia",
    last_name: "Cluley",
    age: 19,
    email: "ccluley4@weather.com",
    major: "React",
    gpa: 3.26,
  },
];

module.exports = {
  students
};

