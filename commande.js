const add = require("./module");
const { exec } = require("child_process");
const { clear } = require("console");
const fs = require("fs");
const process = require("process");
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

      process.chdir(`${cwd()}/${name}/android`);
      //add firebase to the gradle file

      add.insert("\tclasspath 'com.google.gms:google-services:4.3.8'", 11);
      console.log(
        "classpath 'com.google.gms:google-services:4.3.8' added to build.gradle"
      );

      function secend() {
        process.chdir(`${cwd()}/app`);

        add.insert("apply plugin: 'com.google.gms.google-services'", 26);
        console.log(
          "apply plugin: 'com.google.gms.google-services' added to app/build.gradle"
        );
        function sec() {
          add.insert("\tmultiDexEnabled true", 55);
          console.log("multiDexEnabled true added to app/build.gradle");
        }

        function tro() {
          add.insert(
            "    implementation 'com.android.support:multidex:1.0.3'",
            73
          );
          console.log(
            "implementation 'com.android.support:multidex:1.0.3' added to app/build.gradle"
          );
          console.log("Firebase is initialized successfully ");
        }
        setTimeout(sec, 1000);
        setTimeout(tro, 2000);
      }
      setTimeout(secend, 1000);

      function therd() {
        console.log("Please wait...");
        console.log("generating your project information...");
        process.chdir(`../`);
        console.log("./gradlew signingReport executed");
        console.log("get the sha1 and add it to your project in the firebase console");
        exec(`./gradlew signingReport`, (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);

            return;
          }
        
         console.log(stdout);
          
        }); 
        
      }
   function forth () {
    console.log(`\n \n \n your android package name is: com.example.${name}`);
   }
      setTimeout(therd, 9000);
      setTimeout(forth, 10000);
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
