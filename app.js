const express = require("express");
require("dotenv").config();
const Routes = require("./routes");

const app = express();

app.use(express.json());

app.use("/api", Routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
