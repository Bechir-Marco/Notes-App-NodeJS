const chalk = require('chalk');
const validator = require('validator');
const { demandOption } = require('yargs');
const yargs = require('yargs');


// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add new Note',
    builder: {
        title: {
            describe: 'title of the add',
            demandOption: false,
            type: 'string'  
        },
        salary: {
            describe: 'title of the add',
            demandOption: true,
            type: Number  
        },
        body: {
            describe: 'This Is Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
    console.log('adding a note',argv.salary);
    console.log('adding a note',argv.body);
}
})  

//  console.log(yargs.argv);
yargs.parse()