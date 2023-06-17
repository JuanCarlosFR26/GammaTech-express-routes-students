const express = require("express");
const { v4: uuidv4 } = require("uuid");
const PORT = process.env.PORT || 8000;
const app = express();
const router = require("./routes/routes");
const { getAuth, checkAuth } = require("./controllers/authController");

app.use(express.json());

app.get("/auth", getAuth);

app.use("/", checkAuth, router);

app.listen(8000, () => {
  console.log(`Server listening on port ${PORT}`);
});
