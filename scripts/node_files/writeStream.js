const fs = require("fs");

const writeStream = fs.createWriteStream("./node_files/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./node_files/notes.md", "UTF-8");

readStream.pipe(writeStream);
