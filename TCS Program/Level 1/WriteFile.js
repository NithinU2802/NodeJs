
// Import required files 
const readline = require("readline");
const fs = require("fs");


// TO done a task of input/output create an object
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// input/output object to get and write a message in the file..!
rl.question("What Would you like to write in file?",(answer)=>{
    fs.writeFile("Message.txt",answer,(error)=>{
        if(error) throw error;
        console.log("The File hass been saved successfully..!")
    });
    rl.close();
});