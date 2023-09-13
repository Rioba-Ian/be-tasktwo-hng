const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const apiRoutes = require("./routes/index");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
