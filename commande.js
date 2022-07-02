const { exec } = require("child_process");
const { clear } = require("console");
const { read } = require("fs");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const creat = (a) => {
     function create() {
        readline.question('your project name?', name => {
            exec(`flutter create ${name}`, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);

                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(` ${stdout}`);
            });
            readline.close();
        });
    }
    create().then(
        function(value) { console.log("project created"); }
       

    )
}

module.exports = {

    creat
}