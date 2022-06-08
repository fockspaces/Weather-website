const path = require("path");
const express = require("express");

const app = express();
const publicDir = path.join(__dirname, "../public")

app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.send("<h1>Weather<h/1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Fock",
      age: 27,
    },
    {
      name: "Space",
      age: 22,
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    forcast: "It is raining",
    location: "Taipei",
  });
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
