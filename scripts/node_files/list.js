const fs = require("fs");

fs.readdir("./node_files", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("complete");
  console.log(files);
});

console.log("started reading files");
