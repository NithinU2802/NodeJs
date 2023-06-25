/******************************************************************************

    Task is to create an simple application that runs on the express.js server
Make responds to two different routes...

   Json formated data is a collections of objects which has ability to make 
transfer of data according to the lightweight data.

*******************************************************************************/

const express =require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>res.send("Hello World"));

// to return json format data to the website
app.get('/user',(req,res)=>{
    const user=[
        {id: 1, name:'Aslam'},
        {id: 2, name:'Jameer'},
        {id: 3, name:'Nithin'}
    ];
    res.json(user)
});

// to return json format data about my self
app.get('/AboutMe',(req,res)=>{
    const about=[
        {Name:"Nithin U"},
        {Place:"Trichy"},
        {College:"K Ramakrishnan College of Technology"}
    ]
    res.json(about)
})

app.listen(port,()=> console.log(`https://localhost:${port}`))