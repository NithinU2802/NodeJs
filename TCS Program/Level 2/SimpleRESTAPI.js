/******************************************************************************

    Task is to create an simple application that runs on the express.js server
Make responds to two different routes...

   

*******************************************************************************/

const express =require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>res.send("Hello World"));

// app.get('/user',(req,res)=>{
//     const user=[
//         {id: 1, name:'Aslam'},
//         {id: 2, name:'Jameer'},
//         {id: 3, name:'Nithin'}
//     ];
//     res.json(user)
// });

app.listen(port,()=> console.log(`https://localhost:${port}`))