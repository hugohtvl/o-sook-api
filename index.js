const express = require("express");
const cors = require("cors");
const path = require("path");

const port = process.env.port || 4343;

const app = express();

app.use(cors("*"));

const imagePath = path.join(__dirname, "images");
app.use(express.static(imagePath));

app.get("/", (req, res) => {
  res.send("Welcome on the O'Sook API !");
});

const objects = require("./objects.json");

const getObjects = (req, res) => {
  res.status(200).json(objects);
};

app.get("/api/objects", getObjects);

app.get("/api/objects/:id", (req, res) => {
  const element = all.find((element) => element.id == req.params.id);
  if (element) {
    res.status(200).json(element);
  } else {
    res.status(404).json("There is no object with this id");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
