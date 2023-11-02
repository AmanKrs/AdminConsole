const fs = require("fs");
const os = require("os");

os.arch();
os.platform();
os.hostname();
os.type();
os.userInfo();

//to Write file that replace the data of file
fs.writeFile(
  "./file2.txt",
  "Content that want to be overwrite in file",
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);
//to read the data of file
fs.readFile("./file2.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
//to open the file
fs.open("file2.txt", "r", function (err, file) {
  if (err) {
    console.log(err);
  }
  console.log("success");
});
//to append data in the file it will not replace the existing data
fs.appendFile(
  "./file2.txt",
  "Content that want to be add in file",
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);
fs.readFile("./file2.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// to del the data
fs.unlink("./file2.txt", function (err) {
  if (err) {
    console.log(err);
  }
});
