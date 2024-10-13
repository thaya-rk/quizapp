const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const reportsRoute = require("./routes/reportsRoute"); // Fixed typo here from 'resportsRoute'

app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", reportsRoute);
const port = process.env.PORT || 5000;

const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, "../client/build"))); // Adjusted the path
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html")); // Adjusted the path
  });   
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  console.log("hello world");
  res.json("hello world");
});
