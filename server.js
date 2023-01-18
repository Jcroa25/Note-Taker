const express = require("express");
const path = require("path");
const routes = require("./routes/index")

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", routes)

// GET Route for Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/pages/index.html"))
});

// GET Route for Notes Page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/pages/notes.html"))
});



app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`)
});