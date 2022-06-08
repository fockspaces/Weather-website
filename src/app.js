const path = require("path");
const express = require("express");

const app = express();
const publicDir = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDir));
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Fock Space",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Fock Space",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Fock Space",
  });
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
