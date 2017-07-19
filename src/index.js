// @flow

import type FileLocationsType from './types.js';

let inquirer  = require('inquirer');
let functions = require("./functions");

// Display welcome message.
let message: string = "node-csv-to-json";
console.log(message);

// Ask the user for the path to the CVS file.
let questions = [
  {
    type   : 'input',
    name   : 'inputFilePath',
    message: 'What is the path to your input CSV file?',
    default: 'assets/sampledata.csv',
  },
  {
    type   : 'output',
    name   : 'outputFilePath',
    message: 'What is the path to the output JS file?',
    default: 'assets/sampledata.js',
  },
];
inquirer.prompt(questions).then(userReply);

function userReply(answers: FileLocationsType) {
  let inputfile  = answers.inputFilePath;
  let outputfile = answers.outputFilePath;
  
  console.log(inputfile);
  console.log(outputfile);
  
  functions.createObjectFromCSVFile(
    inputfile,
    (columnNames: Array, data: Array) => {
      let names = functions.columnNameArrayToString(columnNames);
      console.log(`column names: ${names}`);
      console.log(`number of rows: ${data.length}`);
    });
  
}