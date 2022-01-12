//Path Module
const path = require('path');

console.log(path.sep);//show speperater
const filePath = path.join('/content', 'subFolder', 'text.txt');//Show the whole path
console.log(filePath);
console.log(path.basename(filePath));
//absolute path of the file
const absolute = path.resolve(__dirname, 'content', 'subFolder', 'text.txt')
console.log(absolute)//we reuire it because we know that our application is going to run on different environmant to we need absolute path
