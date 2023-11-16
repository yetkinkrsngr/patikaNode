const { create } = require("domain");
const fs = require("fs");

function createAJsonFile() {
  fs.writeFile(
    "employess.json",
    '{"name": "Employee 1 Name", "salary": 2000}',
    (err) => {
      if (err) throw err;
      console.log("JSON file created");
    }
  );
}
function readAjsonFile() {
  fs.readFile("employess.json", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
}
const employees = JSON.stringify({ name: "Employee 2 Name", salary: 3000 });
function uptdateDataOnJson() {
  fs.readFile("employess.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const existingData = JSON.parse(data);

      existingData.newKey = "New Value";

      const updatedData = JSON.stringify(existingData, null, 2);

      fs.writeFile("existingData.json", updatedData, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Data added to the file.");
        }
      });
    }
  });
}
function deleteAJsonFile() {
  fs.unlink("employess.json", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File deleted!");
    }
  });
}

//createAJsonFile();
//readAjsonFile();
//uptdateDataOnJson();
//deleteAJsonFile();
