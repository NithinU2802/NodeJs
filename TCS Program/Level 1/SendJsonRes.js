const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.method=='GET'){
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify({Name:"Nithin U",Degree:"BE-Computer Science and Engineering",College:"K Ramakrishnan College of Technology"}))
    }else{
        res.writeHead(200,{ "Content-Type": "text/plain"})
        res.end("Method Not Allowed..!")
    }
})

server.listen(3000)