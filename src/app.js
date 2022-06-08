const path = require("path");
const express = require("express");

const app = express();
const publicDir = path.join(__dirname, "../public")

app.use(express.static(publicDir));

app.get("/weather", (req, res) => {
  res.send({
    forcast: "It is raining",
    location: "Taipei",
  });
});

// app.com
// app.com/help
// app.com/about

app.listen(3003, () => {
  console.log("Server is up on port 3000.");
});
