// Program to read a file 

// importing a module
const fs=require("fs");

fs.readFile("Message.txt","utf-8",(error,data)=>{

    if(error) throw error;
    console.log(data);
});