const express = require("express");
const app = express();
const port = 8080;
const circleCircumference = require("./circleCircumference.js");
const circleArea = require("./circleArea.js");

app.get("/", (req, res) => {
  const radius = 5;
  const circumferenceResult = circleCircumference(radius);
  const areaResult = circleArea(radius);
  const calculate = {
    circleCircumference: circumferenceResult,
    circleArea: areaResult,
  };
  res.json(calculate);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
