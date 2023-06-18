// To run a static webpage on the intergrated server by this js file

const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        if(err) throw err;
        res.writeHead(100,{'Content-Type':'text/html'})
        res.write(data);
        res.end();
    });
});

server.listen(3000);