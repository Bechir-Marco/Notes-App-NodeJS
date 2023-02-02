const chalk = require('chalk');
const fs = require('fs');

const dataJson = fs.readFileSync('./playground/json.json').toString()
const dataObject = JSON.parse(dataJson)
 dataObject.name= 'Marco'
 dataObject.age= 25

newDataToJson = JSON.stringify(dataObject);

fs.writeFileSync('./playground/json.json', newDataToJson);

const a = fs.readFileSync('./playground/json.json');
console.log(a.toString());