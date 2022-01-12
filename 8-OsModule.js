//OS module is a built-in module provides many of property and methods for interacting with OS as well as with server

const os = require('os')//because it is buit-it module we don't need to pass anything.But when use external one we need to insall them first

//info about current user
const user = os.userInfo()
console.log(user)


//method return the system in upTime in seconds
console.log("The system uptime is :" + (os.uptime()) + " Second");

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: (os.totalmem()),
    freeMem: os.freemem(),
}
console.log(currentOS);
