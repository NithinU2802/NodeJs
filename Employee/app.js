var exp = require("express") 
var app = exp(); 
var bodyParser = require('body-parser'); 
var mysql = require('mysql'); 

var con = mysql.createConnection({ 
 host: "localhost", 
 user: "root", 
 password: "", 
 database: "nmydb" 
 }); 
 con.connect(function(err){ 
 if(err) throw err 
 console.log("Connected") 
 }); 
 
app.set("view engine","pug") 
app.set("views","./views") 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/',function(req,res){ 
 res.render("createemp.pug"); 
}) 
app.post('/create',function(req,res){ 
    var qry = "INSERT INTO profile (`id`, `name`, `address`, `salary`) VALUES ("+mysql.escape(req.body.id)+","+mysql.escape(req.body.name)+","+mysql.escape(req.body.address)+","+mysql.escape(req.body.salary)+")"; 
 con.query(qry,function(err,result){ 
 if(err) throw err 
 res.send("1 Record successfully Inserted") 
 }) 
}); 
app.post('/search',function(req,res){ 
 var qry = "SELECT `id`, `name`, `address`, `salary` FROM `profile` WHERE `id`="+mysql.escape(req.body.id)+"";

 con.query(qry,function(err,result){ 
if(err) throw err 
 res.render("search.pug",{ 
 id : result[0].id, 
 name : result[0].name, 
 address : result[0].address, 
 salary : result[0].salary 
 }); 
 }) 
}); 

app.post('/update',function(req,res){ 
    var qry = "UPDATE profile SET `name`="+mysql.escape(req.body.name)+", `address`="+mysql.escape(req.body.address)+", `salary`="+mysql.escape(req.body.salary)+" WHERE `id`="+mysql.escape(req.body.id)+"";
 con.query(qry,function(err,result){ 
 if(err) throw err 
 res.send("1 Record Updaated Successfully") 
 }) 
}); 
app.post('/delete',function(req,res){ 
    var qry = "DELETE FROM `profile` WHERE `id`="+req.body.id+"";
 con.query(qry,function(err,result){ 
 if(err) throw err 
 res.send("1 Record Deleted successfully") 
 }) 
});
app.listen(8080)