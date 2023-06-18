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
        - Need to create a server object that can be implemented using createServer 
    method available in http package.
        - Futher that can be accessed by listen(port) method available in server object.

5. SendJsonRes.js - To Implement a JavaScript file that will deliver Json format text 
   toward the webpage.
        - create a server object that holds Json message to be deliver to the html page
    that are used for further processes.
        - Again that can be accessed by listen(port) method available in server object.

6. ApiConnection.js - Create a API Connection application to usage of  an web page 
   https://jsonplaceholder.typicode.com/posts that provide post.
        - It is an API provides various endpoints to interact with a collection of
    dummy posts.

7. ChildProcess.js - Using this file to access gcc an c/c++ compiler to execute the 
   exec command to print the version that represent the childprocess that will 
   deliver the version of the gcc with requred details...

   By these My first level of Node js training has been completed successfully...!