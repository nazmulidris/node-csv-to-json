/*
 * Copyright 2018 Nazmul Idris. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    message: 'What is the path to the output JSON file?',
    default: 'assets/sampledata.json',
  },
];
inquirer.prompt(questions).then(userReply);

function userReply(answers: FileLocationsType) {
  let inputFile  = answers.inputFilePath;
  let outputFile = answers.outputFilePath;
  
  console.log(inputFile);
  console.log(outputFile);
  
  functions.createObjectFromCSVFile(
    inputFile,
    (columnNames: Array, data: Array) => {
      let names = functions.columnNameArrayToString(columnNames);
      console.log(`column names: ${names}`);
      console.log(`number of rows: ${data.length}`);
      functions.writeArrayToFile(outputFile, data);
    });
  
}