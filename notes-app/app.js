const fs = require('fs')
fs.writeFileSync('notes.txt', 'This File Was Created By Node.JS');
fs.appendFileSync('notes.txt', ' Text is Apended');
