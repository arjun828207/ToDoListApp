const express = require('express');
const bodyParser = require('body-parser');
const app=express();
app.set('view engine', 'ejs');
app.get('/', function(req, res){
   
 var today="x"
 
 
   res.render("list",{nameofday:today});

})
app.listen(3000,function() {
    console.log('listening on port 3000');
})