const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
  console.log(`Running on port: http://localhost:${PORT}`);
});
