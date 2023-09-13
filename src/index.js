const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

const apiRoutes = require("./routes/index");

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
