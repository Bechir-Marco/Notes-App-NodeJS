const chalk = require('chalk');
const fs = require('fs');
const { argv } = require('process');
const yargs = require('yargs');
const notes = require('./notes.js');


yargs.command({
  command: "add",
  describe: "Add new Note",
  builder: {
    title: {
      describe: "title of the add",
      demandOption: false,
      type: "string",
    },
    body: {
      describe: "This Is Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
   
  }
});
yargs.command({
  command: "remove",
  describe: "Remove new Note",
  builder: {
    title: {
      describe: "title of the remove",
      demandOption: true,
      type: "string",
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();