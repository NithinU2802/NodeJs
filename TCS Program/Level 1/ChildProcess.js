const{ exec }=require("child_process")

exec("gcc --version",(error,stdout,stderr)=>{
    if(error){
        console.error(`exec error: ${error} `)
        return
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
})