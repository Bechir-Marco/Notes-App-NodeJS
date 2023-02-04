const fs = require('fs');
const chalk = require('chalk');

const getNotes =  ()=> {
    return 'Your notes...';
}
const addNote =  (title, body) => {
    const notes = loadNotes();
    
    const duplicateNotes = notes.find((el) =>  el.title === title)
    if (!duplicateNotes) {
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
const removeNote =  (title)=> {
    
    const notes = loadNotes();
    
   const newNotes = notes.filter((el) =>  el.title !== title);
    
    if (notes.length > newNotes.length) {
        console.log(chalk.bgGreen("Note removed!"));
        saveNotes(newNotes);
    }
    else {
        console.log(chalk.bgRed("no Note found!"));
     }   
    }
    
    
    
const saveNotes =  (notes)=> {
    
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)
}
const loadNotes =  ()=> {
    try {
        const bufferData = fs.readFileSync('notes.json');
        
        const data = bufferData.toString();
     return   JSON.parse(data);
    }
    catch(e) {
        return []
    }
}
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bgGreen("Your Notes"));
    
    notes.map((el => console.log(el.title)));
    
    
}
const readNotes = (title) => {
    const notes = loadNotes()
    const noteRead = notes.find((el=> el.title ===title))
    if (noteRead) {
       
        console.log(chalk.bgGreen(noteRead.title));
        console.log(noteRead.body);
    }
    else {
        console.log(chalk.bgRed('Note Not Found!'));
    }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};