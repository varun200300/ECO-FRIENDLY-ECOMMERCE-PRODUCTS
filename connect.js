var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/new');
var db=mongoose.connection;
db.on('error', console.log.bind(console,"connection error"));
db.once('open', function(callback){
 console.log("connection succeeded");
})
var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
 extended: true
}));
 
app.post('/sign_up', function(req,res){
 var fname = req.body.fname;
 var lname = req.body.lname;
 var email = req.body.email;
 var Pro = req.body.Pro;
 var qua= req.body.qua;
 var phn = req.body.phn;
 var add = req.body.add;
 var paym = req.body.paym;
 var Banknm = req.body.Banknm;
 var Accnt = req.body.Accnt;
 var Ifsc = req.body.Ifsc;
 var data = {
"fname": fname,
"lname": lname,
"email" : email,
"Pro" : Pro,
"qua" : qua,
"phn" : phn,
"add" : add,
"paym": paym,
"Banknm":Banknm,
"Accnt":Accnt,
"Ifsc":Ifsc,
 }
db.collection('Orders').insertOne(data,function(err, collection){
 if (err) throw err;
 console.log("Record inserted Successfully");
});
return res.redirect('success.html');
})
app.listen(7002);
console.log("server listening at port 7002");
app.post('/contact',function(req,res){
    var Name=req.body.name;
    var Email=req.body.email;
    var Message=req.body.message;
    var data={
        "name":Name,
        "email":Email,
        "message":Message,
    }
    db.collection('Contact Feedback').insertOne(data,function(err,collection){
        if(err) throw err;
        console.log("Record feeded");
    });
    return res.redirect('msg.html');
 })
app.listen(8001);
console.log("server listening at port 8001");
app.post('/sign',function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    var data={
        "email":email,
        "password":password,
    }
    db.collection('sign').insertOne(data,function(err,collection){
        if(err) throw err;
        console.log("Record feeded");
    });
    return res.redirect('index.html');
 })
app.listen(8003);
console.log("server listening at port 8003");