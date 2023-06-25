const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const secret='MySecret'
const port=300

app.use(express.json());

app.post('/login',(req,res)=>{
    if(username=='Admin' && password=='Password'){ 
        const token=jwt.sign({username},secret,{expiresIn:'1h'})
        res.json({token});
    }else
    res.status(401).json({message: 'Invalid Credentials..!'})
})

app.listen(port,()=>(console.log(`https://localhost:${port}`)))