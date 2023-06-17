const express = require("express");
const { v4: uuidv4 } = require("uuid");
const PORT = process.env.PORT || 8000;
const app = express();
const router = require('./routes/routes');

app.use(express.json());

app.use('/', router);

app.listen(8000, () => {
  console.log(`Server listening on port ${PORT}`);
});
