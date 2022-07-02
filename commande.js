const { exec } = require("child_process");
const { clear } = require("console");
const fs = require("fs");
const { exit, chdir, cwd } = require("process");
const insertLine = require("insert-line");

const prompt = require("prompt-sync")();

const creat = (a) => {
  const name = prompt("What is your project name?   ");
  console.log(`Creating a new project ${name}........`);

  //create a new flutter project
  exec(`flutter create ${name}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);

      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log("Your project is created");
    //firebase init in the project
    const firebase = prompt("Do you want to initialize firebase? (y/n)   ");
    if (firebase === "y") {
      console.log("Initializing firebase...");
      console.log("Please wait...");
      console.log("that will take a while...");

      //install firebase configuration

      //change directory to the project folder  to initialize firebase

      try {
        chdir(`${cwd()}/${name}/android`);
        //add firebase to the gradle file
        insertLine("build.gradle")
          .content("\tclasspath 'com.google.gms:google-services:4.3.8'")
          .at(11)
          .then(function (err) {
            var content = fs.readFileSync("build.gradle", "utf8");
            console.log(content);
          });

        console.log("end of line reached");

        console.log(`New directory: ${cwd()}`);
      } catch (err) {
        console.error(`error: ${err}`);
      }
    }

    // finish creating the project
    else if (firebase === "n") {
      console.log(
        " \n \nAll done! \n \nIn order to run your application, type:\n \t$ cd react \n \t$ flutter run"
      );
    }
    // end of firebase init in the project
  });
};

module.exports = { creat };
