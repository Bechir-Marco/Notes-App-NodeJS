const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...';
}
const addNote = function (title, body) {
    const notes = loadNotes();
    
    const duplicateNotes = notes.filter(function (el) {
        return el.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
          title: title,
          body: body
        });
        saveNotes(notes)
        console.log(chalk.bgGreen("Note added!"));
    }
    else {
        console.log(chalk.bgRed("no Note added!"));
    }
    
}
const removeNote = function (title) {
    
    const notes = loadNotes();
    
   const newNotes = notes.filter((el) => {
     return el.title !== title;
   });
    
    if (notes.length > newNotes.length) {
        console.log(chalk.bgGreen("Note removed!"));
        saveNotes(newNotes);
    }
    else {
        console.log(chalk.bgRed("no Note found!"));
     }   
    }
    
    
    
const saveNotes = function (notes) {
    
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)
}
const loadNotes = function () {
    try {
        const bufferData = fs.readFileSync('notes.json');
        
        const data = bufferData.toString();
     return   JSON.parse(data);
    }
    catch(e) {
        return []
    }
}

module.exports = {
  getNotes: getNotes,
    addNote: addNote,
  removeNote:removeNote
}