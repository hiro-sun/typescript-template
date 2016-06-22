# TypeScript Template

This is the template of TypeScript project.
"fw.sh" is a shell script that monitors the update of the file.
The "makefile" there is a build, test, description for the coverage.
Simple sample code are included.

## Required
- NodeJS
- GNU Make

This project will use only the Node Module, which was installed on the local.

## How To
`$ git clone https://github.com/hiro-sun/typescript-template.git`

`$ npm install`

`$ cd typescript-template/ts`

`$ make init`

The make init execute typings install.

`$ make`

Build the ts file. Run the browserify, and outputs the JavaScript code that can be executed in the browser to the following public/javascripts.

`$ make test`

Build the test file, and run the test with mocha.

`$ make coverage`

To measure the coverage with istanbul and remap-istanbul.

`$ make clean`

Delete build files.

## Monitoring of the file update

`fw.sh [target directory or file] [execute command] [interval seconds]`

`example) $ ./fw.sh './src/*.ts' 'make' 1`
