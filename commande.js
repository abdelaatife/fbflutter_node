//dependencies
const add = require("./module");
const { exec } = require("child_process");
const { clear } = require("console");
const fs = require("fs");
const process = require("process");
const prompt = require("prompt-sync")();

const { exit, chdir, cwd } = require("process");
//end dependencies
//create commande function
const creat = (a) => {
  //get project name
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
    console.log("\x1b[32m", "Your project is created");
    //firebase init in the project
    const firebase = prompt(
      "Do you want to initialize firebase in your project? (y/n)   "
    );
    //if user want to initialize firebase
    if (firebase === "y") {
      console.log("\x1b[37m", "Initializing firebase...");
      console.log("\x1b[37m", "Please wait...");
      console.log("\x1b[37m", "that will take a while...");
      //install firebase configuration
      //change directory to the project folder  to initialize firebase
      process.chdir(`${cwd()}/${name}/android`);
      //add firebase code to the gradle file in android folder
      add.insert(
        "\tclasspath 'com.google.gms:google-services:4.3.8'",
        11,
        "build.gradle"
      );
      console.log(
        "\x1b[37m",
        "classpath 'com.google.gms:google-services:4.3.8' added to build.gradle"
      );
      //add firebase code to the gradle file in android/app folder
      function secend() {
        process.chdir(`${cwd()}/app`);

        add.insert(
          "apply plugin: 'com.google.gms.google-services'",
          26,
          "build.gradle"
        );
        console.log(
          " apply plugin: 'com.google.gms.google-services' added to app/build.gradle"
        );
        function sec() {
          add.insert("\tmultiDexEnabled true", 55, "build.gradle");
          console.log(
            "\x1b[37m",
            "multiDexEnabled true added to app/build.gradle"
          );
        }
        function tro() {
          add.insert(
            "    implementation 'com.android.support:multidex:1.0.3'",
            73,
            "build.gradle"
          );
          console.log(
            "\x1b[37m",
            "implementation 'com.android.support:multidex:1.0.3' added to app/build.gradle"
          );
          console.log("\x1b[32m", "Firebase is initialized successfully ");
          console.log("\x1b[37m", "Please wait...");
        }
        // this function will be called after the first function
        setTimeout(sec, 1000);
        setTimeout(tro, 2000);
      }
      setTimeout(secend, 1000);
      // therd function will be called after the second function
      //generate firebase project information to add it in firebase console
      async function therd() {
        console.log("\x1b[37m", "generating your project information...");
        process.chdir(`../`);
        console.log("\x1b[37m", "execute ./gradlew signingReport ");
        console.log(
          "\x1b[33m",
          "Get the sha1 and add it to your project in the firebase console"
        );
        //execute gradlew signingReport
        exec(`./gradlew signingReport`, (error, stdout) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          //if there is no error
          else {
            if (stdout) {
              //extract the sha1 from the output and print it in the console
              __index = stdout.indexOf("SHA1");
              console.log("\x1b[34m", stdout.substring(__index, __index + 66));
              console.log(
                "\x1b[33m",
                "Get your andtoid package name and add it to your firebase console"
              );
              console.log(
                "\x1b[37m",
                `your android package name is: ` + "\x1b[34m",
                `com.example.${name}`
              );
              console.log(
                "\x1b[36m",
                "\nDon't forget to download the google-services.json file\n from the firebase console and add it to : " +
                  "\x1b[33m",
                "android/app/"
              );
            }
          }
        });
      }
      //add firebase core pub dependency  in pubspec.yaml file function
      function pub() {
        console.log("\x1b[37m", "adding firebase core pub dependency...");
        console.log("\x1b[37m", "Please wait...");
        process.chdir(`../`);
        process.chdir(`${cwd()}/lib`);
        exec("flutter pub add firebase_core", (error, stdout) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stdout) {
            console.log("\x1b[32m", "firebase core pub dependency added");
            //intialize firebase in main.dart file
            function imr() {
              add.insert(
                "import 'package:firebase_core/firebase_core.dart';  ",
                1,
                "main.dart"
              );
              console.log(
                "\x1b[32m",
                "firebase core pub dependency added to main.dart"
              );
            }
            //this function will be called after the imr function
            function imr2() {
              add.insert(
                "WidgetsFlutterBinding.ensureInitialized();\n await Firebase.initializeApp(); ",
                5,
                "main.dart"
              );
              console.log(
                "\x1b[32m",
                "firebase is initialized successfully in main.dart"
              );
            }

            //order of the functions and timeouts
            setTimeout(imr, 1000);
            setTimeout(imr2, 2000);
           
          }
        });
      }
      //this function will be called after all the functions above finished
      setTimeout(therd, 9000);
      setTimeout(pub, 15000);
       setTimeout(add.outherdep,20000);
    }
    // finish creating the project
    else if (firebase === "n") {
      // if user don't want to initialize firebase
      console.log(
        "\x1b[37m",
        "Your project is created but you don't want to initialize firebase \n \nAll done! \n \nIn order to run your application, type:\n \t$ cd react \n \t$ flutter run"
      );
    }
    // end of firebase init in the project
  });
};
//end of commande function
module.exports = { creat };
