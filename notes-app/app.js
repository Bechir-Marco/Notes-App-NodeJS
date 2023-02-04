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
  handler (argv) {
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
  handler (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List your Notes",
  handler() {
    notes.listNotes()
  },
});
yargs.command({
  command: "read",
  describe: "read a Note",
    title: {
      describe: "title of the read",
      demandOption: true,
      type: "string",
    },
  handler(argv) {
    notes.readNotes(argv.title)
  },
});
// console.log(yargs.argv);
yargs.parse();