//Modules -  Encapsulated code (only share minimum)
//common js, every file is module (By default)

const name = require('./4-name')//here we assign the module to variable but we can simply require them without assign them to variable 
console.log(name)//here we received an object

const sayHi = require('./5-util')
const items = require('./6-alternativeFlavour');
console.log(items);//here items onjext contain 2 things an array and an object as export in 6-alternativeFlavour

sayHi("susan");
sayHi(name.peter);
sayHi(name[John]);