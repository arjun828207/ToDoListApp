const express = require('express');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({ extended:true}));
app.set('view engine', 'ejs');
var newItem=[];
app.get('/', function(req, res){
   var today=new Date();
   var options={  
       weekday:"long",
       day:"numeric",
       month:"long"
   };
   var day=today.toLocaleDateString("en-us",options);
   res.render("list",{nameofday:day,newItem:newItem});
})
app.post("/",function(req,res){
  var x=req.body.newItem;
  newItem.push(x);
  res.redirect("/");
})
app.listen(3000,function() {
    console.log('listening on port 3000');
})