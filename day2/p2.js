const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Data Read From File:", data);
});
