#!/usr/bin/env node

const { exit } = require("yargs");
const yargs = require("yargs");
const commands = require("./commande");


let command = process.argv[2];
if (command === "create") {
  commands.creat(yargs.argv.item);
} else {
  console.log("command not found");
  exit();
}
