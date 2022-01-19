const toTitleCase = require("to-title-case")

// Step 1 - Run "npm init -y" (creates package.json)
// Step 2 - Install the package (npm install || npm i)
// Step 3 - Require the package in the file you need

const titleToConvert = toTitleCase('the catcher in the rye'); 
console.log(titleToConvert)