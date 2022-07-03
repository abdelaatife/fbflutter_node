const insertLine = require("insert-line");
const prompt = require("prompt-sync")();
const { exec } = require("child_process");
const lineReader = require("line-reader");
const { cwd } = require("process");
const fs = require("fs");

//insert function to insert a line in a file
function insert(content, line, file) {
  insertLine(file)
    .content(content)
    .at(line)
    .then(function (err) {
      if (err) {
        console.log(err);
      }
    });
}
//end insert function
//ask if user want add other firebase  dependencies
function outherdep() {
  const answer = prompt(
    "Do you want to add other firebase dependencies? (y/n) "
  );
  if (answer === "y") {
    //if user want to add other firebase dependencies
    const database = prompt("Do you want to add firebase database? (y/n) ");
    if (database === "y") {
      //if user want to add firebase database
      exec("flutter pub add firebase_database", (error, stdout) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stdout) {
          console.log("\x1b[32m", "firebase database pub dependency added");
        }
      });
    }
    const auth = prompt("Do you want to add firebase auth? (y/n) ");
    //if user want to add firebase auth
    if (auth === "y") {
      exec("flutter pub add firebase_auth", (error, stdout) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stdout) {
          console.log("\x1b[32m", "firebase auth pub dependency added");
        }
      });
    }
    const storage = prompt("Do you want to add firebase storage? (y/n) ");
    if (storage === "y") {
      //if user want to add firebase storage
      exec("flutter pub add firebase_storage", (error, stdout) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stdout) {
          console.log("\x1b[32m", "firebase storage pub dependency added");
        }
      });
    }
  } else {
    console.log(
      "\x1b[37m",
      "your project is ready \n \nAll done! \n \nIn order to run your application, type:\n \t$ cd react \n \t$ flutter run"
    );
  }
}
//end of outherdep function

//line reader to read a file and changeit
function readFile( file ,keyworde, content) {
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(keyworde,  content);
  
    fs.writeFile(file, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}

//end of line reader
module.exports = { insert, outherdep, readFile };
