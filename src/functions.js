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

function createObjectFromCSVFile(inputFile: string, onFileLoadedFunction: Array) {
  let csv                = require('ya-csv');
  let returnValue: Array = [];
  let reader             = csv.createCsvFileReader(inputFile,
                                                   {columnsFromHeader: true});
  reader.addListener(
    'data',
    // Called after each row from CSV file is loaded.
    (rowObject) => {
      // The rowObject is a JSON object, you can get it's properties out by using the
      // keys that are from the first header row of the input CSV file.
      // Eg: if header row of the CSV file is: Type, Trans Date, Post Date
      // then you can use rowObject['Type'], rowObject['Trans Date'], and rowObject['Post
      // Date'] to get the values for each of the columns in the row.
      returnValue.push(rowObject);
    });
  
  reader.addListener(
    'end',
    // Called after all rows have been loaded from CSV file.
    function (data_row) {
      onFileLoadedFunction(reader.columnNames, returnValue);
    });
}

function columnNameArrayToString(columnNames: Array<string>) {
  let columnNamesFormattedString = "\n";
  let length                     = columnNames.length;
  
  for (let i = 0; i < length; i++) {
    let colName: string = columnNames[i];
    columnNamesFormattedString += `\t${i}) "${colName}"`;
    if (i !== (
        length - 1
      )) {
      columnNamesFormattedString += "\n ";
    }
  }
  
  return columnNamesFormattedString;
}

function writeArrayToFile(filename: string, data: Array) {
  let fs = require('fs');
  fs.writeFile(filename,
               JSON.stringify(data, null, "\t"),
               (err) => {
                 if (err) {
                   return console.error(err);
                 }
                 console.log(filename + " is written!");
               });
}

module.exports = {createObjectFromCSVFile, columnNameArrayToString, writeArrayToFile};