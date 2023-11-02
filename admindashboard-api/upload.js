const express = require("express");
const app = express();
const multer = require("multer");
const maxSize = 1048576;
app.listen(8081, (err) => {
  if (err) {
    console.log(err);
  }

  ("uploadserver started at 8081");
});

//DiskStorage to store uploadedfile in the system

const storage = multer.diskStorage({
  destination: function (req, file, cllbck) {
    cllbck(null, "uploads");
  },
  filename: function (req, file, cllbck) {
    const ext = file.mimetype.split("/")[1];
    const uniqueSuffix =
      Date.now().toString().substring(0, 10) +
      "_" +
      Math.round(Math.random() * 1000) +
      `.${ext}`;
    cllbck(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.split("/")[1] === "jpeg" ||
    file.mimetype.split("/")[1] === "pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("File is not of supported format"), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: maxSize },
}).single("myFile");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) console.log(err);
    else console.log("file uploaded successfully");
  });
});
