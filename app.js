console.log('Starting app.');

const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
//let command = process.argv[2];
// the underscore is something we can use to get these arguments
// why? 
let command = argv._[0];
console.log(`Command: ${command}`);
console.log('Yargs:', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if ( command === 'list' ) {
  notes.getAll(); 
} else if ( command === 'read' ) {
  notes.getNote(argv.title);
} else if ( command === 'remove' ) {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
