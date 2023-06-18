# Level 1

  Note: Before Make Sure that you installed the node js in your PC.

    To Run the Node js file use below command on the respected directory
        
            node filename.js

1. HelloWorld.js - Represent me that welcome to the world of Node js.

2. ReadFile.js - To read a file that display details available in the file
   to the console.

       Here we need to import fs module that can be done by require method which 
    will returns an object that stored as const data type.

        fs Module - File System Module

        Further using that object access the readFile and pass the parameter(FileName, 
    format, callback function). 
        callback function -> (error,data) lambda to make display Error or data...! 

3. WriteFile.js - To Write data in a file or create a file.

        Need to import 2 modules fs and readline to collect data from the console
    as the imported module can be accessed by the const object that need to be 
    initialized as fs and readline.

        - Now readline object to access the method createInterface for input and output
    operation to be implemented and load in an object rl.
        - using rl frame a question and callback function inside the question method. 
    Whereas inside the callback function need to get input and write it in the file.
        - The content has been written through the method writeFile available in the
    rs object.  
        - Finally, we need to pass question, answer and another callback function for
    writeFile to write content the file.
        - As Important please close the rl as input/output operation is over and let 
    it get out of the command line.

4. SimpleStaticSite.js - To Implement a simple webserver that will deliver the static 
   website and the given port.
