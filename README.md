# node-csv-to-json

This project loads a CSV file from the local filesystem and generates a JSON object that's written to a JSON file, which can be used for sample data in other projects.

# Instructions to run this

1. Clone the project from [GitHub](https://github.com/r3bl-alliance/node-csv-to-json) `https://github.com/r3bl-alliance/node-csv-to-json`.
2. Go to the folder that you cloned the project in, and run `npm install`.
3. Then build the code using `npm run build`.
4. Finally run it using `npm start`.

There's a script `run.sh` that is provided for your convenience to do the build and run step in one.

# What is in this project

There are a few interesting things in this project that I will call out in this article. 

1. Using `ya-csv` to load CSV files from the filesystem. More info [here](https://www.npmjs.com/package/ya-csv).
2. Using `inquirer` to prompt the user for input from the console. This is a good library to build a command line interpreter (CLI). More info [here](https://www.npmjs.com/package/inquirer).
3. Using Flow type in order to annotate the JavaScript code with static typing that is used while building, but stripped before running the code. More info [here](https://flow.org/en/docs/types/).

## ya-csv

This is a great library 

## inquirer

## flow type

## Open source

Copyright 2017 R3BL LLC. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.